'use client';
import Link from 'next/link';
import Image from 'next/image';
import sidebarLinks from '@/app/(components)/(commoncomponents)/(sidebarlinks)/page';

export default function Assignment6() {
  return (
    <>
      <div
        className="text-center py-4"
        style={{ background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)" }}
      >
        <h1 className="text-white mb-3">SWN | EG/Assignment6</h1>
        <h4 className="text-white my-2">Indus University</h4>
        <p className="text-white mb-0">CSE Section</p>
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
                    Draw (i) Elevation (ii) Plan (iii) RHSV by First angle method
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/a6q1d1.jpg"
                      alt="Question1's diagram"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm mb-3"
                    />
                    <Image
                      src="/images/a6d1.jpg"
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
                    Draw (i) Front View (ii) Top view (iii) LHSV by 3rd angle method
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/a6q2d2.jpg"
                      alt="Question2's diagram"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm mb-3"
                    />
                    <Image
                      src="/images/a6d2.jpg"
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
                    Draw (i) Front view (ii) TV (iii) LHSV by first angle method.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/a6q3d3.jpg"
                      alt="Question3's diagram"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm mb-3"
                    />
                    <Image
                      src="/images/a6d3.jpg"
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
                    Draw (i) Full sectional Elevation (ii) Plan (iii) LHSV by Third angle method.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/a6q4d4.jpg"
                      alt="Question4's diagram"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm mb-3"
                    />
                    <Image
                      src="/images/a6d4.jpg"
                      alt="diagram4"
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
                    Draw (i) Elevation (ii) Plan (iii) RHSV by First angle method.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/a6q5d5.jpg"
                      alt="Question5's diagram"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm mb-3"
                    />
                    <Image
                      src="/images/a6d5.jpg"
                      alt="diagram5"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm"
                    />
                  </div>
                </div>

                {/* Question 6 */}
                <div className="mb-5">
                  <h4 className="text-info mb-3">Question 6:</h4>
                  <p className="fw-bold mb-4">
                    Draw (i) Front View (ii) Top view (iii) LHSV by first angle method.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/a6q6d6.jpg"
                      alt="Question6's diagram"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm mb-3"
                    />
                    <Image
                      src="/images/a6d6.jpg"
                      alt="diagram6"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm"
                    />
                  </div>
                </div>

                {/* Question 7 */}
                <div className="mb-5">
                  <h4 className="text-info mb-3">Question 7:</h4>
                  <p className="fw-bold mb-4">
                    Draw (i) Elevation (ii) Plan (iii) RHSV by First angle method.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/a6q7d7.jpg"
                      alt="Question7's diagram"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm mb-3"
                    />
                    <Image
                      src="/images/a6d7.jpg"
                      alt="diagram7"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm"
                    />
                  </div>
                </div>

                {/* Question 8 */}
                <div className="mb-5">
                  <h4 className="text-info mb-3">Question 8:</h4>
                  <p className="fw-bold mb-4">
                    Draw (i) Front view (ii) Top view (iii) LHSV, by first angle method
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/a6q8d8.jpg"
                      alt="Question8's diagram"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm mb-3"
                    />
                    <Image
                      src="/images/a6d8.jpg"
                      alt="diagram8"
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