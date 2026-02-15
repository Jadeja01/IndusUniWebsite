"use client";

import { useEffect, useState } from "react";

export default function UserContributions() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/user/contributions");
        const text = await res.text();
        if (!res.ok) throw new Error(text || "Failed to load");
        const json = text ? JSON.parse(text) : {};
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="text-center py-4">
        <div className="spinner-border text-primary"></div>
        <p className="text-muted mt-2">Loading contributions...</p>
      </div>
    );

  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <>
      {/* TOKEN SUMMARY */}
      <div className="card border-0 shadow-lg mb-4 overflow-hidden">
        <div className="bg-primary bg-gradient text-white p-4 d-flex justify-content-between align-items-center">
          <div>
            <h6 className="mb-1 fw-semibold">Your Tokens</h6>
            <small className="opacity-75">Earned from approved uploads</small>
          </div>
          <div className="display-6 fw-bold">{data.tokens}</div>
        </div>
      </div>

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="fw-bold text-primary mb-0">Contribution History</h6>
        <span className="badge bg-light text-dark">
          {data.contributions.length} Total
        </span>
      </div>

      {/* EMPTY STATE */}
      {data.contributions.length === 0 ? (
        <div className="card border-0 shadow-sm text-center p-5">
          <div className="text-muted">
            <div className="fs-5 mb-2">📂 No contributions yet</div>
            <small>
              Start uploading notes, assignments or PYQs to earn tokens.
            </small>
          </div>
        </div>
      ) : (
        <>
          <div className="history-wrapper">
            <div className="d-flex flex-column gap-3">
              {(expanded
                ? data.contributions
                : data.contributions.slice(0, 5)
              ).map((item) => {
                const statusColor =
                  item.status === "approved"
                    ? "success"
                    : item.status === "pending"
                      ? "warning"
                      : "danger";

                return (
                  <div
                    key={item._id}
                    className="card border-0 shadow-sm contribution-card fade-item"
                  >
                    <div className="card-body">
                      {/* Top */}
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          <h6 className="fw-semibold mb-1">
                            {item.documentTitle}
                          </h6>
                          <div className="small text-muted">
                            {item.createdAt
                              ? new Date(item.createdAt).toLocaleDateString()
                              : "Unknown date"}
                          </div>
                        </div>

                        <span className={`badge bg-${statusColor} px-3 py-2`}>
                          {item.status}
                        </span>
                      </div>

                      <hr className="my-3" />

                      {/* Bottom */}
                      <div className="d-flex justify-content-between align-items-center">
                        <span className={`fw-semibold text-${statusColor}`}>
                          +{item.tokensAwarded || 0} Tokens
                        </span>

                        <a
                          href={item.driveViewLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-primary px-3"
                        >
                          View File
                        </a>
                      </div>

                      {/* Status Messages */}
                      {item.status === "rejected" && (
                        <div className="alert alert-danger small mt-3 mb-0">
                          <strong>Rejection Reason:</strong>{" "}
                          {item.rejectionReason}
                        </div>
                      )}

                      {item.status === "pending" && (
                        <div className="alert alert-warning small mt-3 mb-0">
                          Waiting for admin approval.
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Fade Overlay */}
            {!expanded && data.contributions.length > 5 && (
              <div className="history-fade"></div>
            )}
          </div>

          {/* Toggle Button */}
          {data.contributions.length > 5 && (
            <div className="text-center mt-3">
              <button
                className="btn btn-outline-primary px-4"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "Show Less" : "View Full Contribution History"}
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
}
