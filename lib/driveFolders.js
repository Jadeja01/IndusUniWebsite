// lib/driveFolders.js

export const DRIVE_FOLDERS = {
  STUDENT_UPLOADS: process.env.GOOGLE_DRIVE_STUDENT_UPLOADS_FOLDER_ID,

  year1: {
    pyqs: process.env.DRIVE_YEAR1_PYQS,
    notes: process.env.DRIVE_YEAR1_NOTES,
    practicals: process.env.DRIVE_YEAR1_PRACTICALS,
    course_file: process.env.DRIVE_YEAR1_SYLLABUS,
    assignment: process.env.DRIVE_YEAR1_ASSIGNMENTS,
  },
  year2: {
    pyqs: process.env.DRIVE_YEAR2_PYQS,
    notes: process.env.DRIVE_YEAR2_NOTES,
    practicals: process.env.DRIVE_YEAR2_PRACTICALS,
    course_file: process.env.DRIVE_YEAR2_SYLLABUS,
    assignment: process.env.DRIVE_YEAR2_ASSIGNMENTS,
  },
  year3: {
    pyqs: process.env.DRIVE_YEAR3_PYQS,
    notes: process.env.DRIVE_YEAR3_NOTES,
    practicals: process.env.DRIVE_YEAR3_PRACTICALS,
    course_file: process.env.DRIVE_YEAR3_SYLLABUS,
    assignment: process.env.DRIVE_YEAR3_ASSIGNMENTS,
  },
  year4: {
    pyqs: process.env.DRIVE_YEAR4_PYQS,
    notes: process.env.DRIVE_YEAR4_NOTES,
    practicals: process.env.DRIVE_YEAR4_PRACTICALS,
    course_file: process.env.DRIVE_YEAR4_SYLLABUS,
    assignment: process.env.DRIVE_YEAR4_ASSIGNMENTS,
  }
};
