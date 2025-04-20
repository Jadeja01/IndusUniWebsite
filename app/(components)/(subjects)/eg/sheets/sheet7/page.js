'use client';
import Link from 'next/link';
import Image from 'next/image';
import sidebarLinks from '@/app/(components)/(commoncomponents)/(sidebarlinks)/page';

export default function Sheet7() {
  return (
    <>
      <div
        className="text-center py-4"
        style={{ background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)" }}
      >
        <h1 className="text-white mb-3">SWN | EG/Sheet7</h1>
      </div>

      <div className="container-fluid">
        <div className="row" style={{ minHeight: "calc(100vh - 160px)" }}>
          

          {/* Main Content */}
          <div className="col-lg-9 py-4">
            <div className="card shadow">
              <div className="card-body">
                {/* Question 1 */}
                <div className="mb-5">
                  <h4 className="text-info mb-3">Question 1:</h4>
                  <p className="fw-bold mb-4">
                    Draw (i) Elevation (ii) Full sectional LHSV, by First angle method.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/s7q1d1.jpg"
                      alt="Question 1's diagram"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm mb-3"
                    />
                    <Image
                      src="/images/s7d1.jpg"
                      alt="Diagram 1"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm"
                    />
                  </div>
                </div>

                {/* Question 2 */}
                <div className="mb-5">
                  <h4 className="text-info mb-3">Question 2:</h4>
                  <p className="fw-bold mb-4">
                    Draw (i) Front view (ii) Top view (iii) Full sectional RHSV. Use 3rd angle method
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/s7q2d2.jpg"
                      alt="Question 2's diagram"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm mb-3"
                    />
                    <Image
                      src="/images/s7d2.jpg"
                      alt="Diagram 2"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm"
                    />
                  </div>
                </div>

                {/* Question 3 */}
                <div className="mb-5">
                  <h4 className="text-info mb-3">Question 3:</h4>
                  <p className="fw-bold mb-4">
                    Draw (i) Full Sectional Front view (ii) Top view (iii) LHSV. Use 1st angle method
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/s7q3d3.jpg"
                      alt="Question 3's diagram"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm mb-3"
                    />
                    <Image
                      src="/images/s7d3.jpg"
                      alt="Diagram 3"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm"
                    />
                  </div>
                </div>

                {/* Question 4 */}
                <div className="mb-5">
                  <h4 className="text-info mb-3">Question 4:</h4>
                  <p className="fw-bold mb-4">
                    Draw (i) Full sectional Elevation (ii) Plan (iii) RHSV , by third angle method.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/s7q4d4.jpg"
                      alt="Question 4's diagram"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm mb-3"
                    />
                    <Image
                      src="/images/s7d4.jpg"
                      alt="Diagram 4"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm"
                    />
                  </div>
                </div>

                {/* Question 5 */}
                <div className="mb-5">
                  <h4 className="text-info mb-3">Question 5:</h4>
                  <p className="fw-bold mb-4">
                    By third angle method, draw (i) Elevation (ii) Full sectional LHSV (iii) Plan
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/s7q5d5.jpg"
                      alt="Question 5's diagram"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm mb-3"
                    />
                    <Image
                      src="/images/s7d5.jpg"
                      alt="Diagram 5"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm"
                    />
                  </div>
                </div>

                <div className="text-center mt-5">
                  <Link href="/eg/sheets" className="btn btn-info text-white">
                    Back to Sheets
                  </Link>
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
    </>
  );
} 