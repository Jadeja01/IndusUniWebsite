"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="container py-5">
      {/* Hero Section */}
      <section className="text-center mb-5 py-4">
        <h1 className="fw-bold display-4 mb-3">About IUhub</h1>
        <p className="text-muted mt-3 fs-5 mx-auto" style={{ maxWidth: 700 }}>
          A student‑first academic platform built to simplify engineering
          education and centralize everything you need in one place.
        </p>
      </section>

      {/* Mission */}
      <section className="mb-5 py-4">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="bg-light rounded p-5">
              <h2 className="fw-semibold mb-4 text-center">Our Mission</h2>
              <p className="text-muted mb-3 fs-6">
                IUhub exists to solve a simple but persistent problem faced by
                engineering students: scattered resources. Notes, assignments,
                syllabi, practicals, tools, and updates are often spread across
                multiple platforms. IUhub brings them together into a single,
                structured, and easy‑to‑use academic hub.
              </p>
              <p className="text-muted fs-6">
                Our goal is to reduce confusion, save time, and help students focus
                on what truly matters—learning and building skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What IUhub Offers */}
      <section className="mb-5 py-4">
        <h2 className="fw-semibold mb-4 text-center">What IUhub Offers</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 border rounded h-100 shadow-sm hover-card">
              <div className="mb-3 fs-1">📚</div>
              <h5 className="fw-semibold mb-3">Academic Resources</h5>
              <p className="text-muted">
                Subject‑wise notes, assignments, engineering graphics sheets,
                practical programs, and exam‑oriented material—organized by
                year and semester.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded h-100 shadow-sm hover-card">
              <div className="mb-3 fs-1">🧠</div>
              <h5 className="fw-semibold mb-3">Smart Navigation</h5>
              <p className="text-muted">
                Fast search, subject filters, and direct access from the
                navbar—so you find what you need without friction.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded h-100 shadow-sm hover-card">
              <div className="mb-3 fs-1">🛠</div>
              <h5 className="fw-semibold mb-3">Student‑Friendly Tools</h5>
              <p className="text-muted">
                Utilities such as PDF tools, structured content pages, and
                interactive components designed specifically for academic use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why IUhub */}
      <section className="mb-5 py-4">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="bg-primary bg-opacity-10 rounded p-5">
              <h2 className="fw-semibold mb-4 text-center">Why IUhub?</h2>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="me-3 fs-4">✓</div>
                    <div>
                      <h6 className="fw-semibold mb-1">Built by a student, for students</h6>
                      <p className="text-muted small mb-0">Understanding real academic challenges from experience</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="me-3 fs-4">✓</div>
                    <div>
                      <h6 className="fw-semibold mb-1">Clean, distraction‑free interface</h6>
                      <p className="text-muted small mb-0">Focus on learning without unnecessary clutter</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="me-3 fs-4">✓</div>
                    <div>
                      <h6 className="fw-semibold mb-1">Focused on Indian engineering curriculum</h6>
                      <p className="text-muted small mb-0">Tailored content matching your syllabus and needs</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="me-3 fs-4">✓</div>
                    <div>
                      <h6 className="fw-semibold mb-1">Continuously evolving</h6>
                      <p className="text-muted small mb-0">Regular updates based on real student feedback</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="mb-5 py-4">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="text-center p-5 border rounded">
              <h2 className="fw-semibold mb-4">Our Vision</h2>
              <p className="text-muted fs-6 mb-4" style={{ maxWidth: 800, margin: '0 auto' }}>
                IUhub aims to become a complete academic companion for engineering
                students—covering learning resources, productivity tools, AI‑assisted
                help, and career‑focused guidance under one platform.
              </p>
              <div className="row g-3 mt-4">
                <div className="col-md-3 col-6">
                  <div className="p-3 bg-light rounded">
                    <div className="fs-3 mb-2">🎯</div>
                    <small className="text-muted">Comprehensive</small>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="p-3 bg-light rounded">
                    <div className="fs-3 mb-2">⚡</div>
                    <small className="text-muted">Fast & Efficient</small>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="p-3 bg-light rounded">
                    <div className="fs-3 mb-2">🤝</div>
                    <small className="text-muted">Community Driven</small>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="p-3 bg-light rounded">
                    <div className="fs-3 mb-2">🚀</div>
                    <small className="text-muted">Always Improving</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center p-5 bg-primary bg-opacity-10 rounded">
        <h3 className="fw-semibold mb-3">Join the IUhub Journey</h3>
        <p className="text-muted mb-4 mx-auto" style={{ maxWidth: 600 }}>
          Whether you are preparing for exams, completing assignments, or
          building projects, IUhub is here to support you at every step.
        </p>
        <Link href="/" className="btn btn-primary btn-lg px-5 py-2 shadow">
          Explore IUhub
        </Link>
      </section>


    </main>
  );
}