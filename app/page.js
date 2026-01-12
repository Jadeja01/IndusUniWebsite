"use client";
import Link from "next/link";

const BRAND = process.env.NEXT_PUBLIC_WEBSITE_NAME || "IUHub";

export default function Home() {
  return (
    <>
      {/* HERO SECTION - Enhanced with better hierarchy and visual appeal */}
      <section className="hero-section bg-gradient position-relative overflow-hidden py-5">
        <div className="container py-5">
          <div className="row align-items-center min-vh-50">
            <div className="col-lg-9 mx-auto text-center">
              {/* Platform badge */}
              <div className="mb-4">
                <span className="badge bg-primary bg-opacity-10 text-primary px-4 py-2 rounded-pill fs-6 fw-medium">
                  Academic Resource Platform
                </span>
              </div>

              {/* Main heading */}
              <h1 className="display-3 fw-bold mb-3 lh-sm">
                Engineering Resources for{" "}
                <span className="text-primary position-relative d-inline-block">
                  Indus University
                  <svg
                    className="position-absolute start-0 bottom-0 w-100"
                    height="10"
                    viewBox="0 0 200 12"
                    fill="none"
                  >
                    <path
                      d="M2 10C50 2 150 2 198 10"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              {/* Courses list */}
              <div className="mb-4">
                <p className="fw-medium text-muted mb-0">
                  CE <span className="mx-2">·</span>
                  CSE <span className="mx-2">·</span>
                  IT
                </p>
              </div>

              {/* Feature highlights */}
              <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
                <span className="badge bg-light text-dark px-3 py-2 rounded-pill">
                  Notes
                </span>
                <span className="badge bg-light text-dark px-3 py-2 rounded-pill">
                  Assignments
                </span>
                <span className="badge bg-light text-dark px-3 py-2 rounded-pill">
                  Diagrams
                </span>
                <span className="badge bg-light text-dark px-3 py-2 rounded-pill">
                  Previous Papers
                </span>
              </div>

{/* Direct access search
<div className="d-flex justify-content-center mb-5">
  <div className="w-100" style={{ maxWidth: "64%" }}>
    <input
      type="text"
      className="form-control form-control-lg rounded-pill px-4 shadow-sm"
      placeholder="Search subjects, notes, assignments..."
      aria-label="Search academic resources"
    />
  </div>
</div> */}

              {/* CTA buttons */}
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Link
                  href="#year-selection"
                  className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow-sm"
                >
                  Browse by Year
                </Link>

                <Link
                  href="/1st-year/eg"
                  className="btn btn-outline-primary btn-lg px-5 py-3 rounded-pill"
                >
                  Engineering Graphics
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative background elements */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100 opacity-25"
          style={{ zIndex: -1 }}
        >
          <div
            className="position-absolute"
            style={{
              top: "10%",
              left: "5%",
              width: "100px",
              height: "100px",
              background:
                "radial-gradient(circle, rgba(13,110,253,0.1) 0%, transparent 70%)",
            }}
          ></div>
          <div
            className="position-absolute"
            style={{
              bottom: "10%",
              right: "5%",
              width: "150px",
              height: "150px",
              background:
                "radial-gradient(circle, rgba(13,110,253,0.1) 0%, transparent 70%)",
            }}
          ></div>
        </div>
      </section>

      {/* YEAR SELECTION - Enhanced cards with better visual hierarchy */}
      <section id="year-selection" className="py-5 bg-white">
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">
                Choose Your Academic Year
              </h2>
              <p className="lead text-muted">
                Resources structured exactly as per your syllabus with easy
                navigation
              </p>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {[
              {
                label: "1st Year",
                href: "/1st-year",
                desc: "Fundamental engineering subjects including mathematics, physics, and core concepts",
                badge: null,
                icon: "1-circle-fill",
                color: "primary",
              },
              {
                label: "2nd Year",
                href: "/2nd-year",
                desc: "Core and applied subjects building on foundational knowledge",
                badge: null,
                icon: "2-circle-fill",
                color: "success",
              },
            ].map((year, idx) => (
              <div key={idx} className="col-md-6 col-lg-5">
                <Link href={year.href} className="text-decoration-none">
                  <div
                    className={`card h-100 border-0 shadow-sm hover-shadow-lg transition-all position-relative overflow-hidden`}
                  >
                    {year.badge && (
                      <div className="position-absolute top-0 end-0 m-3">
                        <span className="badge bg-warning text-dark">
                          <i className="bi bi-star-fill me-1"></i>
                          {year.badge}
                        </span>
                      </div>
                    )}

                    <div className="card-body p-4">
                      <div className="d-flex align-items-start mb-3">
                        <div
                          className={`bg-${year.color} bg-opacity-10 rounded-circle p-3 me-3`}
                        >
                          <i
                            className={`bi bi-${year.icon} fs-1 text-${year.color}`}
                          ></i>
                        </div>
                        <div className="flex-grow-1">
                          <h3 className="card-title h4 mb-2">{year.label}</h3>
                          
                        </div>
                      </div>

                      <p className="card-text text-muted mb-4">{year.desc}</p>

                      <div className="d-flex align-items-center text-primary fw-semibold">
                        View All Subjects
                        <i className="bi bi-arrow-right ms-2"></i>
                      </div>
                    </div>

                    {/* Hover effect gradient */}
                    <div
                      className={`position-absolute bottom-0 start-0 w-100 h-2 bg-${year.color}`}
                    ></div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK ACCESS - Improved with better visual organization */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">Quick Access</h2>
              <p className="lead text-muted">
                Jump directly to the most popular subjects
              </p>
            </div>
          </div>

          <div className="row g-4">
            {[
              {
                title: "Engineering Graphics",
                href: "/1st-year/eg",
                icon: "pencil-square",
                desc: "Technical drawings & CAD",
                color: "primary",
              },
              {
                title: "Engineering Calculus",
                href: "/1st-year/calculus",
                icon: "calculator",
                desc: "Differential & Integral",
                color: "success",
              },
              {
                title: "Environmental Science",
                href: "/1st-year/es",
                icon: "globe",
                desc: "Sustainability & Ecology",
                color: "info",
              },
              {
                title: "Engineering Chemistry",
                href: "/1st-year/ec",
                icon: "flask",
                desc: "Materials & Reactions",
                color: "warning",
              },
            ].map((subject, idx) => (
              <div key={idx} className="col-6 col-lg-3">
                <Link href={subject.href} className="text-decoration-none">
                  <div className="card h-100 border-0 shadow-sm hover-shadow-lg transition-all text-center">
                    <div className="card-body p-4">
                      <div
                        className={`bg-${subject.color} bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3`}
                        style={{ width: "64px", height: "64px" }}
                      >
                        <i
                          className={`bi bi-${subject.icon} fs-3 text-${subject.color}`}
                        ></i>
                      </div>
                      <h6 className="card-title mb-2 fw-bold">
                        {subject.title}
                      </h6>
                      <p className="card-text text-muted small mb-3">
                        {subject.desc}
                      </p>
                      <span
                        className={`text-${subject.color} fw-semibold small`}
                      >
                        Browse <i className="bi bi-arrow-right ms-1"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION - New addition for better educational context */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">
                Why Students Choose {BRAND}
              </h2>
              <p className="lead text-muted">
                Everything you need to excel in your engineering studies
              </p>
            </div>
          </div>

          <div className="row g-4">
            {[
              {
                icon: "check-circle-fill",
                title: "Syllabus-Aligned",
                desc: "All content matches your university curriculum exactly",
                color: "success",
              },
              {
                icon: "clock-fill",
                title: "Always Updated",
                desc: "Regular updates with the latest study materials",
                color: "primary",
              },
              {
                icon: "download",
                title: "Easy Downloads",
                desc: "Download PDFs and resources for offline studying",
                color: "info",
              },
              {
                icon: "search",
                title: "Quick Search",
                desc: "Find exactly what you need in seconds",
                color: "warning",
              },
            ].map((feature, idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <div className="text-center">
                  <div
                    className={`bg-${feature.color} bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3`}
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i
                      className={`bi bi-${feature.icon} fs-1 text-${feature.color}`}
                    ></i>
                  </div>
                  <h5 className="fw-bold mb-2">{feature.title}</h5>
                  <p className="text-muted small">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - Enhanced with better visual appeal */}
      <section className="py-5 bg-primary text-white position-relative overflow-hidden">
        <div className="container py-5 position-relative" style={{ zIndex: 1 }}>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-4 fw-bold mb-4">
                Ready to Start Learning?
              </h2>
              <p className="lead mb-5 opacity-90">
                Join thousands of students who are already excelling with{" "}
                {BRAND}
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Link
                  href="#year-selection"
                  className="btn btn-light btn-lg px-5 py-3 rounded-pill shadow"
                >
                  <i className="bi bi-rocket-takeoff me-2"></i>
                  Get Started Now
                </Link>
                <Link
                  href="/about"
                  className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Background pattern */}
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10">
          <div
            className="position-absolute"
            style={{
              top: "0",
              left: "0",
              width: "200px",
              height: "200px",
              background: "radial-gradient(circle, white 0%, transparent 70%)",
            }}
          ></div>
          <div
            className="position-absolute"
            style={{
              bottom: "0",
              right: "0",
              width: "300px",
              height: "300px",
              background: "radial-gradient(circle, white 0%, transparent 70%)",
            }}
          ></div>
        </div>
      </section>

      
    </>
  );
}
