'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [brand, setBrand] = useState('');

  useEffect(() => {
    setBrand(process.env.NEXT_PUBLIC_WEBSITE_NAME);
  }, []);

  return (
    <>
      {/* WhatsApp group Button */}
      <div className="d-flex flex-column justify-content-around align-items-center text-center mt-5 mb-4">
        <a
          className="btn btn-success px-5 py-2 fw-semibold shadow-sm"
          href="https://chat.whatsapp.com/Fq1P6DdGipgD2DNClxMlIX"
          target="_blank"
          rel="noopener noreferrer"
        >
          📱 Join Our WhatsApp Group
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white pt-5 pb-4">
        <div className="container">
          <div className="row g-5">
            {/* Branding */}
            <div className="col-lg-5 col-md-12">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-journal-text fs-3 me-2 text-info"></i>
                <h5 className="fw-bold mb-0">{brand}</h5>
              </div>
              <p className="text-white-50 pe-lg-5">
                Your complete academic resource hub providing comprehensive study materials for engineering students.
              </p>

              {/* Social Icons */}
              <div className="d-flex gap-3 mt-3">
                <a
                  href="https://www.linkedin.com/in/tirthrajsinh-jadeja-36a0b72a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="text-white-50"
                  style={{ fontSize: '1.2rem', transition: 'color 0.2s' }}
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3 col-sm-6">
              <h6 className="text-uppercase text-info fw-bold mb-3">Quick Links</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link href="/" className="text-white-50 text-decoration-none">Home</Link>
                </li>
                <li className="mb-2">
                  <Link href="/about" className="text-white-50 text-decoration-none">About</Link>
                </li>
                <li className="mb-2">
                  <Link href="/contact" className="text-white-50 text-decoration-none">Contact Us</Link>
                </li>
                <li className="mb-2">
                  <Link href="/help" className="text-white-50 text-decoration-none">Help</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-4 border-secondary" />

          {/* Bottom Footer */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <p className="mb-2 mb-md-0 text-white-50 small">
              &copy; {new Date().getFullYear()} {brand}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
