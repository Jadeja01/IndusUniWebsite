export const runtime = "nodejs";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import connectDB from "@/backend/dbConnect";
import Contribution from "@/backend/models/Contribution";
import { uploadPdfToDrive } from "@/lib/googleDrive";

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();

    const userId = session.user.id;
    const documentType = formData.get("documentType");
    const documentClgYear = formData.get("documentClgYear");
    const branch = formData.get("branch");
    const documentTitle = formData.get("documentTitle");
    const documentYear = formData.get("documentYear");
    const file = formData.get("file");
    const anonymous = formData.get("anonymous") === "true";
    const confirmRights = formData.get("confirmRights") === "true";
    const subject = formData.get("subject")?.trim().toLowerCase();

    if (
      !subject ||
      !documentType ||
      !documentClgYear ||
      !branch ||
      !file ||
      !documentTitle ||
      !documentYear
    ) {
      return NextResponse.json(
        { error: "Some required fields are missing" },
        { status: 400 },
      );
    }
    const allowedSubjects = [
      //1st year (16 subjects)
      "es",
      "calculus",
      "ec",
      "boe",
      "tcss",
      "eg",
      "iks",
      "automobile",
      "dela",
      "ep",
      "bcps",
      "workshop",
      "bst",
      "pps",
      "acdc",
      "bac",

      //2nd year(11subjects)
      "psnm",
      "ict",
      "de",
      "oocu",
      "dbms",
      "hvpe",
      "dsa",
      "os",
      "mfe",
      "cjp",
      "coa",
    ];

    if (!allowedSubjects.includes(subject)) {
      return NextResponse.json({ error: "Invalid subject" }, { status: 400 });
    }

    if (!confirmRights) {
      return NextResponse.json(
        { error: "Upload rights confirmation required" },
        { status: 400 },
      );
    }

    if (file.type !== "application/pdf") {
      return NextResponse.json(
        { error: "Only PDF files are allowed" },
        { status: 400 },
      );
    }

    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File size must be under 10MB" },
        { status: 400 },
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");

    const { fileId, webViewLink } = await uploadPdfToDrive(
      buffer,
      `${subject}_${documentType}_${safeName}`,
    );

    await connectDB();
    await Contribution.create({
      uploaderId: userId,
      documentType,
      documentClgYear,
      branch,
      subject,
      documentTitle,
      documentYear,
      driveFileId: fileId,
      driveViewLink: webViewLink,
      anonymous,
      status: "pending",
    });

    return NextResponse.json(
      { success: true, message: "Upload successful. Waiting for approval..." },
      { status: 200 },
    );
  } catch (err) {
    console.error("Upload Error:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
