"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default async function AdminGalleryPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState(null);

  useEffect(() => {
    if (status === "loading") return;

    if (!session || session.user.role !== "admin") {
      router.push("/");
    }
  }, [session, status, router]);
  const fetchPending = async () => {
    setLoading(true);
    const res = await fetch("/api/admin/gallery");
    const data = await res.json();
    setItems(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPending();
  }, []);

  const handleAction = async (id, status) => {
    setProcessingId(id);

    const res = await fetch(`/api/admin/gallery/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    if (res.ok) {
      alert("Memory approved successfully!");
    }

    setProcessingId(null);
    fetchPending();
  };

  return (
    <div className="min-vh-100 bg-light py-5">
      <div className="container" style={{ maxWidth: "1000px" }}>
        <h3 className="fw-bold mb-4 text-center">Pending Gallery Approvals</h3>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-dark"></div>
            <p className="mt-3 text-muted">Loading pending items...</p>
          </div>
        )}

        {!loading && items.length === 0 && (
          <p className="text-muted text-center">No pending items.</p>
        )}

        {!loading && items.length > 0 && (
          <div className="d-flex flex-column gap-4">
            {items.map((item) => (
              <div key={item._id} className="card shadow-sm border-0 p-3">
                {item.type === "image" ? (
                  <div className="text-center mb-3">
                    <Image
                      src={item.imageUrl}
                      alt="memory"
                      width={300}
                      height={200}
                      className="rounded img-fluid"
                    />
                  </div>
                ) : (
                  <p className="fw-semibold mb-3">“{item.text}”</p>
                )}

                <small className="text-muted mb-3">
                  — {item.userName} |{" "}
                  {item.createdAt
                    ? new Date(item.createdAt).toLocaleDateString()
                    : "Unknown date"}
                </small>

                <div className="d-flex gap-2">
                  <button
                    className="btn btn-success btn-sm"
                    disabled={processingId === item._id}
                    onClick={() => handleAction(item._id, "approved")}
                  >
                    {processingId === item._id ? (
                      <span className="spinner-border spinner-border-sm"></span>
                    ) : (
                      "Approve"
                    )}
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    disabled={processingId === item._id}
                    onClick={() => handleAction(item._id, "rejected")}
                  >
                    {processingId === item._id ? (
                      <span className="spinner-border spinner-border-sm"></span>
                    ) : (
                      "Reject"
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
