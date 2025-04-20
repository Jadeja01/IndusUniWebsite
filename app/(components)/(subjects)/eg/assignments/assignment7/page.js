'use client';
import Link from 'next/link';
import Image from 'next/image';
import sidebarLinks from '@/app/(components)/(commoncomponents)/(sidebarlinks)/page';

export default function Assignment7() {
  return (
    <>
      <div
        className="text-center py-4"
        style={{ background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)" }}
      >
        <h1 className="text-white mb-3">SWN | EG/Assignment7</h1>
      </div>

      <div className="container-fluid">
        <div className="row" style={{ minHeight: "calc(100vh - 160px)" }}>
          {/* Main Content */}
          <div className="col-lg-9 py-4 order-1 order-lg-2">
            <div className="card shadow">
              <div className="card-body">
                {/* Question 1 */}
                <div className="mb-5">
                  <h4 className="text-info mb-3">Question 1:</h4>
                  <p className="fw-bold mb-4">
                    By first angle method, draw (i) front view (ii) top view (iii) full sectional RHSV.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/a7q1d1.jpg"
                      alt="Question1's diagram"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm mb-3"
                    />
                    <Image
                      src="/images/a7d1.jpg"
                      alt="diagram1"
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
                    Draw (i) Full sectional FV (ii)TV (iii) LHSV, by first angle method.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/a7q2d2.jpg"
                      alt="Question2's diagram"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm mb-3"
                    />
                    <Image
                      src="/images/a7d2.jpg"
                      alt="diagram2"
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
                    By third angle method, draw (i) full sectional front view (ii) top view (iii) LHSV.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/a7q3d3.jpg"
                      alt="Question3's diagram"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm mb-3"
                    />
                    <Image
                      src="/images/a7d3.jpg"
                      alt="diagram3"
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
                    By third angle method, draw (i) full sectional front view (ii) top view (iii) RHSV.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/a7q4d4.jpg"
                      alt="Question4's diagram"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm mb-3"
                    />
                    <Image
                      src="/images/a7d4.jpg"
                      alt="diagram4"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm"
                    />
                  </div>
                </div>
                <div className="text-center mt-5">
                  <Link href="/eg/assignments" className="btn btn-info text-white">
                    Back to Assignments
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