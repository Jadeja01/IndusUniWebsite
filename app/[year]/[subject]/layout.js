'use client';
import { SubjectProvider } from "@/app/(components)/context/SubjectContext";

export default function SubjectLayout({ children,params }) {
  const { subject } = params;
  console.log('Subject(subject/layout.js)=',subject);
  return (
    <SubjectProvider subject={subject}>
      {children}
    </SubjectProvider>
  );
}