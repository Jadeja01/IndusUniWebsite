import connectDB from "@/backend/dbConnect";
import User from "@/backend/models/User";
import Profile from "@/backend/models/Profile";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const { userId, profileData } = await req.json();

    if (!userId || !profileData) {
      return NextResponse.json(
        { success: false, message: "Invalid payload" },
        { status: 400 }
      );
    }

    await Profile.findOneAndUpdate(
      { userId },
      profileData,
      { new: true }
    );

    await User.findByIdAndUpdate(userId, {
      profileCompleted: true,
      accessPercent: 90,
    });

    // ✅ ALWAYS return JSON
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Profile save error:", error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
