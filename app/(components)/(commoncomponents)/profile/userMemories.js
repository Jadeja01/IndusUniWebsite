"use client";

import { useEffect, useState } from "react";

export default function UserMemories() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [expanded, setExpanded] = useState(false);

  const fetchMemories = async () => {
    try {
      const res = await fetch("/api/user/gallery");
      if (!res.ok) throw new Error("Failed to fetch memories");
      const data = await res.json();
      setItems(data);
    } catch (err) {
      setError("Unable to load memories.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMemories();
  }, []);

  if (loading)
    return (
      <div className="text-center py-4">
        <div className="spinner-border text-primary"></div>
        <p className="text-muted mt-2">Loading memories...</p>
      </div>
    );

  if (error)
    return <div className="alert alert-danger">{error}</div>;

  if (items.length === 0)
    return (
      <div className="card border-0 shadow-sm text-center p-5">
        <div className="text-muted">
          <div className="fs-5 mb-2">
            📸 No memories uploaded yet
          </div>
          <small>
            Upload your favorite college moments to preserve them forever.
          </small>
        </div>
      </div>
    );

  return (
    <>
      <div className="history-wrapper">
        <div className="d-flex flex-column gap-3">
          {(expanded ? items : items.slice(0, 4)).map(
            (item) => {
              const statusColor =
                item.status === "approved"
                  ? "success"
                  : item.status === "pending"
                  ? "warning"
                  : "danger";

              return (
                <div
                  key={item._id}
                  className="card border-0 shadow-sm fade-item memory-card"
                >
                  <div className="card-body">

                    {/* Header Row */}
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <span className="fw-semibold">
                        {item.type === "image"
                          ? "📷 Image Memory"
                          : "✍ Thought"}
                      </span>

                      <span
                        className={`badge bg-${statusColor}`}
                      >
                        {item.status}
                      </span>
                    </div>

                    {/* Content */}
                    {item.type === "image" ? (
                      <>
                        <img
                          src={item.imageUrl}
                          alt="memory"
                          className="img-fluid rounded mb-2"
                          style={{
                            maxHeight: "220px",
                            objectFit: "cover",
                          }}
                        />
                        {item.caption && (
                          <p className="small mb-1">
                            {item.caption}
                          </p>
                        )}
                      </>
                    ) : (
                      <p className="mb-2 fst-italic">
                        “{item.text}”
                      </p>
                    )}

                    {/* Footer */}
                    <small className="text-muted">
                      {item.createdAt
                        ? new Date(
                            item.createdAt
                          ).toLocaleDateString()
                        : ""}
                    </small>

                  </div>
                </div>
              );
            }
          )}
        </div>

        {!expanded && items.length > 4 && (
          <div className="history-fade"></div>
        )}
      </div>

      {items.length > 4 && (
        <div className="text-center mt-3">
          <button
            className="btn btn-outline-primary px-4"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded
              ? "Show Less"
              : "View All Memories"}
          </button>
        </div>
      )}
    </>
  );
}
