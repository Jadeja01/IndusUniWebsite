'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Assignment1() {
  return (
    <>
      <div className="text-center py-4 bg-info bg-gradient">
        <h1 className="text-white mb-3">Indus University | Assignment-1</h1>
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
                  <Link href="/automobile" className="nav-link py-3 border-bottom text-center">
                    Automobile Engineering
                  </Link>
                  <Link href="/calculus" className="nav-link py-3 border-bottom text-center">
                    Engineering Calculus
                  </Link>
                  <Link href="/ec" className="nav-link py-3 border-bottom text-center">
                    Engineering Chemistry
                  </Link>
                  <Link href="/es" className="nav-link py-3 border-bottom text-center">
                    Environmental Science
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
                    Define : (i) Ellipse (ii) Parabola (iii) Hyperbola
                  </p>
                  <ul>
                    <li><strong>Ellipse:</strong> An ellipse is the locus of all those points in a plane such that the sum of their distances from two fixed points in the plane, is constant. The fixed points are known as the foci (singular focus), which are surrounded by the curve. The fixed line is directrix and the constant ratio is eccentricity of ellipse.</li>
                    <li><strong>Parabola:</strong> A parabola is defined as a set of points in a plane which are equidistant from a straight line or directrix and focus. The hyperbola can be defined as the difference of distances between a set of points, which are present in a plane to two fixed points, is a positive constant. A parabola has single focus and directrix.</li>
                    <li><strong>Hyperbola:</strong> A hyperbola is an open curve with two branches, the intersection of a plane with both halves of a double cone.</li>
                  </ul>
                </div>

                {/* Question 2 */}
                <div className="mb-5">
                  <h4 className="text-info mb-3">Question 2:</h4>
                  <p className="fw-bold mb-4">
                    Construct Ellipse to be inscribed in a parallelogram of dimension 100 mm and 70 mm. 75° inclined with horizontal.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/a1d2.jpg"
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
                    Draw an Ellipse having major axis 120 mm and minor axis 80 mm. Use Oblong method.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/a1d3.jpg"
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
                    If Base is 130 mm and axis length 85 mm, draw parabola by rectangle method.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/a1d4.jpg"
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
                    Draw the parabola by Tangent method with base = 120 mm and Axis length =85 mm.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/a1d5.jpg"
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
                    Motor car head lamp parabolic reflector is having an aperture (opening) of 175 mm and a depth of 135 mm. Draw the shape of the reflector.
                  </p>
                  <div className="text-center">
                    <Image
                      src="/images/a1d6.jpg"
                      alt="Diagram 6"
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
        </div>
      </div>
    </>
  );
} 