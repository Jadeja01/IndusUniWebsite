"use client";

import { useEffect, useState } from "react";

export default function UserContributions() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <>
      {/* TOKEN BALANCE */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <h5 className="mb-0">Your Tokens</h5>
            <small className="text-muted">
              Earned from approved contributions
            </small>
          </div>
          <span className="fs-3 fw-bold text-primary">{data.tokens}</span>
        </div>
      </div>

      {/* CONTRIBUTIONS */}
      {data.contributions.length === 0 ? (
        <div className="alert alert-info">
          You don’t have any approved contributions yet.
        </div>
      ) : (
        <div className="d-flex flex-column gap-3">
          {data.contributions.map((item) => (
            <div key={item._id} className="card shadow-sm">
              <div className="card-body">
                <h6 className="fw-semibold mb-1">
                  Document Title : {item.documentTitle.toUpperCase()}
                </h6>
                {/* {status and tokenawaerded} */}
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="badge bg-secondary small">
                    {item.status} | {item.tokensAwarded || 0} tokens
                  </span>
                  <span className="small text-muted"></span>
                </div>
                {item.status === "approved" ? (
                  <div className="text-muted small mb-2">
                    Uploaded on:{" "}
                    {item.createdAt
                      ? new Date(item.createdAt).toLocaleDateString()
                      : "Unknown date"}
                  </div>
                ) : item.status === "pending" ? (
                  <div className="alert alert-warning">
                    This contribution is waiting for approval.
                  </div>
                ) : (
                  <div className="alert alert-danger">
                    This contribution was rejected.
                    {/* reason */}
                    <p className="mb-0">
                      <strong>Reason:</strong> {item.rejectionReason}
                    </p>
                  </div>
                )}

                <a
                  href={item.driveViewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline-primary"
                >
                  View Document
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
