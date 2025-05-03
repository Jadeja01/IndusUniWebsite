import connectDB from "@/backend/dbConnect";
import dataSchema from "@/backend/schema";

export async function GET(req) {
  try {
    await connectDB();

    const url = new URL(req.url);
    const subject = url.searchParams.get('subject');
    console.log('API - Searching for subject:', subject);

    if (!subject) {
      return Response.json({ error: "Subject parameter is required" }, { status: 400 });
    }
    const files = await dataSchema.find({ subject: subject });
    console.log('files',files);
    
    console.log(`Found ${files.length} files for subject: ${subject}`);
    
    if (files.length === 0) {
      const availableSubjects = await dataSchema.distinct('subject');
      return Response.json({ 
        files: [],
        message: "No files found for this subject",
        availableSubjects: availableSubjects
      });
    }
    
    return Response.json({ files });
  } catch (error) {
    console.error("API Error:", error);
    return Response.json({ 
      error: "Internal Server Error", 
      details: error.message 
    }, { status: 500 });
  }
}