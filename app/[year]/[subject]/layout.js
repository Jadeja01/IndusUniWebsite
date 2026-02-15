"use client";
import { SubjectProvider } from "@/app/(components)/context/SubjectContext";
import { useParams } from "next/navigation";

export default function SubjectLayout({ children }) {
  const params = useParams();
  const subject = params.subject;
  const year = params.year;
  return <SubjectProvider subject={subject} year={year}>{children}</SubjectProvider>;
}
