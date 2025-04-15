'use client';
import Link from 'next/link';
import Image from 'next/image';
import sidebarLinks from '@/app/(components)/(commoncomponents)/(sidebarlinks)/page';

export default function Sheet1() {
  return (
    <>
      <div
        className="text-center py-4"
        style={{ background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)" }}
      >
        <h1 className="text-white mb-3">SWN | EG/Sheet1</h1>
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
                    Draw an Ellipse having major axis 120mm and minor axis 80mm. 
                    Use concentric circle method.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/s1d1.jpg"
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
                    Draw an Ellipse having major axis 100 mm and minor axis 70 mm.
                    Use Arc of Circle method.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/s1d2.jpg"
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
                    Draw parabola with base 100 mm and axis 50 mm, 70° inclined
                    from base by using parallelogram method.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/s1d3.jpg"
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
                    Draw a curve having eccentricity 3:2, the focus F of which is
                    at a distance of 50mm from the directrix. Draw the curve and Name
                    the curve.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/s1d4.jpg"
                      alt="Diagram 4"
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