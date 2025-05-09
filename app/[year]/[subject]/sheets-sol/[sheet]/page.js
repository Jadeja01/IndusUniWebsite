"use client";
import Link from "next/link";
import Image from "next/image";
import SidebarLinks from "@/app/(components)/(commoncomponents)/(sidebarlinks)/page";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import sheetsData from "@/egcontent/sheetscontent";

export default function Year({ params }) {
  const { year, subject } = useParams();
  const { sheet } = params;
  const [sheetData, setSheetData] = useState([]);
  const formattedSubject = subject.toUpperCase();

  useEffect(() => {
    const filteredSheets = sheetsData.filter(
      (e) => e.id === sheet
    );
    setSheetData(filteredSheets);
  }, [sheet]);

  return (
    <>
      <div
        className="text-center py-4"
        style={{ background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)" }}
      >
        <h1 className="text-white mb-3">
          SWN | {formattedSubject}-
          {sheet.charAt(0).toUpperCase() + sheet.slice(1)}
        </h1>
      </div>

      <div className="container-fluid">
        <div className="row" style={{ minHeight: "calc(100vh - 160px)" }}>
          {/* Main Content */}
          <div className="col-lg-9 py-4 order-1 order-lg-2">
            <div className="gap-3 mb-4">
              <Link
                href={`/${year}/${subject}/sheets-sol`}
                className="btn btn-info text-white px-4"
                style={{ backgroundColor: "#4ECDC4" }}
              >
                Back
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
