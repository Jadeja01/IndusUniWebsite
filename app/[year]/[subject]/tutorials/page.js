"use client";
import { useEffect, useState } from "react";
import { useSubject } from "@/app/(components)/context/SubjectContext";
import Link from "next/link";
import SidebarLinks from "@/app/(components)/(commoncomponents)/(sidebarlinks)/sbl";

export default function TutorialsPage({ params }) {
  const { year, subject } = params;
  const [brand, setBrand] = useState('');
  const { data, loading } = useSubject();

  useEffect(() => {
    setBrand(process.env.NEXT_PUBLIC_WEBSITE_NAME);
  }, [])

  if (loading || !data)
    return <div className="text-center py-5">Loading Tutorials...</div>;

  return (
    <>
      <div
        className="text-center py-4"
        style={{ background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)" }}
      >
        <h1 className="text-white mb-3">
          {brand} | {subject.toUpperCase()}-Tutorials
        </h1>
      </div>
      <div className="container-fluid">
        <div className="row" style={{ minHeight: "calc(100vh - 160px)" }}>
          {/* Main Content */}
          <div className="col-lg-9 py-4 order-1 order-lg-2">
            {/* Back Button */}
            <div className="gap-3 mb-4">
              <Link
                href={`/${year}/${subject}`}
                className="btn btn-info text-white px-4"
                style={{ backgroundColor: "#4ECDC4" }}
              >
                Back
              </Link>
            </div>

            {/* Assignmnets */}
            <div className="mb-4">
              <div className="text-center py-5 w-100">No tutorials available</div>
            </div>
          </div>

          {/* Sidebar */}

          <SidebarLinks />

        </div>
      </div>
    </>
  );
}
