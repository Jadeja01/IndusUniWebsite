'use client';
import Link from 'next/link';
import Image from 'next/image';
import buttons from '../../(commoncomponents)/(buttons)/page';
import sidebarLinks from '../../(commoncomponents)/(sidebarlinks)/page';

export default function BCPS() {
  return (
    <>
      <div
        className="text-center py-4"
        style={{ background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)" }}
      >
        <h1 className="text-white mb-3">SWN | BCPS</h1>
      </div>

      <div className="container-fluid">
        <div className="row min-vh-100">
          {/* Main Content */}
          <div className="col-lg-9 order-1 order-lg-2 py-4">
            <h1 className="mb-4">Business Communication & Presentation Skills</h1>

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

            <div className="mb-4">
              {/* Course Units */}
              {[
                {
                  title: "Unit-1: Water Technology",
                  topics: [
                    { heading: "Water Quality Parameters:", content: "Hardness, alkalinity, pH, dissolved oxygen, BOD, COD, water quality standards." },
                    { heading: "Water Treatment:", content: "Purification methods, softening processes, desalination, industrial water treatment." }
                  ]
                },
                {
                  title: "Unit-2: Electrochemistry and Corrosion",
                  topics: [
                    { heading: "Electrochemical Cells:", content: "Galvanic cells, electrode potentials, Nernst equation, batteries and fuel cells." },
                    { heading: "Corrosion Science:", content: "Types of corrosion, factors affecting corrosion, protection methods, cathodic protection." }
                  ]
                },
                {
                  title: "Unit-3: Engineering Materials",
                  topics: [
                    { heading: "Polymers:", content: "Classification, polymerization, molecular weight, properties and applications of polymers." },
                    { heading: "Advanced Materials:", content: "Composites, ceramics, nanomaterials, smart materials, conducting polymers." }
                  ]
                },
                {
                  title: "Unit-4: Fuels and Combustion",
                  topics: [
                    { heading: "Fuels:", content: "Classification, calorific value, coal, petroleum, natural gas, alternative fuels." },
                    { heading: "Combustion Process:", content: "Combustion calculations, flue gas analysis, air pollution control methods." }
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
