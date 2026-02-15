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
    return <div className="min-vh-100 d-flex align-items-center justify-content-center">
      <span className="text-muted">Loading...</span>
    </div>;
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
          {brand} | {subject.toUpperCase()} - Practical
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
                <div className="text-center py-5 w-100">
                  Loading practical data...
                </div>
              ) : !data.files || !data.files[0].practical?.length ? (
                <div className="text-center py-5 w-100">
                  No practical available
                </div>
              ) : (
                <>
                  (
                  <div className="col-md-4 mb-4">
                    <div
                      className="card shadow-sm h-100"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleCardClick(data.files[0].practical)}
                    >
                      <div className="card-body d-flex flex-column justify-content-center align-items-center">
                        <h5 className="card-title text-center">practicalPDF</h5>
                      </div>
                    </div>
                  </div>
                  )
                </>
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
                      Practical PDF
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
                        title="practical PDF"
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
