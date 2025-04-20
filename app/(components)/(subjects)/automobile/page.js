'use client';
import Link from 'next/link';
import buttons from '../../(commoncomponents)/(buttons)/page';
import sidebarLinks from '../../(commoncomponents)/(sidebarlinks)/page';

export default function AutomobileEngineering() {
  return (
    <>
      <div
        className="text-center py-4"
        style={{ background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)" }}
      >
        <h1 className="text-white mb-3">SWN | Automobile Engineering</h1>
      </div>

      <div className="container-fluid">
        <div className="row min-vh-100">
          {/* Main Content  */}
          <div className="col-lg-9 order-1 order-lg-2 py-4">
            <h1 className="mb-4">Automobile Engineering</h1>

            {/* Buttons */}
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
            </div>            

            {/* Cource Units */}
            {[
              {
                title: "Unit-1: Fundamentals of Automobiles",
                topics: [
                  { heading: "Introduction:", content: "Classification of vehicles, basic vehicle systems, automotive terminology, vehicle specifications." },
                  { heading: "Engine Fundamentals:", content: "Internal combustion engines, engine types, working principles, engine components and systems." }
                ]
              },
              {
                title: "Unit-2: Transmission Systems",
                topics: [
                  { heading: "Power Transmission:", content: "Clutch, gearbox, propeller shaft, differential, axles, wheels and tires." },
                  { heading: "Advanced Transmissions:", content: "Automatic transmission, CVT, hybrid powertrains, electric vehicle transmissions." }
                ]
              },
              {
                title: "Unit-3: Chassis and Control Systems",
                topics: [
                  { heading: "Chassis Components:", content: "Frame, suspension system, steering system, braking system, vehicle dynamics." },
                  { heading: "Control Systems:", content: "ABS, traction control, stability control, active suspension systems." }
                ]
              },
              {
                title: "Unit-4: Modern Automotive Technology",
                topics: [
                  { heading: "Alternative Powertrains:", content: "Electric vehicles, hybrid vehicles, fuel cell vehicles, alternative fuels." },
                  { heading: "Advanced Features:", content: "ADAS systems, connected vehicles, autonomous driving technology, vehicle diagnostics." }
                ]
              }
            ].map((unit, index) => (
              <div className="card shadow-sm mb-4" key={index}>
                <div className="card-body">
                  <h3 className="mb-3" style={{ color: "#4ECDC4" }}>{unit.title}</h3>
                  {unit.topics.map((topic, idx) => (
                    <p key={idx}>
                      <span className="fw-bold d-block mb-2">{topic.heading}</span>
                      {topic.content}
                    </p>
                  ))}
                </div>
              </div>
            ))}
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
