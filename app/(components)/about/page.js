'use client';
import Link from 'next/link';

export default function About() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5" style={{ color: "#4ECDC4" }}>About Us</h1>
      
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="mb-4" style={{ color: "#4ECDC4" }}>Indus University</h2>
              <p className="mb-4">
                Indus University is a premier educational institution committed to academic excellence and innovation in engineering education. 
                Our mission is to nurture future leaders in technology and engineering through comprehensive education, practical training, 
                and exposure to cutting-edge developments in various fields.
              </p>
              
              <h3 className="mb-3" style={{ color: "#4ECDC4" }}>Our Vision</h3>
              <p className="mb-4">
                To be a globally recognized institution in engineering education, research, and innovation, 
                producing competent professionals who contribute to technological advancement and societal development.
              </p>
              
              <h3 className="mb-3" style={{ color: "#4ECDC4" }}>Learning Platform</h3>
              <p className="mb-4">
                Our digital learning platform provides students with comprehensive access to course materials, 
                assignments, and resources across various engineering disciplines. The platform is designed to 
                enhance the learning experience through:
              </p>
              <ul className="mb-4">
                <li>Interactive course content</li>
                <li>Easy access to study materials</li>
                <li>Regular assessments and feedback</li>
                <li>Integration of traditional and modern learning approaches</li>
              </ul>
              
              <h3 className="mb-3" style={{ color: "#4ECDC4" }}>Departments</h3>
              <p className="mb-4">
                We offer various engineering programs through specialized departments:
              </p>
              <ul>
                <li>Computer Science Engineering</li>
                <li>Mechanical Engineering</li>
                <li>Electrical Engineering</li>
                <li>Civil Engineering</li>
                <li>Chemical Engineering</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/contact" className="btn btn-info text-white px-4 me-3" style={{ backgroundColor: "#4ECDC4" }}>
              Contact Us
            </Link>
            <Link href="/help" className="btn btn-outline-info px-4" style={{ borderColor: "#4ECDC4", color: "#4ECDC4" }}>
              Need Help?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 