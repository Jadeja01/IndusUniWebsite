"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function GalleryPage() {
  const { data: session } = useSession();

  const [items, setItems] = useState([]);
  const [type, setType] = useState("image");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [caption, setCaption] = useState("");
  const [text, setText] = useState("");
  const [loadingGallery, setLoadingGallery] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [galleryError, setGalleryError] = useState(null);
  const [formError, setFormError] = useState("");

  // FETCH GALLERY

  const fetchGallery = async () => {
    setLoadingGallery(true);
    setGalleryError(null);

    const res = await fetch("/api/gallery");

    if (!res.ok) {
      setGalleryError("Failed to load gallery.");
      setLoadingGallery(false);
      return;
    }

    const data = await res.json();
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    setItems(shuffled);
    setLoadingGallery(false);
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  //   FILE VALIDATION

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    const allowedTypes = ["image/jpeg", "image/png"];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(selected.type)) {
      setFormError("Only JPG and PNG images are allowed.");
      setFile(null);
      setPreview(null);
      return;
    }

    if (selected.size > maxSize) {
      setFormError("File size must be under 5MB.");
      setFile(null);
      setPreview(null);
      return;
    }

    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setFormError("");
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  //   SUBMIT

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (type === "image" && !file) {
      setFormError("Please select a valid image.");
      return;
    }

    setSubmitting(true);
    setFormError("");

    const formData = new FormData();
    formData.append("type", type);
    formData.append("userName", session?.user?.name);
    formData.append("uploaderId", session?.user?.id);

    if (type === "image") {
      formData.append("image", file);
      formData.append("caption", caption);
    } else {
      formData.append("text", text);
    }

    const res = await fetch("/api/gallery", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      setFormError("Upload failed. Please try again.");
      setSubmitting(false);
      return;
    }

    // Success
    setSubmitting(false);
    setFile(null);
    setPreview(null);
    setCaption("");
    setText("");
    setSuccess(true);
    fetchGallery();

    setTimeout(() => setSuccess(false), 3000);

    const modal = document.getElementById("uploadModal");
    if (window.bootstrap) {
      const modalInstance = window.bootstrap.Modal.getInstance(modal);
      modalInstance?.hide();
    }
  };

  //   RENDER

  return (<>
            {/* {  // SUCCESS  } */}
        {success && (
          <div className="success-overlay">
            <div className="success-card text-center">
              <div className="success-icon">
  <i className="bi bi-check-circle-fill"></i>
</div>

              <h5 className="fw-semibold">Submitted Successfully!</h5>
              <p className="text-muted mb-3">
                Your memory is waiting for admin approval.
              </p>
              <button
                className="btn btn-outline-dark btn-sm"
                onClick={() => setSuccess(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
    <div className="min-vh-100 bg-light py-5">
      <div className="container" style={{ maxWidth: "1100px" }}>
        {/* HERO   */}
        <div className="gallery-hero text-center mb-5 fade-in">
          <h2 className="fw-bold display-5 mb-3">📸 Campus Gallery</h2>

          <p className="lead text-muted mx-auto" style={{ maxWidth: "650px" }}>
            Not just images. Not just thoughts.
            <br />
            These are the moments we’ll remember long after graduation.
          </p>

          <div className="text-center mb-5">
            {session ? (
              <button
                className="btn btn-dark btn-lg px-5 shadow-sm"
                data-bs-toggle="modal"
                data-bs-target="#uploadModal"
              >
                + Add Your Memory
              </button>
            ) : (
              <>
                <p className="text-muted mb-3">
                  Login to share your memories with everyone.
                </p>
                <Link href="/login" className="btn btn-outline-dark px-4">
                  Login to Upload
                </Link>
              </>
            )}
          </div>
        </div>

        {/* {  // LOADING  } */}
        {loadingGallery && (
          <div className="text-center py-5">
            <div className="spinner-border text-dark"></div>
            <p className="mt-3 text-muted">Loading memories...</p>
          </div>
        )}

        {/* {  // GALLERY ERROR  } */}
        {galleryError && (
          <div className="alert alert-danger text-center">{galleryError}</div>
        )}



        {/* {  // GRID  } */}
        {!loadingGallery && !galleryError && (
          <div className="yearbook-grid fade-in">
            {items.map((item, index) => {
              const rotations = ["-1deg", "1deg", "0.5deg", "-0.5deg"];
              const rotate = rotations[index % rotations.length];

              return (
                <div
                  key={item._id}
                  className="yearbook-card"
                  style={{
                    transform: `rotate(${rotate})`,
                    animationDelay: `${index * 0.05}s`,
                  }}
                >
                  {item.type === "image" ? (
                    <div className="image-card">
                      <img src={item.imageUrl} alt="memory" loading="lazy" />
                      <div className="memory-caption image-overlay">
                        {item.caption && (
                          <p className="caption mb-2">{item.caption}</p>
                        )}
                        <small className="memory-meta">
                          — {item.userName} |{" "}
                          {new Date(item.createdAt).toLocaleDateString()}
                        </small>
                      </div>
                    </div>
                  ) : (
                    <div className={`thought-card p-4 thought-bg-${index % 7}`}>
                      <div className="quote-mark">❝</div>

                      <p className="thought-text mb-3">{item.text}</p>

                      <small className="memory-meta">
                        — {item.userName} |{" "}
                        {new Date(item.createdAt).toLocaleDateString()}
                      </small>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* {  // MODAL  } */}
        <div className="modal fade" id="uploadModal" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg rounded-4">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-semibold">Share Something ✨</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              <div className="modal-body pt-2">
                <div className="mb-4 text-center">
                  <div className="toggle-wrapper mx-auto">
                    <button
                      type="button"
                      className={`toggle-btn ${
                        type === "image" ? "active" : ""
                      }`}
                      onClick={() => {
                        setType("image");
                        setFormError("");
                      }}
                    >
                      📷 Memory
                    </button>

                    <button
                      type="button"
                      className={`toggle-btn ${
                        type === "thought" ? "active" : ""
                      }`}
                      onClick={() => {
                        setType("thought");
                        setFormError("");
                      }}
                    >
                      ✍ Thought
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {formError && (
                    <div className="alert alert-danger py-2 small">
                      {formError}
                    </div>
                  )}

                  {type === "image" && (
                    <>
                      <div className="mb-3">
                        <label className="form-label fw-medium">
                          Upload Image
                        </label>

                        <input
                          type="file"
                          accept=".jpg,.jpeg,.png"
                          className="form-control form-control-lg rounded-3"
                          onChange={handleFileChange}
                          required
                        />
                      </div>

                      {preview && (
                        <div className="mb-3 text-center">
                          <img
                            src={preview}
                            alt="preview"
                            className="img-fluid rounded-3 shadow-sm"
                            style={{
                              maxHeight: "220px",
                            }}
                          />
                        </div>
                      )}

                      <div className="mb-3">
                        <label className="form-label d-flex justify-content-between fw-medium">
                          <span>Caption</span>
                          <small
                            className={
                              caption.length > 100
                                ? "text-danger"
                                : "text-muted"
                            }
                          >
                            {caption.length}/120
                          </small>
                        </label>

                        <input
                          type="text"
                          maxLength={120}
                          className="form-control rounded-3"
                          placeholder="Add a short caption..."
                          value={caption}
                          onChange={(e) => setCaption(e.target.value)}
                        />
                      </div>
                    </>
                  )}

                  {type === "thought" && (
                    <div className="mb-3">
                      <label className="form-label d-flex justify-content-between fw-medium">
                        <span>Your Thought</span>
                        <small
                          className={
                            text.length > 170 ? "text-danger" : "text-muted"
                          }
                        >
                          {text.length}/200
                        </small>
                      </label>

                      <textarea
                        className="form-control rounded-3"
                        rows="4"
                        maxLength={200}
                        placeholder="Write something memorable..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                      ></textarea>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-dark btn-lg w-100 rounded-3 mt-2"
                    disabled={
                      submitting || !!formError || (type === "image" && !file)
                    }
                  >
                    {submitting ? "Submitting..." : "Share Now"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}
