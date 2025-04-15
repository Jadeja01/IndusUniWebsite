'use client';
import Link from 'next/link';

export default function Welcome() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 mb-3" style={{ color: "#4ECDC4" }}>Welcome to StudyWithNotes</h1>
        <h4 className="text-muted">Your Complete Academic Resource Hub</h4>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title mb-4" style={{ color: "#4ECDC4" }}>Quick Access</h2>
              <div className="d-grid gap-3">
                <Link href="/eg" className="btn btn-outline-info">Engineering Graphics</Link>
                <Link href="/es" className="btn btn-outline-info">Environmental Science</Link>
                <Link href="/calculus" className="btn btn-outline-info">Engineering Calculus</Link>
                <Link href="/ec" className="btn btn-outline-info">Engineering Chemistry</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title mb-4" style={{ color: "#4ECDC4" }}>What We Offer</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <i className="bi bi-book-fill me-2" style={{ color: "#4ECDC4" }}></i>
                  Comprehensive Study Materials
                </li>
                <li className="list-group-item">
                  <i className="bi bi-file-text-fill me-2" style={{ color: "#4ECDC4" }}></i>
                  Previous Year Question Papers
                </li>
                <li className="list-group-item">
                  <i className="bi bi-pencil-fill me-2" style={{ color: "#4ECDC4" }}></i>
                  Practice Assignments
                </li>
                <li className="list-group-item">
                  <i className="bi bi-mortarboard-fill me-2" style={{ color: "#4ECDC4" }}></i>
                  Interactive Tutorials
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title mb-4" style={{ color: "#4ECDC4" }}>Latest Updates</h2>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="alert alert-info">
                    <h5 className="alert-heading">New Study Materials</h5>
                    <p className="mb-0">Latest study materials and resources have been added to all subjects.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="alert alert-info">
                    <h5 className="alert-heading">Upcoming Events</h5>
                    <p className="mb-0">Stay tuned for upcoming tutorials and study sessions!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title mb-4" style={{ color: "#4ECDC4" }}>Getting Started</h2>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="text-center">
                    <div className="mb-3">
                      <i className="bi bi-1-circle-fill fs-1" style={{ color: "#4ECDC4" }}></i>
                    </div>
                    <h5>Choose Your Subject</h5>
                    <p>Select from our wide range of engineering subjects</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center">
                    <div className="mb-3">
                      <i className="bi bi-2-circle-fill fs-1" style={{ color: "#4ECDC4" }}></i>
                    </div>
                    <h5>Access Resources</h5>
                    <p>Find study materials, assignments, and question papers</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center">
                    <div className="mb-3">
                      <i className="bi bi-3-circle-fill fs-1" style={{ color: "#4ECDC4" }}></i>
                    </div>
                    <h5>Start Learning</h5>
                    <p>Begin your learning journey with our comprehensive materials</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 