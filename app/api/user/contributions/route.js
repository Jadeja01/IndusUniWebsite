export const runtime = "nodejs";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectDB from "@/backend/dbConnect";
import Contribution from "@/backend/models/Contribution";
import User from "@/backend/models/User";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const user = await User.findById(session.user.id)
      .select("tokens")
      .lean();

    const contributions = await Contribution.find({
      uploaderId: session.user.id,
      status: ["approved", "pending", "rejected"],
    })
      .select(
        "documentTitle documentType driveViewLink tokensAwarded status rejectionReason createdAt"
      )
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      tokens: user?.tokens || 0,
      contributions,
    });
  } catch (err) {
    console.error("User contributions API error:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
