'use client';
import Link from 'next/link';
import sidebarLinks from '../../(commoncomponents)/(sidebarlinks)/page';
import buttons from '../../(commoncomponents)/(buttons)/page';

export default function EngineeringGraphics() {
  return (
    <>
      <div
        className="text-center py-4"
        style={{ background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)" }}
      >
        <h1 className="text-white mb-3">SWN | Engineering Graphics</h1>
        <h4 className="text-white my-2">Indus University</h4>
        <p className="text-white mb-0">CSE Section</p>
      </div>

      <div className="container-fluid">
        <div className="row" style={{ minHeight: 'calc(100vh - 160px)' }}>
      
          {/* Main Content */}
          <div className="col-lg-9 py-4 order-1 order-lg-2">
            <h1 className="mb-4">Engineering graphics</h1>
            
            {/*  Buttons */}
            <div className="d-flex flex-wrap gap-3 mb-4">
              {buttons.map((btn, index) => (
                <Link
                  key={index}
                  href={btn.href}
                  className="btn btn-info text-white px-4"
                  style={{ backgroundColor: "#4ECDC4" }}
                >
                  {btn.label}
                </Link>
              ))}
              <Link 
                href="/eg/sheets" 
                className="btn btn-info text-white px-4"
                style={{ backgroundColor: "#4ECDC4" }}
              >
                SHEET SOLUTION
              </Link>
              <Link 
                href="/eg/assignments" 
                className="btn btn-info text-white px-4"
                style={{ backgroundColor: "#4ECDC4" }}
              >
                ASSIGNMENT SOLUTION
              </Link>
            </div>
{/* Cource Units */}
            <div className="mb-4">
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h3 className="mb-3" style={{ color: "#4ECDC4" }}>unit-1</h3>
                  <p>
                    <span className="fw-bold d-block mb-2">Introduction to Engineering Graphics:</span>
                    Principles of Engineering Graphics and their Significance – Drawing Instruments and their Use – Conventions in Drawing – Lettering – BIS Conventions- Dimensioning systems – polygons-types of lines
                  </p>
                  <p>
                    <span className="fw-bold d-block mb-2">Engineering Curves</span>
                    Classification and application of Engineering Curves, Construction of different methods of Ellipse, parabola and Hyperbola, construction of Conics, Cycloid Curves Cycloid, Hypocycloid, Epicycloids, Involutes and Spirals.
                  </p>
                  <p className="mb-0">
                    <span className="fw-bold d-block mb-2">Projections of Points and Lines</span>
                    Introduction to principal planes of projections, Projections of the points located in same quadrant and different quadrants, Projections of line with its inclination to one reference plane and with two reference planes. True length and inclination with the reference planes.
                  </p>
                </div>
              </div>

              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h3 className="mb-3" style={{ color: "#4ECDC4" }}>unit-2</h3>
                  <p>
                    <span className="fw-bold d-block mb-2">Projections of Planes</span>
                    Projections of planes (polygons, circle, and ellipse) with its inclination to one reference plane and with two reference planes, Concept of auxiliary plane method for projections of the plane.
                  </p>
                  <p className="mb-0">
                    <span className="fw-bold d-block mb-2">Projections of Solids</span>
                    Classification of solids. Projections of solids (Cylinder, Cone, Pyramid, Prism) along with frustum of cone and pyramid with their inclinations to one reference plane and with two reference planes.
                  </p>
                </div>
              </div>

              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h3 className="mb-3" style={{ color: "#4ECDC4" }}>unit-3</h3>
                  <p className="mb-0">
                    <span className="fw-bold d-block mb-2">Orthographic and Sectional Orthographic Projections:</span>
                    Fundamental of projection along with classification, Projections from the pictorial view of the object on the principal planes for view from front, top and sides using first angle projection method and third angle projection method, introduction of section of objects, full sectional view.
                  </p>
                </div>
              </div>

              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h3 className="mb-3" style={{ color: "#4ECDC4" }}>unit-4</h3>
                  <p className="mb-0">
                    <span className="fw-bold d-block mb-2">Isometric Projections:</span>
                    Isometric Scale, Conversion of orthographic views into isometric projection, isometric view or drawing.
                  </p>
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