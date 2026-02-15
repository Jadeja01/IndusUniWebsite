"use client";
import Link from "next/link";
import Image from "next/image";
import SidebarLinks from "@/app/(components)/(commoncomponents)/(sidebarlinks)/sbl";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import sheetsData from "@/egcontent/sheetscontent";
import { useSession } from "next-auth/react";

export default function Year() {
  const { year, subject,sheet } = useParams();
  const [sheetData, setSheetData] = useState([]);
  const formattedSubject = subject.toUpperCase();
  const { status } = useSession();
  const [brand, setBrand] = useState("");

  useEffect(() => {
    setBrand(process.env.NEXT_PUBLIC_WEBSITE_NAME);
    const filteredSheets = sheetsData.filter((e) => e.id === sheet);
    setSheetData(filteredSheets);
  }, [sheet]);

  if (status === "loading") {
    return <div className="min-vh-100 d-flex align-items-center justify-content-center">
      <span className="text-muted">Loading...</span>
    </div>;
  }

  return (
    <>
      <div className="text-center py-5 mb-5 bg-white border-bottom">
        <h1 className="fw-bold mb-2">
          {brand}{" "}
          <span className="text-primary">
            | {formattedSubject}-
            {sheet.charAt(0).toUpperCase() + sheet.slice(1)}
          </span>
        </h1>
      </div>

      <div className="container-fluid">
        <div className="row" style={{ minHeight: "calc(100vh - 160px)" }}>
          {/* Main Content */}
          <div className="col-lg-9 py-4 order-1 order-lg-2">
            {/* Back Button */}
           
            <div className="mb-4">
                                      <Link
                                        href={`/${year}/${subject}/sheets-sol`}
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
                                        Back to EG-Sheets
                                      </Link>
                                    </div>
            
            <div className="card shadow">
              <div className="card-body">
                {sheetData[0]?.questions.map((data, index) => (
                  <div className="mb-5" key={index}>
                    <h4 className="text-info mb-3">Question {index + 1}:</h4>
                    <p className="fw-bold mb-4">{data.text}</p>
                    <div className="text-center">
                      {/* Question Image */}
                      {data.questionImage && (
                        <div className="mb-3">
                          <Image
                            src={data.questionImage}
                            alt={`Diagram${index + 1}`}
                            width={600}
                            height={400}
                            className="img-fluid rounded shadow-sm"
                          />
                        </div>
                      )}

                      {/* Additional Image */}
                      {data.imagePath && (
                        <div className="mt-3">
                          <Image
                            src={data.imagePath}
                            alt={`Question${index + 1} Diagram 1`}
                            width={600}
                            height={400}
                            className="img-fluid rounded shadow-sm mb-3"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <SidebarLinks />
        </div>
      </div>
    </>
  );
}
