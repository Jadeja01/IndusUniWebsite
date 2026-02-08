export const runtime = "nodejs";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectDB from "@/backend/dbConnect";
import Contribution from "@/backend/models/Contribution";
import { DRIVE_FOLDERS } from "@/lib/driveFolders";
import { moveFileSafely } from "@/lib/googleDrive";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  await connectDB();

  const newSyllabus = await Contribution.findById(params.id);
  if (!newSyllabus || newSyllabus.status !== "pending") {
    return NextResponse.json({ error: "Invalid syllabus" }, { status: 400 });
  }

  const oldSyllabus = await Contribution.findOne({
    subject: newSyllabus.subject,
    documentClgYear: newSyllabus.documentClgYear,
    branch: newSyllabus.branch,
    documentType: "course_file",
    status: "approved",
  });

  if (!oldSyllabus) {
    return NextResponse.json(
      { error: "No existing syllabus to replace" },
      { status: 400 }
    );
  }

  const syllabusFolder =
    DRIVE_FOLDERS[newSyllabus.documentClgYear]?.syllabus;

  if (!syllabusFolder) {
    return NextResponse.json(
      { error: "Syllabus folder not configured" },
      { status: 500 }
    );
  }

  // 1️⃣ Move NEW syllabus into syllabus folder
  await moveFileSafely({
    fileId: newSyllabus.driveFileId,
    fromFolderId: DRIVE_FOLDERS.STUDENT_UPLOADS,
    toFolderId: syllabusFolder,
  });

  // 2️⃣ Mark OLD syllabus as replaced (NO delete)
  oldSyllabus.status = "replaced";
  await oldSyllabus.save();

  // 3️⃣ Approve NEW syllabus
  newSyllabus.status = "approved";
  newSyllabus.approvedBy = session.user.id;
  newSyllabus.approvedAt = new Date();
  await newSyllabus.save();

  return NextResponse.json({ success: true });
}
