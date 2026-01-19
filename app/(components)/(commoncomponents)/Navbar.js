"use client";
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Navigation() {
  const { data: session } = useSession();
  const [searchQuery, setSearchQuery] = useState("");

  const sidebarLinks = [
    {
      sub: "es",
      year: "1st-year",
      label: "Environmental Science",
      category: "1st Year",
    },
    {
      sub: "calculus",
      year: "1st-year",
      label: "Engineering Calculus",
      category: "1st Year",
    },
    {
      sub: "ec",
      year: "1st-year",
      label: "Engineering Chemistry",
      category: "1st Year",
    },
    {
      sub: "boe",
      year: "1st-year",
      label: "Basic of Energy",
      category: "1st Year",
    },
    {
      sub: "tcss",
      year: "1st-year",
      label: "Technical Communication",
      category: "1st Year",
    },
    {
      sub: "eg",
      year: "1st-year",
      label: "Engineering Graphics",
      category: "1st Year",
    },
    {
      sub: "iks",
      year: "1st-year",
      label: "Indian Knowledge System",
      category: "1st Year",
    },
    {
      sub: "automobile",
      year: "1st-year",
      label: "Automobile Engineering",
      category: "1st Year",
    },
    {
      sub: "dela",
      year: "1st-year",
      label: "Differential Equations & Linear Algebra",
      category: "1st Year",
    },
    {
      sub: "ep",
      year: "1st-year",
      label: "Engineering Physics",
      category: "1st Year",
    },
    {
      sub: "bcps",
      year: "1st-year",
      label: "Business Communication & Presentation Skills",
      category: "1st Year",
    },
    {
      sub: "op3",
      year: "1st-year",
      label: "Open Elective 3",
      category: "1st Year",
    },
    {
      sub: "workshop",
      year: "1st-year",
      label: "Workshop Practice",
      category: "1st Year",
    },
    {
      sub: "bst",
      year: "1st-year",
      label: "Bharatiya Science & Technology",
      category: "1st Year",
    },
    {
      sub: "pps",
      year: "1st-year",
      label: "Programming for Problem Solving",
      category: "1st Year",
    },
    {
      sub: "psnm",
      year: "2nd-year",
      label: "Probability, Statistics & Numerical Methods",
      category: "2nd Year",
    },
    {
      sub: "ict",
      year: "2nd-year",
      label: "ICT Tools & Technology",
      category: "2nd Year",
    },
    {
      sub: "de",
      year: "2nd-year",
      label: "Digital Electronics",
      category: "2nd Year",
    },
    {
      sub: "oops",
      year: "2nd-year",
      label: "Object Oriented Concept with UML",
      category: "2nd Year",
    },
    {
      sub: "dbms",
      year: "2nd-year",
      label: "Database Management System",
      category: "2nd Year",
    },
    {
      sub: "hvpe",
      year: "2nd-year",
      label: "Human Values & Professional Ethics",
      category: "2nd Year",
    },
    {
      sub: "dsa",
      year: "2nd-year",
      label: "Data Structure and Algorithms",
      category: "2nd Year",
    },
    {
      sub: "os",
      year: "2nd-year",
      label: "Operating System",
      category: "2nd Year",
    },
    {
      sub: "mfe",
      year: "2nd-year",
      label: "Management for Engineers",
      category: "2nd Year",
    },
    {
      sub: "cjp",
      year: "2nd-year",
      label: "Core Java Programming",
      category: "2nd Year",
    },
  ];

  const brand = process.env.NEXT_PUBLIC_WEBSITE_NAME || "IUHub";

  // Group subjects by category
  const groupedSubjects = sidebarLinks.reduce((acc, link) => {
    if (!acc[link.category]) {
      acc[link.category] = [];
    }
    acc[link.category].push(link);
    return acc;
  }, {});

  // Filter subjects based on search
  const filteredLinks = searchQuery
    ? sidebarLinks.filter((link) =>
        link.label.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : null;

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top bg-white border-bottom shadow-sm">
        <div className="container-fluid px-3 px-lg-4">
          {/* BRAND with enhanced styling */}
          <Link
            href="/"
            className="navbar-brand fw-bold text-dark d-flex align-items-center"
          >
            <i className="bi bi-mortarboard-fill text-primary fs-5 me-2"></i>
            <span className="fs-4">{brand}</span>
          </Link>

          {/* TOGGLER with custom styling */}
          <button
            className="navbar-toggler border-0 shadow-sm"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* NAVIGATION LINKS */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto gap-1 gap-lg-2 align-items-lg-center">
              {/* Home Link */}
              <li className="nav-item">
                <Link
                  className="nav-link fw-medium text-dark px-3 py-2 rounded hover-bg-light"
                  href="/"
                >
                  <span className="d-lg-inline">Home</span>
                </Link>
              </li>

              {/* Enhanced Subjects Dropdown with Search */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-medium text-dark px-3 py-2 rounded hover-bg-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Subjects
                </a>

                <div
                  className="dropdown-menu dropdown-menu-end shadow-lg border-0 p-0"
                  style={{
                    minWidth: "280px",
                    width: "90vw",
                    maxWidth: "400px",
                  }}
                >
                  {/* Search box inside dropdown */}
                  <div className="p-3 border-bottom bg-light">
                    <div className="input-group input-group-sm">
                      <span className="input-group-text bg-white border-end-0"></span>
                      <input
                        type="text"
                        className="form-control border-start-0 ps-0"
                        placeholder="Search subjects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                      />
                      {searchQuery && (
                        <button
                          className="btn btn-sm btn-link text-muted p-0 px-2"
                          onClick={() => setSearchQuery("")}
                          type="button"
                        ></button>
                      )}
                    </div>
                  </div>

                  {/* Subjects list with grouping */}
                  <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
                    {filteredLinks ? (
                      // Show filtered results
                      filteredLinks.length > 0 ? (
                        <div>
                          {filteredLinks.map((link, index) => (
                            <Link
                              key={index}
                              className="dropdown-item py-2 px-3 d-flex align-items-start align-items-sm-center hover-bg-light"
                              href={`/${link.year}/${link.sub}`}
                            >
                              <div className="flex-grow-1 min-w-0">
                                <div className="fw-medium text-truncate">
                                  {link.label}
                                </div>
                                <small className="text-muted d-block text-truncate">
                                  {link.category}
                                </small>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-4 px-3 text-muted">
                          <p className="mb-0 small">No subjects found</p>
                        </div>
                      )
                    ) : (
                      // Show grouped subjects
                      Object.entries(groupedSubjects).map(
                        ([category, links]) => (
                          <div key={category}>
                            <div className="dropdown-header d-flex align-items-center fw-bold text-primary bg-primary  sticky-top py-2 px-3">
                              <span
                                style={{ color: "black" }}
                                className="flex-grow-1 text-truncate"
                              >
                                {category}
                              </span>
                            </div>
                            {links.map((link, index) => (
                              <Link
                                key={index}
                                className="dropdown-item py-2 px-3 d-flex align-items-center hover-bg-light"
                                href={`/${link.year}/${link.sub}`}
                              >
                                <span className="text-truncate">
                                  {link.label}
                                </span>
                              </Link>
                            ))}
                            {category !== "2nd Year" && (
                              <hr className="dropdown-divider my-0" />
                            )}
                          </div>
                        ),
                      )
                    )}
                  </div>

                  {/* Quick actions footer */}
                  <div className="border-top p-2 bg-light">
                    <div className="row g-2">
                      <div className="col-6">
                        <Link
                          href="/1st-year"
                          className="btn btn-sm btn-outline-primary w-100 d-flex align-items-center justify-content-center py-2"
                        >
                          <span className="d-none d-sm-inline">1st Year</span>
                          <span className="d-inline d-sm-none">1st</span>
                        </Link>
                      </div>
                      <div className="col-6">
                        <Link
                          href="/2nd-year"
                          className="btn btn-sm btn-outline-success w-100 d-flex align-items-center justify-content-center py-2"
                        >
                          <span className="d-none d-sm-inline">2nd Year</span>
                          <span className="d-inline d-sm-none">2nd</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Why Link */}
              <li className="nav-item">
                <Link
                  className="nav-link fw-medium text-dark px-3 py-2 rounded hover-bg-light"
                  href="/why"
                >
                  <span className="d-lg-inline">Why???</span>
                </Link>
              </li>

              {/* Divider for desktop */}
              <li className="nav-item d-none d-lg-block">
                <div className="vr mx-2" style={{ height: "24px" }}></div>
              </li>

              {/* Login/Sign up  */}

              {/* Login / Profile */}
              <li className="nav-item position-relative">
  {session ? (
    <div className="profile-hover-wrapper">
      <Link
        href="/profile"
        className="nav-link px-2 py-1 rounded d-flex align-items-center hover-bg-light"
      >
        <Image
          src={session.user.image}
          alt="Profile"
          width={32}
          height={32}
          className="rounded-circle"
        />
      </Link>

      {/* Hover Card */}
      <div className="profile-hover-card shadow-sm">
        <div className="fw-semibold">{session.user.name}</div>
        <div className="text-muted small">{session.user.email}</div>
      </div>
    </div>
  ) : (
    <Link
      href="/login"
      className="nav-link fw-medium text-dark px-3 py-2 rounded hover-bg-light"
    >
      Login
    </Link>
  )}
</li>

            </ul>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div style={{ height: "70px" }}></div>
    </>
  );
}
