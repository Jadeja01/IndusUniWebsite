'use client';
import Link from 'next/link';
import sidebarLinks from '../../(commoncomponents)/(sidebarlinks)/page';
import buttons from '../../(commoncomponents)/(buttons)/page';

export default function BasicOfEnergy() {
  return (
    <>
      <div
        className="text-center py-4"
        style={{ background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)" }}
      >
        <h1 className="text-white mb-3">SWN | Basic of Energy</h1>
        <h4 className="text-white my-2">Indus University</h4>
        <p className="text-white mb-0">CSE Section</p>
      </div>

      <div className="container-fluid">
        <div className="row" style={{ minHeight: "calc(100vh - 160px)" }}>
          {/* Main Content */}
          <div className="col-lg-9 py-4 order-1 order-lg-2">
            <h1 className="mb-4">Basic of Energy</h1>
            
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
            <div className="mb-4">
              {[
                {
                  title: "Unit-1: Introduction to Energy Systems",
                  sections: [
                    { title: "Energy Fundamentals:", content: "Forms of energy, energy conversion, energy sources, energy consumption patterns, energy efficiency." },
                    { title: "Energy Resources:", content: "Classification of energy resources, conventional and non-conventional energy sources, renewable and non-renewable energy." }
                  ]
                },
                {
                  title: "Unit-2: Conventional Energy Sources",
                  sections: [
                    { title: "Fossil Fuels:", content: "Coal, petroleum, natural gas - formation, extraction, processing, applications, environmental impacts." },
                    { title: "Nuclear Energy:", content: "Nuclear fission and fusion, nuclear power plants, nuclear waste management, safety concerns." }
                  ]
                },
                {
                  title: "Unit-3: Renewable Energy Technologies",
                  sections: [
                    { title: "Solar Energy:", content: "Solar radiation, photovoltaic systems, solar thermal systems, applications and limitations." },
                    { title: "Wind and Other Renewables:", content: "Wind energy conversion, hydropower, geothermal energy, biomass energy, tidal and wave energy." }
                  ]
                },
                {
                  title: "Unit-4: Energy Management and Future",
                  sections: [
                    { title: "Energy Conservation:", content: "Energy audit, energy management principles, energy-efficient technologies, energy storage systems." },
                    { title: "Future Energy Systems:", content: "Smart grids, distributed energy systems, hydrogen economy, future trends in energy technology." }
                  ]
                }
              ].map((unit, index) => (
                <div key={index} className="card shadow-sm mb-4">
                  <div className="card-body">
                    <h3 className="mb-3 text-primary-custom">{unit.title}</h3>
                    {unit.sections.map((sec, i) => (
                      <p key={i} className="mb-0">
                        <span className="fw-bold d-block mb-2">{sec.title}</span>
                        {sec.content}
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
