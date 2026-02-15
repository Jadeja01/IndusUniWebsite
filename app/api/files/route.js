import connectDB from "@/backend/dbConnect";
import Contribution from "@/backend/models/Contribution";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectDB();

    const url = new URL(req.url);
    const subject = url.searchParams.get("subject");
    const year = url.searchParams.get("year");
    

    if (!subject || !year) {
      return NextResponse.json(
        { error: "Subject and year are required" },
        { status: 400 }
      );
    }

    const contributions = await Contribution.find({
      subject,
      documentClgYear: year,
      status: "approved",
    })
      .select(
        "documentType driveViewLink documentTitle documentYear approvedAt uploaderId"
      )
      .populate("uploaderId", "name")
      .lean();

    const grouped = {
      syllabus: null,
      pyqs: [],
      assignments: [],
      practicals: [],
      notes: [],
    };

    for (const c of contributions) {
      const formatted = {
        title: c.documentTitle || "Untitled",
        fileUrl: c.driveViewLink,
        year: c.documentYear || "Unknown",
        uploader: c.uploaderId?.name || "Anonymous",
        approvedAt: c.approvedAt,
      };

      if (c.documentType === "syllabus") {
        grouped.syllabus = formatted;
      } else if (c.documentType === "pyqs") {
        grouped.pyqs.push(formatted);
      } else if (c.documentType === "assignment") {
        grouped.assignments.push(formatted);
      } else if (c.documentType === "practicals") {
        grouped.practicals.push(formatted);
      } else if (c.documentType === "notes") {
        grouped.notes.push(formatted);
      }
    }

    return NextResponse.json({ files: [grouped] });

  } catch (error) {
    console.error("Error fetching subject data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
