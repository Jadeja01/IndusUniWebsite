import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function GET() {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_OAUTH_REDIRECT_URI
  );

  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",      // REQUIRED
    prompt: "consent",            // REQUIRED (to get refresh token)
    scope: ["https://www.googleapis.com/auth/drive.file"],
    redirect_uri: process.env.GOOGLE_OAUTH_REDIRECT_URI
  });

  return NextResponse.redirect(authUrl);
}
