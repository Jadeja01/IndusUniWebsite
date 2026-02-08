export const runtime = "nodejs";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectDB from "@/backend/dbConnect";
import Contribution from "@/backend/models/Contribution";
import User from "@/backend/models/User";
import TokenLedger from "@/backend/models/TokenLedger";
import { NextResponse } from "next/server";

import { DRIVE_FOLDERS } from "@/lib/driveFolders";
import { moveFileSafely } from "@/lib/googleDrive";

export async function POST(req, { params }) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  await connectDB();

  const contribution = await Contribution.findById(params.id);
  if (contribution.documentType === "course_file") {
    const existing = await Contribution.findOne({
      subject: contribution.subject,
      documentClgYear: contribution.documentClgYear,
      branch: contribution.branch,
      documentType: "course_file",
      status: "approved",
    });

    if (existing) {
      return NextResponse.json(
        {
          error: "Syllabus already exists for this subject",
          requiresAction: "replace",
          existingId: existing._id,
        },
        { status: 409 },
      );
    }
  }

  if (!contribution || contribution.status !== "pending") {
    return NextResponse.json(
      { error: "Invalid contribution state" },
      { status: 400 },
    );
  }

  const { documentClgYear, documentType, driveFileId } = contribution;

  // Resolve target folder based on year and document type
  const semMap = DRIVE_FOLDERS[documentClgYear.toLowerCase()];
  if (!semMap) {
    return NextResponse.json(
      { error: "Invalid college year mapping" },
      { status: 400 },
    );
  }

  const targetFolderId = semMap[documentType];

  if (!targetFolderId) {
    return NextResponse.json(
      { error: "Invalid document type mapping" },
      { status: 400 },
    );
  }

  const sourceFolderId = DRIVE_FOLDERS.STUDENT_UPLOADS;

  // MOVE FILE
  try {
    await moveFileSafely({
      fileId: driveFileId,
      fromFolderId: sourceFolderId,
      toFolderId: targetFolderId,
    });
  } catch (err) {
    console.error("Drive move failed:", err);
    return NextResponse.json(
      { error: "Drive move failed. Approval aborted." },
      { status: 500 },
    );
  }

  // Mint tokens ONLY AFTER successful move
  let TOKENS;
  if (documentType === "course_file") {
    TOKENS = 1;
  } else if (documentType === "notes") {
    TOKENS = 2;
  } else if (documentType === "practicals") {
    TOKENS = 2;
  } else if (documentType === "pyqs") {
    TOKENS = 3;
  } else if (documentType === "assignment") {
    TOKENS = 5;
  } else {
    console.warn("Unknown document type for token assignment:", documentType);
  }

  const user = await User.findById(contribution.uploaderId);
  const newBalance = (user.tokens || 0) + TOKENS;
  user.tokens = newBalance;

  await user.save();

  await TokenLedger.create({
    userId: user._id,
    source: "contribution",
    referenceId: contribution._id,
    tokens: TOKENS,
    balanceAfter: newBalance,
  });

  // Finalize approval
  contribution.status = "approved";
  contribution.tokensAwarded = TOKENS;
  contribution.approvedBy = session.user.id;
  contribution.approvedAt = new Date();

  await contribution.save();

  return NextResponse.json({ success: true });
}
