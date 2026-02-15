"use client";
import { useEffect, useState } from "react";
import { useSubject } from "@/app/(components)/context/SubjectContext";
import Link from "next/link";
import SidebarLinks from "@/app/(components)/(commoncomponents)/(sidebarlinks)/sbl";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";

export default function PYQsPage() {
  const { year, subject } = useParams();
  const { data, loading } = useSubject();
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [brand, setBrand] = useState("");
  const { status } = useSession();

  useEffect(() => {
    setBrand(process.env.NEXT_PUBLIC_WEBSITE_NAME);
  }, []);

  if (status === "loading") {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <span className="text-muted">Loading...</span>
      </div>
    );
  }

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
        document.getElementById("pdfModal"),
      );
      myModal.hide();
      setSelectedPdf(null);
    }, 0);
  };

  return (
    <>
      {/* Header */}

      <div className="text-center py-5 mb-5 bg-white border-bottom">
        <h1 className="fw-bold mb-2">
          {brand}{" "}
          <span className="text-primary">| {subject.toUpperCase()} - PYQs</span>
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

            {/* PYQs Section */}
            <div className="row mb-4">
              {loading || !data ? (
                <div className="text-center py-5 w-100">Loading PYQs...</div>
              ) : (
                (() => {
                  const validPYQs =
                    data.files?.[0]?.pyqs?.filter(
                      (pyq) => pyq?.fileUrl?.trim() !== "",
                    ) || [];

                  return validPYQs.length === 0 ? (
                    <>
                      <div className="text-center py-5 w-100">
                        No pyqs available
                      </div>
                      <div className="col-md-4 mb-4">
                        <Link
                          href="https://play.google.com/store/apps/details?id=com.nikk797edu.scoop"
                          target="_blank"
                          className="text-decoration-none"
                        >
                          <div
                            className="card shadow-sm h-100"
                            style={{
                              cursor: "pointer",
                              backgroundColor: "#f0f9ff",
                              transition: "all 0.3s ease",
                            }}
                            onMouseOver={(e) => {
                              e.currentTarget.style.transform =
                                "translateY(-8px)";
                              e.currentTarget.style.boxShadow =
                                "0 8px 20px rgba(0,0,0,0.15)";
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.transform = "translateY(0)";
                              e.currentTarget.style.boxShadow = "";
                            }}
                          >
                            <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                              <h5 className="card-title text-primary">
                                Explore More PYQs
                              </h5>
                              <p className="text-muted mb-0">
                                Tap here to browse more question papers.
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      {validPYQs.map((pyq, index) => (
                        <div key={index} className="col-12 col-sm-6 col-lg-4 mb-4">
  <div
    className="card shadow-sm h-100 position-relative border-0 document-card"
    onClick={() => handleCardClick(pyq.fileUrl)}
  >
    {/* Year Badge */}
    <span className="badge bg-primary position-absolute top-0 end-0 m-2">
      {pyq.year || "N/A"}
    </span>

    <div className="card-body d-flex flex-column justify-content-between text-center">

      {/* Title */}
      <h6 className="fw-semibold text-dark mb-3 text-wrap">
        {pyq.title?.toUpperCase() || "PYQ"}
      </h6>

      {/* Footer Meta */}
      <div className="small text-muted mt-auto">
        <div className="text-truncate">
          By {pyq.uploader || "Anonymous"}
        </div>
        <div>
          {pyq.approvedAt
            ? new Date(pyq.approvedAt).toLocaleDateString()
            : "Unknown date"}
        </div>
      </div>

    </div>
  </div>
</div>

                      ))}

                      {/* Extra link card */}
                      <div className="col-md-4 mb-4">
                        <Link
                          href="https://play.google.com/store/apps/details?id=com.nikk797edu.scoop"
                          target="_blank"
                          className="text-decoration-none"
                        >
                          <div
                            className="card shadow-sm h-100"
                            style={{
                              cursor: "pointer",
                              backgroundColor: "#f0f9ff",
                              transition: "all 0.3s ease",
                            }}
                            onMouseOver={(e) => {
                              e.currentTarget.style.transform =
                                "translateY(-8px)";
                              e.currentTarget.style.boxShadow =
                                "0 8px 20px rgba(0,0,0,0.15)";
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.transform = "translateY(0)";
                              e.currentTarget.style.boxShadow = "";
                            }}
                          >
                            <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                              <h5 className="card-title text-primary">
                                Explore More PYQs
                              </h5>
                              <p className="text-muted mb-0">
                                Tap here to browse more question papers.
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </>
                  );
                })()
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
          <SidebarLinks />
        </div>
      </div>
    </>
  );
}
