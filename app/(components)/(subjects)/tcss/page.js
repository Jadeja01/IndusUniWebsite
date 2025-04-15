'use client';
import Link from 'next/link';
import buttons from '../../(commoncomponents)/(buttons)/page';
import sidebarLinks from '../../(commoncomponents)/(sidebarlinks)/page';

export default function TechnicalCommunication() {
  return (
    <>
      <div className="text-center py-4" style={{ background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)" }}>
        <h1 className="text-white mb-3">SWN | Technical Communication</h1>
        <h4 className="text-white my-2">Indus University</h4>
        <p className="text-white mb-0">CSE Section</p>
      </div>

      <div className="container-fluid">
        <div className="row" style={{ minHeight: 'calc(100vh - 160px)' }}>
          
          {/* Main Content */}
          <div className="col-lg-9 py-4 order-1 order-lg-2">
            <h1 className="mb-4">Technical Communication</h1>
            
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
                  <h3 className="mb-3" style={{ color: "#4ECDC4" }}>Unit-1: Fundamentals of Communication</h3>
                  <p>
                    <span className="fw-bold d-block mb-2">Communication Basics:</span>
                    Process of communication, types of communication, barriers to communication, effective communication strategies.
                  </p>
                  <p className="mb-0">
                    <span className="fw-bold d-block mb-2">Technical Writing:</span>
                    Principles of technical writing, audience analysis, clarity, conciseness, and coherence in writing.
                  </p>
                </div>
              </div>

              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h3 className="mb-3" style={{ color: "#4ECDC4" }}>Unit-2: Professional Documents</h3>
                  <p>
                    <span className="fw-bold d-block mb-2">Business Correspondence:</span>
                    Letters, memos, emails, reports, proposals, technical documentation.
                  </p>
                  <p className="mb-0">
                    <span className="fw-bold d-block mb-2">Document Design:</span>
                    Layout, formatting, visual elements, graphics, documentation standards.
                  </p>
                </div>
              </div>

              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h3 className="mb-3" style={{ color: "#4ECDC4" }}>Unit-3: Presentation Skills</h3>
                  <p>
                    <span className="fw-bold d-block mb-2">Oral Communication:</span>
                    Public speaking, presentation techniques, visual aids, body language.
                  </p>
                  <p className="mb-0">
                    <span className="fw-bold d-block mb-2">Group Communication:</span>
                    Meetings, group discussions, team presentations, interpersonal skills.
                  </p>
                </div>
              </div>

              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h3 className="mb-3" style={{ color: "#4ECDC4" }}>Unit-4: Professional Ethics</h3>
                  <p>
                    <span className="fw-bold d-block mb-2">Workplace Communication:</span>
                    Professional etiquette, cross-cultural communication, workplace ethics.
                  </p>
                  <p className="mb-0">
                    <span className="fw-bold d-block mb-2">Digital Communication:</span>
                    Online communication tools, social media professionalism, virtual meetings.
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

      <style jsx>{`
        .hover-highlight:hover {
          background-color: #f8f9fa;
          color: #4ECDC4 !important;
          transition: all 0.3s ease;
        }
      `}</style>
    </>
  );
} 