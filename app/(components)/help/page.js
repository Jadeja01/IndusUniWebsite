'use client';
import Link from 'next/link';

export default function Help() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5" style={{ color: "#4ECDC4" }}>Help Center</h1>
      
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="mb-4" style={{ color: "#4ECDC4" }}>Frequently Asked Questions</h2>
              
              <div className="mb-4">
                <h4 className="mb-3" style={{ color: "#4ECDC4" }}>Accessing Course Materials</h4>
                <div className="mb-3">
                  <p className="fw-bold mb-2">How do I access my course materials?</p>
                  <p>Navigate to the specific subject page from the course plan menu. Each subject page contains units, assignments, question papers, and tutorials.</p>
                </div>
                <div className="mb-3">
                  <p className="fw-bold mb-2">Where can I find past question papers?</p>
                  <p>Click on the &quot;QPs&quot; button on any subject page to access previous year question papers.</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="mb-3" style={{ color: "#4ECDC4" }}>Assignments & Submissions</h4>
                <div className="mb-3">
                  <p className="fw-bold mb-2">How do I submit assignments?</p>
                  <p>Click on the &quot;ASSIGNMENTS&quot; button on the subject page, select the relevant assignment, and follow the submission instructions.</p>
                </div>
                <div className="mb-3">
                  <p className="fw-bold mb-2">What is the assignment submission deadline?</p>
                  <p>Each assignment has its own deadline. Check the assignment details page for specific submission dates.</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="mb-3" style={{ color: "#4ECDC4" }}>Technical Support</h4>
                <div className="mb-3">
                  <p className="fw-bold mb-2">What should I do if I can&apos;t access a page?</p>
                  <p>Try refreshing the page or clearing your browser cache. If the issue persists, contact technical support.</p>
                </div>
                <div className="mb-3">
                  <p className="fw-bold mb-2">How can I report technical issues?</p>
                  <p>Use the contact form on our Contact page or email technical support at support@indusuni.ac.in</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="mb-3" style={{ color: "#4ECDC4" }}>Additional Resources</h4>
                <ul>
                  <li>Student Handbook</li>
                  <li>Academic Calendar</li>
                  <li>Library Resources</li>
                  <li>Study Materials</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="mb-4" style={{ color: "#4ECDC4" }}>Need More Help?</h2>
              <p>If you couldn&apos;t find the answer to your question, feel free to reach out to us:</p>
              <ul className="mb-4">
                <li>Technical Support: support@indusuni.ac.in</li>
                <li>Academic Support: academic@indusuni.ac.in</li>
                <li>General Inquiries: info@indusuni.ac.in</li>
              </ul>
              
              <div className="text-center">
                <Link href="/contact" className="btn btn-info text-white px-4" style={{ backgroundColor: "#4ECDC4" }}>
                  Contact Support Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 