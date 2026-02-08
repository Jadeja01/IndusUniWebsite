import connectDB from "@/backend/dbConnect";
import dataSchema from "@/backend/schema";
import Contribution from "@/backend/models/Contribution";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectDB();

    const url = new URL(req.url);
    const subject = url.searchParams.get("subject");

    if (!subject) {
      return NextResponse.json(
        { error: "Subject parameter is required" },
        { status: 400 },
      );
    }

    // Fetch old data
    const files = await dataSchema.find({ subject }).lean(); //Material model in database

    if (files.length === 0) {
      return NextResponse.json({ files: [] });
    }

    const semester = files[0].semester;

    // Fetch approved contributions (NEW data)
    const contributions = await Contribution.find({
      subject,
      documentClgYear: `year${semester}`,
      status: "approved",
    })
      .select(
        "documentType driveViewLink documentTitle documentYear approvedAt",
      )
      .populate("uploaderId", "name email")
      .lean();

    // Group contributions
    const grouped = {
      pyqs: [],
      assignments: [],
      practicals: [],
      notes: [],
    };

    for (const c of contributions) {
      if (c.documentType === "pyqs") {
        grouped.pyqs.push({
          title: c.documentTitle || "Student Contribution",
          fileUrl: c.driveViewLink,
          year: c.documentYear || "Unknown",
          uploader: c.uploaderId?.name || "Anonymous",
          approvedAt: c.approvedAt,
        });
      } else if (c.documentType === "assignment") {
        grouped.assignments.push({
          title: c.documentTitle || "Student Contribution",
          fileUrl: c.driveViewLink,
          year: c.documentYear || "Unknown",
          uploader: c.uploaderId?.name || "Anonymous",
          approvedAt: c.approvedAt,
        });
      } else if (c.documentType === "practicals") {
        grouped.practicals.push({
          title: c.documentTitle || "Student Contribution",
          fileUrl: c.driveViewLink,
          year: c.documentYear || "Unknown",
          uploader: c.uploaderId?.name || "Anonymous",
          approvedAt: c.approvedAt,
        });
      } else if (c.documentType === "notes") {
        grouped.notes.push({
          title: c.documentTitle || "Student Contribution",
          fileUrl: c.driveViewLink,
          year: c.documentYear || "Unknown",
          uploader: c.uploaderId?.name || "Anonymous",
          approvedAt: c.approvedAt,
        });
      } else {
        console.warn(
          `Unknown document type: ${c.documentType} for contribution ${c._id}`,
        );
      }
    }

    // Merge OLD + NEW data
    const mergedFile = {
      ...files[0],
      pyqs: [...(files[0].pyqs || []), ...grouped.pyqs],
      assignments: [...(files[0].assignments || []), ...grouped.assignments],
      practicals: [...(files[0].practicals || []), ...grouped.practicals],
      notes: [...(files[0].notes || []), ...grouped.notes],
    };

    return NextResponse.json({ files: [mergedFile] });
  } catch (error) {
    console.error("Error occurs during fetching and merging files:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
