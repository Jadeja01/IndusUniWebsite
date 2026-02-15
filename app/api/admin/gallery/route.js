import { NextResponse } from "next/server";
import connectDB from "../../../../backend/dbConnect"
import Gallery from "./../../../../backend/models/Gallery";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET(req) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "admin") {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 403 }
      );
    }

    const items = await Gallery.find({ status: "pending" })
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch" },
      { status: 500 }
    );
  }
}
