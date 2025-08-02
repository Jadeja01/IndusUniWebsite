"use client";
import SubjectContent from "./SubjectContent";

export default function SubjectPage({ params }) {
  const { subject } = params;

  return <SubjectContent subject={subject} />;
}
