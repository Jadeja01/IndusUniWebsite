"use client";
import { useParams } from "next/navigation";
import SubjectContent from "./SubjectContent";

export default function SubjectPage({ children }) {
  const { subject, year } = useParams();

  return (
    <SubjectContent subject={subject} year={year}>
      {children}
    </SubjectContent>
  );
}