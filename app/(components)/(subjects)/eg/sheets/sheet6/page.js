'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Sheet6() {
  return (
    <>
      <div className="text-center py-4 bg-info bg-gradient">
        <h1 className="text-white mb-3">Indus University | Sheet-6</h1>
        <h4 className="text-white my-2">Engineering Graphics</h4>
        <p className="text-white mb-0">CSE Section</p>
      </div>

      <div className="container-fluid">
        <div className="row min-vh-100">
          {/* Sidebar */}
          <div className="col-lg-3 px-0">
            <div className="card h-100 rounded-0 border-end position-sticky top-0">
              <div className="card-body d-flex flex-column align-items-center">
                <h3 className="card-title text-center mb-4">Course Plan:</h3>
                <div className="d-flex flex-column w-100">
                  <Link href="/es" className="nav-link py-3 border-bottom text-center">
                    Environmental Science
                  </Link>
                  <Link href="/calculus" className="nav-link py-3 border-bottom text-center">
                    Engineering Calculus
                  </Link>
                  <Link href="/ec" className="nav-link py-3 border-bottom text-center">
                    Engineering Chemistry
                  </Link>
                  <Link href="/boe" className="nav-link py-3 border-bottom text-center">
                    Basic of Energy
                  </Link>
                  <Link href="/tcss" className="nav-link py-3 border-bottom text-center">
                    Technical Communication
                  </Link>
                  <Link href="/eg" className="nav-link py-3 border-bottom text-center">
                    Engineering Graphics
                  </Link>
                  <Link href="/iks" className="nav-link py-3 border-bottom text-center">
                    Indian Knowledge System
                  </Link>
                  <Link href="/automobile" className="nav-link py-3 border-bottom text-center">
                    Automobile Engineering
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-9 py-4">
            <div className="card shadow">
              <div className="card-body">
                {/* Question 1 */}
                <div className="mb-5">
                  <h4 className="text-info mb-3">Question 1:</h4>
                  <p className="fw-bold mb-4">
                    By First angle method, Draw (i) Front view (ii) Top View (iii) LHSV
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/s6q1d1.jpg"
                      alt="Question 1's diagram"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm mb-3"
                    />
                    <Image
                      src="/images/s6d1.jpg"
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
                    Draw (i) Front View (ii) Right hand side view (iii) Top View. Use third angle method
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/s6q2d2.jpg"
                      alt="Question 2's diagram"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm mb-3"
                    />
                    <Image
                      src="/images/s6d2.jpg"
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
                    Draw (i) Elevation (ii) Plan (iii) LHSV. Use first Angle Method.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/s6q3d3.jpg"
                      alt="Question 3's diagram"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm mb-3"
                    />
                    <Image
                      src="/images/s6d3.jpg"
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
                    Draw (i) Front view (ii) Top View (iii) LHSV. Use 1st Angle Method.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/s6q4d4.jpg"
                      alt="Question 4's diagram"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm mb-3"
                    />
                    <Image
                      src="/images/s6d4.jpg"
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
                    Draw (i) Front view (ii) Top View (iii) LHSV. Use 1st Angle Method.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/s6q5d5.jpg"
                      alt="Question 5's diagram"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm mb-3"
                    />
                    <Image
                      src="/images/s6d5.jpg"
                      alt="Diagram 5"
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
                    Draw (i) Front view (ii) Top View (iii) RHSV. Use 3rd Angle Method.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/s6q6d6.jpg"
                      alt="Question 6's diagram"
                      width={600}
                      height={400}
                      className="img-fluid rounded shadow-sm mb-3"
                    />
                    <Image
                      src="/images/s6d6.jpg"
                      alt="Diagram 6"
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
        </div>
      </div>
    </>
  );
} 