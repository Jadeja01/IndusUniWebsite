import { NextResponse } from "next/server";
import connectDB from "../../../../../backend/dbConnect";
import Gallery from "../../../../../backend/models/Gallery";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function PATCH(req, context) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "admin") {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 403 }
      );
    }

    // ✅ unwrap params
    const { id } = await context.params;

    const { status } = await req.json();

    if (!["approved", "rejected"].includes(status)) {
      return NextResponse.json(
        { message: "Invalid status" },
        { status: 400 }
      );
    }

    const updated = await Gallery.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    return NextResponse.json(updated);

  } catch (error) {
    console.error("Gallery PATCH error:", error);

    return NextResponse.json(
      { message: "Update failed" },
      { status: 500 }
    );
  }
}

