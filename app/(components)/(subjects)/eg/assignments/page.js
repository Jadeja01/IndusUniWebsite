'use client';
import Link from 'next/link';
import Image from 'next/image';
import sidebarLinks from '@/app/(components)/(commoncomponents)/(sidebarlinks)/page';

export default function EngineeringGraphicsAssignments() {
  return (
    <>
      <div
        className="text-center py-4"
        style={{ background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)" }}
      >
        <h1 className="text-white mb-3">SWN | Engineering Graphics Assignments</h1>
        <h4 className="text-white my-2">Indus University</h4>
        <p className="text-white mb-0">CSE Section</p>
      </div>

      <div className="container-fluid">
        <div className="row" style={{ minHeight: "calc(100vh - 160px)" }}>
          
          {/* Main Content */}
          <div className="col-lg-9 py-4 order-1 order-lg-2">
            <div className="row g-4">
              {/* Assignment Cards */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((assignmentNumber) => (
                <div key={assignmentNumber} className="col-md-4 col-sm-6">
                  <div className="card shadow-sm h-100">
                    <div className="card-body text-center">
                      <Link href={`/eg/assignments/assignment${assignmentNumber}`} className="text-decoration-none">
                        <Image
                          src={`/images/assignment${assignmentNumber}.png`}
                          alt={`Assignment ${assignmentNumber}`}
                          width={200}
                          height={200}
                          className="img-fluid mb-3"
                        />
                        <h5 className="card-title text-info">Assignment {assignmentNumber}</h5>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
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
    </>
  );
} 