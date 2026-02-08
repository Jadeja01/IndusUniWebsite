"use client";

import { useState } from "react";

export default function RejectModal({
  show,
  onClose,
  contributionId,
  onSuccess,
}) {
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!show) return null;

  const handleReject = async () => {
    setError("");

    if (!reason.trim()) {
      setError("Rejection reason is required");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/admin/contributions/reject", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contributionId,
          reason,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Reject failed");
      }

      onSuccess(); // parent will remove item
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="modal fade show d-block"
      style={{ background: "rgba(0,0,0,0.6)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded-4 shadow">
          {/* Header */}
          <div className="modal-header border-0">
            <h5 className="fw-bold mb-0">Reject Contribution</h5>
            <button className="btn-close" onClick={onClose} />
          </div>

          {/* Body */}
          <div className="modal-body">
            {error && (
              <div className="alert alert-danger py-2 small">
                {error}
              </div>
            )}

            <label className="form-label fw-semibold">
              Reason for rejection *
            </label>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Low quality, wrong subject, duplicate, etc."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>

          {/* Footer */}
          <div className="modal-footer border-0">
            <button className="btn btn-light" onClick={onClose}>
              Cancel
            </button>
            <button
              className="btn btn-danger px-4"
              onClick={handleReject}
              disabled={loading}
            >
              {loading ? "Rejecting..." : "Reject"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
