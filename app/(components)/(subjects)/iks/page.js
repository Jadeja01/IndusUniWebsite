"use client";
import Link from "next/link";
import sidebarLinks from "../../(commoncomponents)/(sidebarlinks)/page";
import buttons from "../../(commoncomponents)/(buttons)/page";

export default function IndianKnowledgeSystem() {
  return (
    <>
      <div
        className="text-center py-4"
        style={{ background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)" }}
      >
        <h1 className="text-white mb-3">SWN | Indian Knowledge System</h1>
      </div>

      <div className="container-fluid">
        <div className="row" style={{ minHeight: "calc(100vh - 160px)" }}>
          {/* Main Content */}
          <div className="col-lg-9 py-4 order-1 order-lg-2">
            <h1 className="mb-4">Indian Knowledge System</h1>

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-3 mb-4">
              {buttons.map((btn, index) => (
                <Link
                  key={index}
                  href={btn.href}
                  className="btn btn-info text-white px-4"
                  style={{ backgroundColor: "#4ECDC4" }}
                >
                  {btn.label}
                </Link>
              ))}
            </div>

            {/* Course Units */}
            <div className="mb-4">
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h3 className="mb-3" style={{ color: "#4ECDC4" }}>
                    Unit-1: Introduction to Indian Knowledge Systems
                  </h3>
                  <p>
                    <span className="fw-bold d-block mb-2">
                      Historical Overview:
                    </span>
                    Evolution of Indian knowledge traditions, ancient
                    universities, gurukul system, oral traditions.
                  </p>
                  <p className="mb-0">
                    <span className="fw-bold d-block mb-2">
                      Knowledge Domains:
                    </span>
                    Classification of knowledge in ancient India, integration of
                    spiritual and material knowledge.
                  </p>
                </div>
              </div>

              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h3 className="mb-3" style={{ color: "#4ECDC4" }}>
                    Unit-2: Ancient Indian Sciences
                  </h3>
                  <p>
                    <span className="fw-bold d-block mb-2">
                      Mathematics and Astronomy:
                    </span>
                    Vedic mathematics, astronomical calculations, ancient Indian
                    numerals, mathematical treatises.
                  </p>
                  <p className="mb-0">
                    <span className="fw-bold d-block mb-2">
                      Medicine and Healthcare:
                    </span>
                    Ayurveda principles, traditional healing practices, yoga and
                    wellness systems.
                  </p>
                </div>
              </div>

              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h3 className="mb-3" style={{ color: "#4ECDC4" }}>
                    Unit-3: Architecture and Engineering
                  </h3>
                  <p>
                    <span className="fw-bold d-block mb-2">
                      Traditional Architecture:
                    </span>
                    Vastu Shastra principles, temple architecture, ancient city
                    planning, water management.
                  </p>
                  <p className="mb-0">
                    <span className="fw-bold d-block mb-2">
                      Engineering Sciences:
                    </span>
                    Metallurgy, civil engineering techniques, ancient tools and
                    technologies.
                  </p>
                </div>
              </div>

              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h3 className="mb-3" style={{ color: "#4ECDC4" }}>
                    Unit-4: Modern Applications
                  </h3>
                  <p>
                    <span className="fw-bold d-block mb-2">
                      Contemporary Relevance:
                    </span>
                    Application of traditional knowledge in modern context,
                    sustainable practices.
                  </p>
                  <p className="mb-0">
                    <span className="fw-bold d-block mb-2">
                      Future Perspectives:
                    </span>
                    Integration with modern science, research opportunities,
                    preservation of knowledge systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-3 px-0 order-2 order-lg-1">
            <div
              className="card h-100 rounded-0 border-end"
              style={{ position: "sticky", top: "0" }}
            >
              <div className="card-body d-flex flex-column align-items-center">
                <h3 className="card-title text-center mb-4">Course Plan:</h3>
                <div className="d-flex flex-column w-100">
                  {sidebarLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="nav-link py-3 border-bottom text-center"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
