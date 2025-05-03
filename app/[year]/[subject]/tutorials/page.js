"use client";
import { useState } from "react";
import { useSubject } from "@/app/(components)/context/SubjectContext";
import Link from "next/link";
import SidebarLinks from "@/app/(components)/(commoncomponents)/(sidebarlinks)/page";

export default function TutorialsPage({ params }) {
  const { year,subject } = params;
  const { data, loading } = useSubject();
  console.log("Loading", loading);

  console.log("TutorialsPage:", data);
  const [selectedPdf, setSelectedPdf] = useState(null);

  if (loading || !data)
    return <div className="text-center py-5">Loading Tutorials...</div>;

  const handleCardClick = (fileUrl) => {
    setSelectedPdf(fileUrl);
    setTimeout(() => {
      const myModal = new bootstrap.Modal(document.getElementById("pdfModal"));
      myModal.show();
    }, 0);
  };

  const handleCloseModal = () => {
    setTimeout(() => {
      const myModal = bootstrap.Modal.getInstance(
        document.getElementById("pdfModal")
      );
      myModal.hide();
      setSelectedPdf(null);
    }, 0);
  };

  return (
    <>
      <div
        className="text-center py-4"
        style={{ background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)" }}
      >
        <h1 className="text-white mb-3">
          SWN | {subject.toUpperCase()}-Tutorials
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

          <SidebarLinks/>

        </div>
      </div>
    </>
  );
}
