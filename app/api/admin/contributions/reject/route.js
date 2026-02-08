export const runtime = "nodejs";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectDB from "@/backend/dbConnect";
import Contribution from "@/backend/models/Contribution";
import { moveFileToFolder } from "@/lib/googleDrive";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { contributionId, reason } = await req.json();

    if (!contributionId || !reason?.trim()) {
      return NextResponse.json(
        { error: "Contribution ID and reason are required" },
        { status: 400 }
      );
    }

    await connectDB();

    const contribution = await Contribution.findById(contributionId);

    if (!contribution) {
      return NextResponse.json(
        { error: "Contribution not found" },
        { status: 404 }
      );
    }

    if (contribution.status !== "pending") {
      return NextResponse.json(
        { error: "Only pending contributions can be rejected" },
        { status: 400 }
      );
    }

    // Move file to Rejected folder
    await moveFileToFolder(
      contribution.driveFileId,
      process.env.GOOGLE_DRIVE_REJECTED_FOLDER_ID
    );

    // Update DB
    contribution.status = "rejected";
    contribution.rejectionReason = reason.trim();
    contribution.approvedBy = session.user.id;
    contribution.approvedAt = new Date();

    await contribution.save();

    return NextResponse.json({
      success: true,
      message: "Contribution rejected and moved to Rejected folder",
    });
  } catch (err) {
    console.error("Reject API error:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
