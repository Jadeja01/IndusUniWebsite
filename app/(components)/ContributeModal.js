"use client";
import { useState } from "react";

export default function ContributeModal({ show, onClose, defaultSubject }) {
  const [docType, setDocType] = useState("");
  const [docClgYear, setDocClgYear] = useState("");
  const [branch, setBranch] = useState("");
  const [file, setFile] = useState(null);
  const [docTitle, setDocTitle] = useState("");
  const [docYear, setDocYear] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [confirmRights, setConfirmRights] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [subject, setSubject] = useState(defaultSubject || "");

  if (!show) return null;

  const handleSubmit = async () => {
    setError("");
    if (!docTitle) return setError("Document title is required");
    if (!docYear) return setError("Document year is required");
    if (!subject) return setError("Select subject");
    if (!docType) return setError("Select document type");
    if (!docClgYear) return setError("Select document college year");
    if (!branch) return setError("Select branch");
    if (!file) return setError("PDF file is required");
    if (!confirmRights) return setError("You must confirm upload rights");

    if (file.type !== "application/pdf") {
      return setError("Only PDF files are allowed");
    }

    if (file.size > 10 * 1024 * 1024) {
      return setError("File size must be under 10MB");
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("documentType", docType);
    formData.append("documentClgYear", docClgYear);
    formData.append("branch", branch);
    formData.append("file", file);
    formData.append("documentTitle", docTitle);
    formData.append("documentYear", docYear);
    formData.append("anonymous", anonymous);
    formData.append("confirmRights", confirmRights);

    try {
      const res = await fetch("/api/contribute/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      onClose();
      alert("Upload received. Tokens will be credited after approval.");
    } catch (err) {
      console.error("Upload Error", err);
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="modal fade show d-block"
      style={{ background: "rgba(0,0,0,0.6)" }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content rounded-4 shadow modal-smooth">
          {/* Header */}
          <div className="modal-header border-0">
            <div>
              <h5 className="fw-bold mb-1">📤 Contribute Study Material</h5>
              <p className="text-muted small mb-0">Help others & earn tokens</p>
            </div>
            <button className="btn-close" onClick={onClose} />
          </div>

          {/* Body */}
          <div className="modal-body pt-2">
            {error && (
              <div className="alert alert-danger py-2 small">⚠️ {error}</div>
            )}
            {/* Document Title */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Document Title *</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. PPS_MSE_2025"
                maxLength={100}
                value={docTitle}
                onChange={(e) => setDocTitle(e.target.value)}
              />
            </div>

            {/* Document Year */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Document Year (Which year is this document for?)*</label>
              <select
                className="form-select"
                value={docYear}
                onChange={(e) => setDocYear(e.target.value)}
              >
                <option value="">Select year</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
            </div>

            {/* Subject */}
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Subject (Which subject is this document for?)*
              </label>
              <select
                className="form-select"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                <option value="">Select subject</option>
                <option value="calculus">Engineering Calculus</option>
                <option value="eg">Engineering Graphics</option>
                <option value="pps">Programming for Problem Solving</option>
                <option value="ec">Engineering Chemistry</option>
                <option value="es">Environmental Science</option>
                <option value="boe">Basic of Energy</option>
                <option value="tcss">Technical Communication</option>
                <option value="iks">Indian Knowledge System</option>
                <option value="automobile">Automobile Engineering</option>
                <option value="dela">Differential Equations & Linear Algebra</option>
                <option value="ep">Engineering Physics</option>
                <option value="bcps">Business Communication & Presentation Skills</option>
                <option value="workshop">Workshop Practice</option>
                <option value="bst">Bharatiya Science & Technology</option>
                <option value="acdc">Introduction to AC-DC Machine</option>
                <option value="bac">Basics of AC Circuits</option>
                <option value="psnm">Probability, Statistics & Numerical Methods</option>
                <option value="ict">ICT Tools & Technology</option>
                <option value="de">Digital Electronics</option>
                <option value="oocu">Object Oriented Concept with UML</option>
                <option value="dbms">Database Management System</option>
                <option value="hvpe">Human Values & Professional Ethics</option>
                <option value="dsa">Data Structure and Algorithms</option>
                <option value="os">Operating System</option>
                <option value="mfe">Management for Engineers</option>
                <option value="cjp">Core Java Programming</option>
                <option value="coa">Computer Organization and Architecture</option>
              </select>
            </div>

            {/* Document Type */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Document Type *</label>
              <select
                className="form-select"
                value={docType}
                onChange={(e) => setDocType(e.target.value)}
              >
                <option value="">Select type</option>
                <option value="pyqs">Question Paper</option>
                <option value="notes">Notes</option>
                <option value="practicals">Practicals</option>
                <option value="course_file">Course File</option>
                <option value="assignment">Assignment</option>
              </select>
            </div>

            {/* Year & Branch */}
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Year *
                </label>
                <select
                  className="form-select"
                  value={docClgYear}
                  onChange={(e) => setDocClgYear(e.target.value)}
                >
                  <option value="">Select year</option>
                  <option value="year1">1st Year</option>
                  <option value="year2">2nd Year</option>
                  <option value="year3">3rd Year</option>
                  <option value="year4">4th Year</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Branch (Which branch is this document for?)*
                </label>
                <select
                  className="form-select"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                >
                  <option value="">Select branch</option>
                  <option value="cse">CSE</option>
                  <option value="it">IT</option>
                  <option value="ce">CE</option>
                </select>
              </div>
            </div>


            {/* File Upload */}
            <label className="form-label fw-semibold">Upload PDF *</label>
            <label className="file-box mb-3">
              <input
                type="file"
                accept=".pdf"
                hidden
                onChange={(e) => setFile(e.target.files[0])}
              />
              <div className="fw-semibold">
                {file ? `📄 ${file.name}` : "Click to upload PDF"}
              </div>
              <small className="text-muted">Max 10MB • PDF only</small>
            </label>

            {/* Options */}
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                checked={anonymous}
                onChange={(e) => setAnonymous(e.target.checked)}
              />
              <label className="form-check-label">Upload anonymously</label>
            </div>

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                checked={confirmRights}
                onChange={(e) => setConfirmRights(e.target.checked)}
              />
              <label className="form-check-label">
                I have rights to upload this file *
              </label>
            </div>

            <div className="alert alert-info py-2 small mb-0">
              🎟 Approved uploads earn <strong>1–3 tokens</strong>
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer border-0">
            <button className="btn btn-light" onClick={onClose}>
              Cancel
            </button>
            <button
              className={`btn btn-primary px-4 ${loading ? "btn-loading" : ""}`}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Uploading..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
