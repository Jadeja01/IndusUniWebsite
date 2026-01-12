'use client';
import Link from 'next/link';
import Image from 'next/image';
import SidebarLinks from '@/app/(components)/(commoncomponents)/(sidebarlinks)/sbl';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function EGSheetsSolution() {
    const { year, subject } = useParams(); 
    const formattedSubject = subject.toUpperCase();
    
    const [brand,setBrand] = useState('');
    useEffect(()=>{
        setBrand(process.env.NEXT_PUBLIC_WEBSITE_NAME);
    },[])

  return (
    <>      {/* Header */}

      <div className="text-center py-5 mb-5 bg-white border-bottom">
        <h1 className="fw-bold mb-2">
          {brand} <span className="text-primary">| {formattedSubject}-Sheets</span>
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
           <div className="row g-4">
              {/* Sheet 1-8 */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((sheetNumber) => (
                <div key={sheetNumber} className="col-md-4 col-sm-6">
                  <Link 
                    href={`/1st-year/eg/sheets-sol/sheet${sheetNumber}`} 
                    className="text-decoration-none"
                  >
                    <div 
                      className="card shadow-sm h-100 sheet-card"
                      style={{
                        transition: "all 0.3s ease",
                        cursor: "pointer"
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "translateY(-8px)";
                        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "";
                      }}
                    >
                      <div className="card-body text-center d-flex flex-column justify-content-center align-items-center py-5">
                        <div 
                          className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                          style={{
                            width: "100px",
                            height: "100px",
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)"
                          }}
                        >
                          <i className="bi bi-file-earmark-text text-white" style={{ fontSize: "3rem" }}></i>
                        </div>
                        <h5 className="card-title mb-2" style={{ color: "#667eea", fontWeight: "600" }}>
                          Sheet {sheetNumber}
                        </h5>
                        <p className="text-muted small mb-0">
                          <i className="bi bi-arrow-right-circle me-1"></i>
                          View Solutions
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* Sidebar */}
          <SidebarLinks/>
        </div>
      </div>
    </>
  );
} 