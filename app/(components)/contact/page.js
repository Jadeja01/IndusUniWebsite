'use client';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5" style={{ color: "#4ECDC4" }}>Contact Us</h1>
      
      <div className="row">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h2 className="mb-4" style={{ color: "#4ECDC4" }}>Get in Touch</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input type="text" className="form-control" id="subject" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-info text-white px-4" style={{ backgroundColor: "#4ECDC4" }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="col-lg-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h2 className="mb-4" style={{ color: "#4ECDC4" }}>Contact Information</h2>
              
              <div className="mb-4">
                <h4 className="mb-3" style={{ color: "#4ECDC4" }}>Address</h4>
                <p>
                  Indus University<br />
                  Rancharda, Via: Thaltej,<br />
                  Ahmedabad 382 115,<br />
                  Gujarat, India
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="mb-3" style={{ color: "#4ECDC4" }}>Contact Details</h4>
                <p>
                  Phone: +91-2764-260277 / 78 / 79<br />
                  Email: info@indusuni.ac.in<br />
                  Fax: +91-2764-260276
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="mb-3" style={{ color: "#4ECDC4" }}>Office Hours</h4>
                <p>
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday: 9:00 AM - 1:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
              
              <div>
                <h4 className="mb-3" style={{ color: "#4ECDC4" }}>Quick Links</h4>
                <Link href="/about" className="btn btn-outline-info me-2 mb-2" style={{ borderColor: "#4ECDC4", color: "#4ECDC4" }}>
                  About Us
                </Link>
                <Link href="/help" className="btn btn-outline-info me-2 mb-2" style={{ borderColor: "#4ECDC4", color: "#4ECDC4" }}>
                  Help Center
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 