'use client';
import Link from 'next/link';
import Image from 'next/image';
import sidebarLinks from '@/app/(components)/(commoncomponents)/(sidebarlinks)/page';

export default function Sheet5() {
  return (
    <>
      <div
        className="text-center py-4"
        style={{ background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)" }}
      >
        <h1 className="text-white mb-3">SWN | EG/Sheet5</h1>
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
                    A cone, diameter of base 50 mm and height 60 mm, is resting on H.P. on a point of its periphery of base with the axis making angle of 30° with the H.P. and 45° with V.P. Draw the projection of the cone when apex is away from observer.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/s5d1.jpg"
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
                    A square prism side of base 30 mm and height 45 mm, is resting on H.P. on one of the edges of the base. The edge on which it rests on H.P. makes 45° with V.P. The axis of the prism makes 60° with H.P. Draw projections of the prism when base is nearer to the observer.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/s5d2.jpg"
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
                    A hexagonal pyramid is resting on one of the corner of its base on HP. The longer edge containing that corner is inclined at 45° to the HP. The plan of pyramid axis makes an angle of 30°.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/s5d3.jpg"
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
                    Pentagonal pyramid is having axis length 80 mm and edge of base 30. The pyramid is resting on one of its base edges on HP. Draw the projections when the axis of the pyramid is inclined at 30° to the H.P. and plan of axis of the pyramid makes 45° with the V.P.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/s5d4.jpg"
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
                    A cone, 60 mm base diameter and 80 mm long generator is resting on H.P. with one of the points of its base. Draw projections of cone when apex is 55 mm above from the H.P. and plan of the axis inclined at 45° to the V.P.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/s5d5.jpg"
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
                    A pentagonal prism is resting on one of the corner of its base on HP. The longer edge containing that corner is inclined at 45° to the HP. The plan of prism axis makes an angle of 30° to the VP. Draw the projections of solid. Height of prism is 60 mm and side 30 mm.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/s5d6.jpg"
                      alt="Diagram 6"
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
                    A square pyramid, side of base 50 mm and axis length 60 mm is kept on H.P. on one of its base edges in such a way that its axis makes an angle of 45° with H.P. and plan of axis makes 40° with V.P. Draw the projections of the square pyramid.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/s5d7.jpg"
                      alt="Diagram 7"
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