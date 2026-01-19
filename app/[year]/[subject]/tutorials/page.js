"use client";
import { useEffect, useState } from "react";
import { useSubject } from "@/app/(components)/context/SubjectContext";
import Link from "next/link";
import SidebarLinks from "@/app/(components)/(commoncomponents)/(sidebarlinks)/sbl";
import { useSession } from "next-auth/react";

export default function TutorialsPage({ params }) {
  const { year, subject } = params;
  const [brand, setBrand] = useState('');
      const { status } = useSession();

  useEffect(() => {
    setBrand(process.env.NEXT_PUBLIC_WEBSITE_NAME);
  }, []);
  
   if (status === "loading") {
    return <div className="min-vh-100 d-flex align-items-center justify-content-center">
      <span className="text-muted">Loading...</span>
    </div>;
  }



  return (
    <><div className="text-center py-5 mb-5 bg-white border-bottom">
        <h1 className="fw-bold mb-2">
          {brand} <span className="text-primary">| {subject.toUpperCase()} - Tutorials</span>
        </h1>
      </div>


      <div className="container-fluid">
        <div className="row" style={{ minHeight: "calc(100vh - 160px)" }}>
          {/* Main Content */}
          <div className="col-lg-9 py-4 order-1 order-lg-2">
            {/* Back Button */}
            <div className="mb-4">
              <Link
                href={`/${year}/${subject}`}
                className="btn btn-light d-inline-flex align-items-center gap-2 px-4 py-2 fw-semibold shadow-sm"
                style={{
                  transition: "all 0.3s ease",
                  border: "2px solid #4ECDC4",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#4ECDC4";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "translateX(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(78, 205, 196, 0.3)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "";
                  e.currentTarget.style.color = "";
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <i className="bi bi-arrow-left"></i>
                Back to {subject.toUpperCase()}
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
