'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Navigation() {
  const sidebarLinks = [
    //Sem1
    { sub: "es", year: "1st-year", label: "Environmental Science" },
    { sub: "calculus", year: "1st-year", label: "Engineering Calculus" },
    { sub: "ec", year: "1st-year", label: "Engineering Chemistry" },
    { sub: "boe", year: "1st-year", label: "Basic of Energy" },
    { sub: "tcss", year: "1st-year", label: "Technical Communication" },
    { sub: "eg", year: "1st-year", label: "Engineering Graphics" },
    { sub: "iks", year: "1st-year", label: "Indian Knowledge System" },
    { sub: "automobile", year: "1st-year", label: "Automobile Engineering" },
    //Sem2
    {
      sub: "dela",
      year: "1st-year",
      label: "Differential Equations & Linear Algrebra",
    },
    { sub: "ep", year: "1st-year", label: "Engineering Physics" },
    {
      sub: "bcps",
      year: "1st-year",
      label: "Business Communication & Presentation Skills",
    },
    { sub: "op3", year: "1st-year", label: "Open Elective 3" },
    { sub: "workshop", year: "1st-year", label: "Workshop Practise" },
    { sub: "bst", year: "1st-year", label: "Bharatiya Science & Technology" },
    { sub: "pps", year: "1st-year", label: "Programming for Problem Solving" },
    //Sem3
    {
      sub: "psnm",
      year: "2nd-year",
      label: "Probability, Statistics & Numerical Methods",
    },
    { sub: "ict", year: "2nd-year", label: "ICT Tools & Technology" },
    { sub: "de", year: "2nd-year", label: "Digital Electronics" },
    {
      sub: "oops",
      year: "2nd-year",
      label: "Object Oriented concept with UML",
    },
    { sub: "dbms", year: "2nd-year", label: "Database Management System" },
    {
      sub: "hvpe",
      year: "2nd-year",
      label: "Humana Values & Professional Ethics",
    },
    //Sem4
    { sub: "dsa", year: "2nd-year", label: "Data Structure and Algorithms" },
    { sub: "os", year: "2nd-year", label: "Operating System" },
    { sub: "mfe", year: "2nd-year", label: "Management for Engineers" },
    { sub: "cjp", year: "2nd-year", label: "Core Java Programming" },
  ];
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'bg-white shadow-sm' : 'bg-gradient-primary'}`} 
         style={{ 
           backgroundColor: scrolled ? '#ffffff' : 'rgba(78, 205, 196, 0.9)',
           padding: scrolled ? '0.5rem 1rem' : '1rem',
           transition: 'all 0.3s ease'
         }}>
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <i className="bi bi-journal-text me-2 fs-4" style={{ color: scrolled ? "#4ECDC4" : "#ffffff" }}></i>
          <span className="fw-bold" style={{ color: scrolled ? "#333" : "#ffffff" }}>StudyWithNotes</span>
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent"
          aria-controls="navbarContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fw-medium text-uppercase" href="/">
                <span style={{ color: scrolled ? "#4ECDC4" : "#ffffff" }}>Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link fw-medium text-uppercase" 
                href="/about"
                style={{ color: scrolled ? "#333" : "#ffffff" }}
              >
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle fw-medium text-uppercase" 
                href="#" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
                style={{ color: scrolled ? "#333" : "#ffffff" }}
              >
                Subjects
              </a>
              <ul 
                className="dropdown-menu shadow" 
                style={{
                  maxHeight: '300px', 
                  overflowY: 'auto',
                  border: '1px solid rgba(0,0,0,0.05)',
                  borderRadius: '8px'
                }}
              >
                {sidebarLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      className="dropdown-item py-2" 
                      href={`/${link.year}/${link.sub}`}
                      style={{ transition: 'all 0.2s ease' }}
                      onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(78, 205, 196, 0.1)'}
                      onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link fw-medium text-uppercase" 
                href="/contact"
                style={{ color: scrolled ? "#333" : "#ffffff" }}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link fw-medium text-uppercase" 
                href="/help"
                style={{ color: scrolled ? "#333" : "#ffffff" }}
              >
                Help
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}