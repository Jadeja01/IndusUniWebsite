export const runtime = "nodejs"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectDB from "@/backend/dbConnect";
import Contribution from "@/backend/models/Contribution";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json(
        { error: "Forbidden" },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status") || "pending";

    await connectDB();

    const contributions = await Contribution.find({ status })
      .populate("uploaderId", "name email")
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({ contributions });
  } catch (err) {
    console.error("Admin contributions API error:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}


// What i learned 
// Use of populate in mongoose to fetch related user data (name, email) for each contribution's uploaderId field.
// We have to import User model to use populate method
