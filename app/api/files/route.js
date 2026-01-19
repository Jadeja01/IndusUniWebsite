import connectDB from "@/backend/dbConnect";
import dataSchema from "@/backend/schema";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    // const session = await getServerSession(authOptions);

    // if (!session) {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }

    // if (!session.user.profileCompleted) {
    //   return NextResponse.json(
    //     { error: "Profile incomplete" },
    //     { status: 403 },
    //   );
    // }
    await connectDB();

    const url = new URL(req.url);
    const subject = url.searchParams.get("subject");

    if (!subject) {
      return Response.json(
        { error: "Subject parameter is required" },
        { status: 400 },
      );
    }
    const files = await dataSchema.find({ subject: subject });

    if (files.length === 0) {
      const availableSubjects = await dataSchema.distinct("subject");
      return Response.json({
        files: [],
        message: "No files found for this subject",
        availableSubjects: availableSubjects,
      });
    }

    return Response.json({ files });
  } catch (error) {
    console.error("API Error:", error);
    return Response.json(
      {
        error: "Internal Server Error",
        details: error.message,
      },
      { status: 500 },
    );
  }
}
