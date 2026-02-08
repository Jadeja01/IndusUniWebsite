"use client";

import { useEffect, useState } from "react";
import RejectModal from "./rejectmodal";

export default function PendingContributions() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [approvingId, setApprovingId] = useState(null);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const fetchPending = async () => {
      try {
        const res = await fetch("/api/admin/contributions?status=pending");
        const text = await res.text();

        if (!res.ok) throw new Error(text || "Failed to load");

        const json = text ? JSON.parse(text) : {};
        setData(json.contributions || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPending();
  }, []);

  const handleApprove = async (id) => {
    setApprovingId(id);

    try {
      const res = await fetch(`/api/admin/contributions/${id}/approve`, {
        method: "POST",
      });

      if (res.status === 409) {
        const data = await res.json();
        const confirmReplace = confirm(
          "A syllabus already exists.\nDo you want to REPLACE it?",
        );

        if (confirmReplace) {
          const replaceRes = await fetch(
            `/api/admin/contributions/${id}/replace-syllabus`,
            { method: "POST" },
          );

          if (!replaceRes.ok) throw new Error("Replace failed");
        } else {
          return;
        }
      } else if (!res.ok) {
        throw new Error("Approval failed");
      }

      setData((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      alert(err.message);
    } finally {
      setApprovingId(null);
    }
  };

  if (loading) {
    return <div className="text-muted">Loading contributions...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (data.length === 0) {
    return <div className="alert alert-info">No pending contributions</div>;
  }

  return (
    <div className="d-flex flex-column gap-4">
      {data.map((item) => (
        <div key={item._id} className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title mb-2">
              Document Title : {item.documentTitle.toUpperCase() || "Untitled"}
            </h5>

            <div className="mb-2 text-muted small">
              Document Type :{" "}
              {item.documentType.slice(0, 1).toUpperCase() +
                item.documentType.slice(1)}
            </div>
            <div className="mb-2 text-muted small">
              Year: {item.documentClgYear.toUpperCase()} | Branch:{" "}
              {item.branch.toUpperCase()} | Subject:{" "}
              {item.subject.toUpperCase()} | Year: {item.documentYear}
            </div>

            {item.description && (
              <p className="card-text">{item.description}</p>
            )}

            <div className="mb-3">
              <strong>Uploaded by:</strong>{" "}
              {item.anonymous
                ? "Anonymous"
                : item.uploaderId?.name || "Unknown"}
            </div>

            <div className="mb-3">
              <a
                href={item.driveViewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm"
              >
                View Document
              </a>
            </div>

            <div className="d-flex gap-3">
              <button
                className="btn btn-success"
                disabled={approvingId === item._id}
                onClick={() => handleApprove(item._id)}
              >
                {approvingId === item._id ? "Approving..." : "Approve"}
              </button>

              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  setSelectedId(item._id);
                  setShowRejectModal(true);
                }}
              >
                Reject
              </button>
            </div>
            <RejectModal
              show={showRejectModal}
              contributionId={selectedId}
              onClose={() => {
                setShowRejectModal(false);
                setSelectedId(null);
              }}
              onSuccess={() => {
                setData((prev) => prev.filter((c) => c._id !== selectedId));
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
