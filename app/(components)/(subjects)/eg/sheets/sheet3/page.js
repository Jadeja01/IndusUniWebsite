'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Sheet3() {
  return (
    <>
      <div className="text-center py-4 bg-info bg-gradient">
        <h1 className="text-white mb-3">Indus University | Sheet-3</h1>
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
                    Draw the projection of given points on a common reference
                    line. <br />i. A, 25 mm above H.P. and 35 mm in front of V.P.
                    <br />ii. B, 30 mm above H.P. and 40 mm behind V.P. <br />iii. C,
                    20 mm below H.P. and 45 mm behind V.P. <br />iv. D, 35 mm below
                    H.P. and 25 mm in front of V.P. <br />v. E, 45 mm above H.P. and
                    in V.P. <br />vi. F, 30 mm below H.P. and in V.P. <br />vii. G, on
                    H.P. and 35 mm in front of V.P. <br />viii. H, on H.P. and 25 mm
                    behind of V.P.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/s3d1.jpg"
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
                    A line AB, 75 mm long, has its end A 20 mm below H.P. and 25
                    mm behind V.P. The end B is 50 mm below H.P. and 65 mm behind V.P.
                    Draw the projections of line AB and find its inclinations with
                    H.P. and V.P. find apparent inclinations with H.P. and V.P. Also
                    find PL and EL of line AB.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/s3d2.jpg"
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
                    A line PQ has its end P, 15 mm above H.P. and 10 mm in front
                    of V.P. The end Q is 60 mm above H.P. The distance between the end
                    projectors is 55 mm. The line is inclined to H.P. by 25°. Draw the
                    projections and find its inclination with V.P. and true length of
                    line PQ. Also find EL, PL and apparent angles with H.P. and V.P.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/s3d3.jpg"
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
                    A line AB, 65 mm long, has its end A 20 mm above HP and 25 mm
                    in front of VP. The end B is 40 mm above HP and 65 mm in front of
                    VP. Draw the projections of AB and show its inclination with HP
                    and VP, also find apparent inclination with HP and VP and find
                    Elevation length and Plan length of line AB.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/s3d4.jpg"
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
                    A line CD has its end C is 15 mm above H.P. and 10 mm in front
                    of V.P. The end D is 60 mm above H.P. The distance between the end
                    projectors is 50 mm. The line is inclined to H.P. by 25°. Draw the
                    projections and find its inclination with V.P. and true length of
                    line CD. Find EL, PL and apparent inclinations with H.P. and V.P.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/s3d5.jpg"
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
                    A line AB is 80 mm long. It is inclined at an angle of 45° to
                    the HP and 30° to the VP. The end A is 20 mm above HP and 30 mm in
                    front of VP. Draw the projections of the line AB. Find the
                    elevation length and the plan length of the line. Determine the
                    apparent inclinations of the line AB with HP and VP.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/s3d6.jpg"
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