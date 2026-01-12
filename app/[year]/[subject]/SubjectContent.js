"use client"
import { useSubject } from "@/app/(components)/context/SubjectContext";
import SidebarLinks from "@/app/(components)/(commoncomponents)/(sidebarlinks)/sbl";
import Buttons from "@/app/(components)/(commoncomponents)/(buttons)/btn";
import { useEffect, useState } from "react";

export default function SubjectContent({ subject }) {
  const { data } = useSubject();
  const [brand, setBrand] = useState('');

  const isLoading = !data;
  const formattedSubject = subject.toUpperCase();
  useEffect(()=>{
    setBrand(process.env.NEXT_PUBLIC_WEBSITE_NAME)
  },[])

  return (
    <>
      {/* Header */}
      <div className="text-center py-5 mb-5 bg-white border-bottom">
        <h1 className="fw-bold mb-2">
          {brand} <span className="text-primary">| {formattedSubject}</span>
        </h1>
      </div>

      <div className="container-fluid">
        <div className="row" style={{ minHeight: "calc(100vh - 160px)" }}>
          {/* Main Content */}
          <div className="col-lg-9 py-4 order-1 order-lg-2">
            {/* Buttons */}
            <Buttons/>

            {/* Syllabus */}
            <div className="d-flex justify-content-center align-items-center mb-4">
              {isLoading ? (
                <div className="text-center py-5">Loading...</div>
              ) : data.files && data.files[0]?.syllabus ? (
                <iframe
                  src={data.files[0].syllabus}
                  style={{ width: "95%", height: "900px", border: "none" }}
                  title="Syllabus PDF"
                />
              ) : (
                <div className="text-center py-5">No syllabus available</div>
              )}
            </div>
          </div>

          {/* Sidebar */}

          <SidebarLinks />
        </div>
      </div>
    </>
  );
}
