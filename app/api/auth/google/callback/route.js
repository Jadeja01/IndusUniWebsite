import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Missing code" }, { status: 400 });
  }

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_OAUTH_REDIRECT_URI
  );

  const { tokens } = await oauth2Client.getToken(code);

  /**
   * IMPORTANT:
   * Save tokens.refresh_token securely
   * (DB or env for now)
   */
  console.log("REFRESH TOKEN:", tokens.refresh_token);

  return NextResponse.json({
    success: true,
    message: "Google Drive connected successfully",
  });
}
