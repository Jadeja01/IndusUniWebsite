export const runtime = "nodejs";

import connectDB from "@/backend/dbConnect";
import Contribution from "@/backend/models/Contribution";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const subject = searchParams.get("subject");
    const semester = searchParams.get("semester");

    if (!subject || !semester) {
      return NextResponse.json(
        { error: "Missing subject or semester" },
        { status: 400 }
      );
    }

    await connectDB();

    const contributions = await Contribution.find({
      subject,
      documentYear: `sem${semester}`,
      status: "approved",
    })
      .select("documentType driveViewLink description createdAt")
      .sort({ createdAt: -1 })
      .lean();

    // Group into UI-friendly shape
    const grouped = {
      pyqs: [],
      assignments: [],
      practicals: [],
      notes: [],
      course_file: [],
    };

    for (const item of contributions) {
      if (item.documentType === "question_paper") {
        grouped.pyqs.push(item);
      } else if (item.documentType === "assignment") {
        grouped.assignments.push(item);
      } else if (item.documentType === "practicals") {
        grouped.practicals.push(item);
      } else if (item.documentType === "notes") {
        grouped.notes.push(item);
      } else if (item.documentType === "course_file") {
        grouped.course_file.push(item);
      }
    }

    return NextResponse.json(grouped);
  } catch (err) {
    console.error("Subject materials API error:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
