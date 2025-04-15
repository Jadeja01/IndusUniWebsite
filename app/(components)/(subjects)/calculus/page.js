'use client';
import Link from 'next/link';
import buttons from '../../(commoncomponents)/(buttons)/page';
import sidebarLinks from '../../(commoncomponents)/(sidebarlinks)/page';

export default function EngineeringCalculus() {

  const courseUnits = [
    {
      title: "Unit-1: Differential Calculus",
      topics: [
        { heading: "Functions and Limits:", content: "Functions, limits, continuity, types of discontinuities, properties of continuous functions." },
        { heading: "Derivatives:", content: "Differentiation rules, chain rule, implicit differentiation, higher-order derivatives, applications in engineering." }
      ],
    },
    {
      title: "Unit-2: Integral Calculus",
      topics: [
        { heading: "Indefinite Integrals:", content: "Integration techniques, substitution method, integration by parts, partial fractions." },
        { heading: "Definite Integrals:", content: "Properties of definite integrals, fundamental theorem of calculus, applications in engineering problems." }
      ],
    },
    {
      title: "Unit-3: Multivariable Calculus",
      topics: [
        { heading: "Partial Derivatives:", content: "Functions of several variables, partial derivatives, chain rule, directional derivatives, gradient." },
        { heading: "Multiple Integrals:", content: "Double and triple integrals, applications in engineering, change of variables, Jacobian transformations." }
      ],
    },
    {
      title: "Unit-4: Vector Calculus",
      topics: [
        { heading: "Vector Fields:", content: "Vector functions, line integrals, surface integrals, Green's theorem, Stokes' theorem." },
        { heading: "Applications:", content: "Applications in electromagnetic theory, fluid dynamics, and other engineering fields." }
      ],
    }
  ];

  return (
    <>
      <div className="text-center py-4" style={{ background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)" }}>
        <h1 className="text-white mb-3">SWN | Engineering Calculus</h1>
        <h4 className="text-white my-2">Indus University</h4>
        <p className="text-white mb-0">CSE Section</p>
      </div>

      <div className="container-fluid">
        <div className="row" style={{ minHeight: 'calc(100vh - 160px)' }}>

          {/* Main Content  */}
          <div className="col-lg-9 py-4 order-1 order-lg-2">
            <h1 className="mb-4">Engineering Calculus</h1>

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-3 mb-4">
              {buttons.map((btn, index) => (
                <Link key={index} href={btn.href} className="btn btn-info text-white px-4" style={{ backgroundColor: "#4ECDC4" }}>
                  {btn.label}
                </Link>
              ))}
            </div>

            {/* Course Units */}
            <div className="mb-4">
              {courseUnits.map((unit, index) => (
                <div key={index} className="card shadow-sm mb-4">
                  <div className="card-body">
                    <h3 className="mb-3" style={{ color: "#4ECDC4" }}>{unit.title}</h3>
                    {unit.topics.map((topic, subIndex) => (
                      <p key={subIndex}>
                        <span className="fw-bold d-block mb-2">{topic.heading}</span>
                        {topic.content}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar  */}
          <div className="col-lg-3 px-0 order-2 order-lg-1">
            <div className="card h-100 rounded-0 border-end" style={{ position: 'sticky', top: '0' }}>
              <div className="card-body d-flex flex-column align-items-center">
                <h3 className="card-title text-center mb-4">Course Plan:</h3>
                <div className="d-flex flex-column w-100">
                  {sidebarLinks.map((link, index) => (
                    <Link key={index} href={link.href} className="nav-link py-3 border-bottom text-center">
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
