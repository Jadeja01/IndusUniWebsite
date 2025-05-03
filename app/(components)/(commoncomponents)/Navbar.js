'use client';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import sidebarLinks from './(sidebarlinks)/page';

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top shadow-sm">
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold">StudyWithNotes</Link>
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
              <Link className="nav-link text-uppercase" href="/welcome">
                <span style={{ color: "#4ECDC4" }}>Welcome</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase" href="/about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle text-uppercase" 
                href="#" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Subjects
              </a>
              <ul 
  className="dropdown-menu" 
  style={{
    maxHeight: '300px', 
    overflowY: 'auto'
  }}
>
  {sidebarLinks.map((link, index) => (
    <li key={index}>
      <Link className="dropdown-item" href={link.href}>
        {link.label}
      </Link>
    </li>
  ))}
</ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase" href="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase" href="/help">Help</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
