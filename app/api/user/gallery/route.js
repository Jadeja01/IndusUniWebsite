import { NextResponse } from "next/server";
import connectDB from "@/backend/dbConnect";
import Gallery from "@/backend/models/Gallery";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const items = await Gallery.find({
      uploaderId: session.user.id,
    }).sort({ createdAt: -1 });

    return NextResponse.json(items);

  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch" },
      { status: 500 }
    );
  }
}
