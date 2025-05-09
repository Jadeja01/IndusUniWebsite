"use client";
import { useState } from "react";
import { useSubject } from "@/app/(components)/context/SubjectContext";
import Link from "next/link";
import SidebarLinks from "@/app/(components)/(commoncomponents)/(sidebarlinks)/page";


export default function PYQsPage({ params }) {
  const { year,subject } = params;
  const { data, loading } = useSubject();
  const [selectedPdf, setSelectedPdf] = useState(null);

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
      {/* Header */}
      <div
        className="text-center py-4"
        style={{ background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)" }}
      >
        <h1 className="text-white mb-3">
          SWN | {subject.toUpperCase()} - PYQs
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

            {/* PYQs Section */}
            <div className="row mb-4">
              {loading || !data ? (
                <div className="text-center py-5 w-100">Loading PYQs...</div>
              ) : !data.files || !data.files[0]?.pyqs?.length ? (
                <div className="text-center py-5 w-100">No PYQs available</div>
              ) : (
                data.files[0].pyqs.map((pyq, index) => (
                  <div key={index} className="col-md-4 mb-4">
                    <div
                      className="card shadow-sm h-100"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleCardClick(pyq.fileUrl)}
                    >
                      <div className="card-body d-flex flex-column justify-content-center align-items-center">
                        <h5 className="card-title text-center">
                          {pyq.title} - {pyq.year}
                        </h5>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* PDF Modal */}
            <div
              className="modal fade"
              id="pdfModal"
              tabIndex="-1"
              aria-labelledby="pdfModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-xl modal-dialog-centered">
                <div className="modal-content" style={{ height: "90vh" }}>
                  <div className="modal-header">
                    <h5 className="modal-title" id="pdfModalLabel">
                      PYQ PDF
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={handleCloseModal}
                    ></button>
                  </div>
                  <div className="modal-body p-0">
                    {selectedPdf && (
                      <iframe
                        src={selectedPdf}
                        style={{
                          width: "100%",
                          height: "100%",
                          border: "none",
                        }}
                        title="PYQ PDF"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          
          <SidebarLinks/>

        </div>
      </div>
    </>
  );
}
