import { NextResponse } from "next/server";
import connectDB from "@/backend/dbConnect";
import Gallery from "@/backend/models/Gallery";
import { uploadPdfToDrive } from "@/lib/googleDrive";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  try {
    await connectDB();

    const items = await Gallery.find({ status: "approved" }).lean();

    // Randomize order
    const shuffled = items.sort(() => Math.random() - 0.5);

    return NextResponse.json(shuffled);
  } catch (error) {
    console.error("Gallery GET error:", error);
    return NextResponse.json(
      { message: "Failed to fetch gallery" },
      { status: 500 }
    );
  }
}


export async function POST(req) {
      const session = await getServerSession(authOptions);

    if (!session) {
      return Response.json(
        { message: "Login required" },
        { status: 401 }
      );
    }
  try {
    await connectDB();

    const formData = await req.formData();

    const type = formData.get("type");
    const userName = formData.get("userName");
    const uploaderId = formData.get("uploaderId");

    let imageUrl = null;
    let text = null;
    let caption = formData.get("caption");

    if (type === "image") {
      const file = formData.get("image");

      if (!file) {
        return NextResponse.json(
          { message: "Image required" },
          { status: 400 }
        );
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const { webViewLink } = await uploadPdfToDrive(
        buffer,
        `${Date.now()}_${file.name}`,
        file.type
      );

      imageUrl = webViewLink;
    }

    if (type === "thought") {
      text = formData.get("text");
    }

    const newItem = await Gallery.create({
      type,
      imageUrl,
      text,
      caption,
      userName,
      uploaderId,
      status: "pending",
    });

    return NextResponse.json(newItem);
  } catch (error) {
    console.error("Gallery POST error:", error);
    return NextResponse.json(
      { message: "Upload failed" },
      { status: 500 }
    );
  }
}

