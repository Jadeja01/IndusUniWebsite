'use client';
import Link from 'next/link';

export default function Footer() {
  return (<>
  <a
        className="btn btn-success d-block w-auto mx-auto my-4 px-4 py-2 fw-bold"
        href="https://chat.whatsapp.com/Fq1P6DdGipgD2DNClxMlIX"
        target="_blank"
        rel="noopener noreferrer"
      >
        Join Our WhatsApp Group
      </a>
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-journal-text fs-4 me-2" style={{ color: "#4ECDC4" }}></i>
              <h5 className="mb-0 fw-bold">StudyWithNotes</h5>
            </div>
            <p className="text-white-50">Your complete academic resource hub providing comprehensive study materials for engineering students.</p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white-50 hover-text" style={{ transition: 'all 0.2s ease' }}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white-50 hover-text" style={{ transition: 'all 0.2s ease' }}>
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="text-white-50 hover-text" style={{ transition: 'all 0.2s ease' }}>
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white-50 hover-text" style={{ transition: 'all 0.2s ease' }}>
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
            <h6 className="mb-3 text-uppercase fs-6 fw-bold" style={{ color: "#4ECDC4" }}>Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link href="/" className="text-white-50 text-decoration-none hover-text">Home</Link></li>
              <li className="mb-2"><Link href="/about" className="text-white-50 text-decoration-none hover-text">About</Link></li>
              <li className="mb-2"><Link href="/contact" className="text-white-50 text-decoration-none hover-text">Contact Us</Link></li>
              <li className="mb-2"><Link href="/help" className="text-white-50 text-decoration-none hover-text">Help</Link></li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-4">
            <h6 className="mb-3 text-uppercase fs-6 fw-bold" style={{ color: "#4ECDC4" }}>Contact Info</h6>
            <ul className="list-unstyled">
              <li className="mb-2 text-white-50">
                <i className="bi bi-geo-alt me-2"></i> 123 University Ave, Tech City
              </li>
              <li className="mb-2">
                <a href="mailto:info@studywithnotes.com" className="text-white-50 text-decoration-none hover-text">
                  <i className="bi bi-envelope me-2"></i> info@studywithnotes.com
                </a>
              </li>
              <li className="mb-2">
                <a href="tel:+1234567890" className="text-white-50 text-decoration-none hover-text">
                  <i className="bi bi-telephone me-2"></i> +123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-3 bg-secondary opacity-25" />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-2 mb-md-0 text-white-50 small">All rights reserved.&copy;copyright {new Date().getFullYear()}.</p>
          <div>
            <a href="#" className="text-white-50 text-decoration-none small me-3 hover-text">Privacy Policy</a>
            <a href="#" className="text-white-50 text-decoration-none small hover-text">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
    
    </>
  );
}