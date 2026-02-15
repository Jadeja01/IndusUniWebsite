"use client";

import { useEffect, useState } from "react";
import { useSubject } from "@/app/(components)/context/SubjectContext";
import Link from "next/link";
import SidebarLinks from "@/app/(components)/(commoncomponents)/(sidebarlinks)/sbl";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";

export default function PracticalsPage() {
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
      const modal = new bootstrap.Modal(
        document.getElementById("pdfModal")
      );
      modal.show();
    }, 0);
  };

  const handleCloseModal = () => {
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("pdfModal")
    );
    modal.hide();
    setSelectedPdf(null);
  };

  const validNotes =
    data?.files?.[0]?.practicals?.filter(
      (note) => note?.fileUrl?.trim() !== ""
    ) || [];

  return (
    <>
      {/* Header */}
      <div className="text-center py-5 mb-5 bg-white border-bottom">
        <h1 className="fw-bold mb-2">
          {brand}{" "}
          <span className="text-primary">
            | {subject.toUpperCase()} – Practicals
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
                href={`/${year}/${subject}`}
                className="btn btn-light d-inline-flex align-items-center gap-2 px-4 py-2 fw-semibold shadow-sm"
                style={{ border: "2px solid #4ECDC4" }}
              >
                <i className="bi bi-arrow-left"></i>
                Back to {subject.toUpperCase()}
              </Link>
            </div>

            {/* Practicals Grid */}
            <div className="row mb-4">
              {loading || !data ? (
                <div className="text-center py-5 w-100">
                  Loading Practicals...
                </div>
              ) : validNotes.length === 0 ? (
                <div className="text-center py-5 w-100">
                  No practicals available
                </div>
              ) : (
                validNotes.map((prtcls, index) => (
                  <div key={index} className="col-12 col-sm-6 col-lg-4 mb-4">
  <div
    className="card shadow-sm h-100 border-0 document-card"
    onClick={() => handleCardClick(prtcls.fileUrl)}
  >
    <div className="card-body d-flex flex-column justify-content-between text-center">

      {/* Title */}
      <h6 className="fw-semibold text-dark mb-3 text-wrap">
        {prtcls.title?.toUpperCase() || "PRACTICALS"}
      </h6>

      {/* Meta Info */}
      <div className="small text-muted mt-auto">
        <div className="text-truncate">
          By {prtcls.uploader || "Anonymous"}
        </div>
        <div>
          {prtcls.approvedAt
            ? new Date(prtcls.approvedAt).toLocaleDateString()
            : "Unknown date"}
        </div>
      </div>

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
              aria-hidden="true"
            >
              <div className="modal-dialog modal-xl modal-dialog-centered">
                <div className="modal-content" style={{ height: "90vh" }}>
                  <div className="modal-header">
                    <h5 className="modal-title">Practicals PDF</h5>
                    <button
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
                        title="Practicals PDF"
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
