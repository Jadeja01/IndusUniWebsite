"use client";
import SubjectContent from "./SubjectContent";

export default function SubjectPage({ params }) {
  const { subject } = params;
  console.log("Subject(subject/page/js)=", subject);

  return <SubjectContent subject={subject} />;
}
