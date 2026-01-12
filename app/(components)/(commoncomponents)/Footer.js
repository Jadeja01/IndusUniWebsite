"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [brand, setBrand] = useState("");

  useEffect(() => {
    setBrand(process.env.NEXT_PUBLIC_WEBSITE_NAME || "IUHub");
  }, []);

  return (
    <>
      {/* Community Groups */}


      {/* Footer */}
      <footer
        className="text-white pt-5 pb-4"
        style={{
          background: "linear-gradient(180deg, #1a1a2e 0%, #0f0f1e 100%)",
        }}
      >
        <div className="container">
          <div className="row g-5">
            {/* Brand */}
            <div className="col-lg-5">
              <div className="d-flex align-items-center mb-4">
                <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-2">
              <i className="bi bi-mortarboard-fill text-primary fs-5"></i>
            </div>
                <h4 className="fw-bold mb-0">{brand}</h4>
              </div>

              <p className="text-white-50" style={{ lineHeight: "1.8" }}>
                Your complete academic resource hub providing comprehensive
                study materials for engineering students.
              </p>

              {/* Social Icons */}
              <div className="d-flex gap-3 mt-3">
                <a
                  href="https://www.linkedin.com/in/tirthrajsinh-jadeja-36a0b72a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="text-white-50"
                  target="_blank"
                  style={{ fontSize: "1.2rem", transition: "color 0.2s" }}
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3 col-sm-6">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "#667eea", letterSpacing: "1px" }}
              >
                Quick Links
              </h6>

              <ul className="list-unstyled">
                {[
                  { label: "Home", href: "/" },
                  { label: "Why???", href: "/why" },
                ].map((l) => (
                  <li key={l.label} className="mb-3">
                    <Link
                      href={l.href}
                      className="text-white-50 text-decoration-none d-flex align-items-center"
                      style={{ transition: "all 0.3s ease" }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = "#fff";
                        e.currentTarget.style.paddingLeft = "10px";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = "";
                        e.currentTarget.style.paddingLeft = "0";
                      }}
                    >
                      <i className="bi bi-chevron-right me-2"></i>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="border-secondary my-4 opacity-25" />

          {/* Bottom */}
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <p className="text-white-50 small mb-0">
                &copy; {new Date().getFullYear()} {brand}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
