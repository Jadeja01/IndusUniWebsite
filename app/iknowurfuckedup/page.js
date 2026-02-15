"use client";

import Link from "next/link";

export default function CareerToolkitPage() {
  return (
    <div className="min-vh-100 bg-light py-5">
      <div className="container text-center" style={{ maxWidth: "900px" }}>
        {/* HERO SECTION (UNCHANGED) */}
        <div className="card border-0 shadow-lg mb-5 overflow-hidden">
          <div className="bg-dark text-white p-5 text-center">
            <h2 className="fw-bold mb-3">
              🚀 Placement Survival Mode Activated
            </h2>
            <p className="mb-0 opacity-75">Welcome to the Final Boss Level.</p>
          </div>
        </div>

        {/* AI COMPANION SECTION */}
        <div className="card border-0 shadow-sm mb-5 p-5 toolkit-card">
          <div className="mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
              alt="ChatGPT"
              style={{ width: "90px" }}
            />
          </div>

          <h4 className="fw-bold mb-3">Your Unofficial Placement Partner 🤖</h4>

          <p className="text-muted">
            Resume stuck? HR question confusing? DSA not making sense?
          </p>

          <p className="fw-semibold">
            Talk to AI. Cry to AI. Practice with AI. It won’t judge your
            backlogs.
          </p>

          <a
            href="https://chat.openai.com/"
            target="_blank"
            className="btn btn-primary mt-3 px-4"
          >
            Open ChatGPT
          </a>
        </div>

        {/* CAMPUS MEMORY SECTION */}
        <div className="card border-0 shadow-lg mb-5 p-5 toolkit-card bg-white text-center">
          <h4 className="fw-bold mb-3">
            📸 Campus Gallery – Before It Becomes Just a Memory
          </h4>

          <p className="text-muted mb-3">One day you’ll miss this chaos.</p>

          <p className="fw-semibold">
            The canteen talks. The last bench laughter. The group photos after
            viva. The farewell day you pretended you weren’t emotional.
          </p>

          <p className="small text-muted mt-3">
            5 years from now, you won’t remember assignment deadlines. You’ll
            remember the people.
          </p>

          <div className="mt-4">
            <Link href="/gallery" className="btn btn-dark px-4 py-2">
              Upload Your College Memory 📷
            </Link>
          </div>

          <p className="small text-muted mt-3">
            Make this website our digital yearbook.
          </p>
        </div>

        {/* FUNNY STRESS METER */}
        <div className="card border-0 shadow-sm p-5 toolkit-card">
          <h4 className="fw-bold mb-3">📊 Current Stress Level</h4>

          <div className="progress mb-3" style={{ height: "12px" }}>
            <div
              className="progress-bar bg-danger"
              style={{ width: "82%" }}
            ></div>
          </div>

          <p className="small text-muted">
            Level: Internship Panic + Placement Anxiety Combo 😅
          </p>

          <p className="fw-semibold mt-3">
            But don’t worry. Even toppers are secretly stressed.
          </p>
        </div>

        <div className="mt-5">
          <Link href="/" className="btn btn-outline-secondary btn-sm px-4">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
