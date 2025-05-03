"use client";
import { useState } from "react";
import { useSubject } from "@/app/(components)/context/SubjectContext";
import Link from "next/link";
import sidebarLinks from "@/app/(components)/(commoncomponents)/(sidebarlinks)/page";

export default function AssignmnetsPage({ params }) {
  const { subject } = params;
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
          SWN | {subject.toUpperCase()} - Assignmnets
        </h1>
      </div>

      <div className="container-fluid">
        <div className="row" style={{ minHeight: "calc(100vh - 160px)" }}>
          {/* Main Content */}
          <div className="col-lg-9 py-4 order-1 order-lg-2">
            {/* Back Button */}
            <div className="gap-3 mb-4">
              <Link
                href={`/${subject}`}
                className="btn btn-info text-white px-4"
                style={{ backgroundColor: "#4ECDC4" }}
              >
                Back
              </Link>
            </div>

            {/* Assignments Section */}
            <div className="row mb-4">
              {loading || !data ? (
                <div className="text-center py-5 w-100">Loading assignments...</div>
              ) : !data.files || !data.files[0]?.assignments?.length ? (
                <div className="text-center py-5 w-100">No assignments available</div>
              ) : (
                data.files[0].assignments.map((assignments, index) => (
                  <div key={index} className="col-md-4 mb-4">
                    <div
                      className="card shadow-sm h-100"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleCardClick(assignments.fileUrl)}
                    >
                      <div className="card-body d-flex flex-column justify-content-center align-items-center">
                        <h5 className="card-title text-center">
                          {assignments.title}
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
                      Assignment PDF
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
          <div className="col-lg-3 px-0 order-2 order-lg-1">
            <div
              className="card h-100 rounded-0 border-end"
              style={{ position: "sticky", top: "0" }}
            >
              <div className="card-body d-flex flex-column align-items-center">
                <h3 className="card-title text-center mb-4">Course Plan:</h3>
                <div className="d-flex flex-column w-100">
                  {sidebarLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="nav-link py-3 border-bottom text-center"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
