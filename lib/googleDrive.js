import { google } from "googleapis";
import { Readable } from "stream";

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_OAUTH_REDIRECT_URI,
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_OAUTH_REFRESH_TOKEN,
});

const drive = google.drive({
  version: "v3",
  auth: oauth2Client,
});

export async function uploadPdfToDrive(buffer, fileName) {
  const stream = Readable.from(buffer);

  const res = await drive.files.create({
    requestBody: {
      name: fileName,
      parents: [process.env.GOOGLE_DRIVE_STUDENT_UPLOADS_FOLDER_ID],
      mimeType: "application/pdf",
    },
    media: {
      mimeType: "application/pdf",
      body: stream,
    },
    fields: "id, webViewLink",
  });

  const fileId = res.data.id;
  await drive.permissions.create({
    fileId,
    requestBody: {
      role: "reader",
      type: "anyone",
    },
  });

  const previewLink = `https://drive.google.com/file/d/${fileId}/preview`;

  return {
    fileId: res.data.id,
    webViewLink: previewLink,
  };
}

export async function moveFileSafely({ fileId, fromFolderId, toFolderId }) {
  if (!fileId || !fromFolderId || !toFolderId) {
    throw new Error("Invalid drive move parameters");
  }

  await drive.files.update({
    fileId,
    addParents: toFolderId,
    removeParents: fromFolderId,
    fields: "id, parents",
  });
}

export async function moveFileToFolder(fileId, targetFolderId) {
  // Get current parents
  const file = await drive.files.get({
    fileId,
    fields: "parents",
  });

  const previousParents = file.data.parents?.join(",");

  // Move file
  await drive.files.update({
    fileId,
    addParents: targetFolderId,
    removeParents: previousParents,
    fields: "id, parents",
  });
}

