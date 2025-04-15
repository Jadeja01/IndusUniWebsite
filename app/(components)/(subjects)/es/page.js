"use client";
import Link from "next/link";
import sidebarLinks from "../../(commoncomponents)/(sidebarlinks)/page";
import buttons from "../../(commoncomponents)/(buttons)/page";

export default function EnvironmentalScience() {
  const courseUnits = [
    {
      title: "Unit-1: Introduction to Environmental Studies",
      topics: [
        {
          heading: "Definition, Scope and Importance:",
          content:
            "Understanding environment and environmental studies, scope and importance of environmental studies, need for public awareness.",
        },
        {
          heading: "Natural Resources:",
          content:
            "Renewable and non-renewable resources, natural resources and associated problems, forest resources, water resources, mineral resources, food resources, energy resources, land resources.",
        },
      ],
    },
    {
      title: "Unit-2: Ecosystems and Biodiversity",
      topics: [
        {
          heading: "Ecosystems:",
          content:
            "Concept of an ecosystem, structure and function of an ecosystem, producers, consumers and decomposers, energy flow in the ecosystem, ecological succession, food chains, food webs and ecological pyramids.",
        },
        {
          heading: "Biodiversity:",
          content:
            "Introduction, types of biodiversity, value of biodiversity, threats to biodiversity, conservation of biodiversity, hotspots of biodiversity, endangered and endemic species of India.",
        },
      ],
    },
    {
      title: "Unit-3: Environmental Pollution",
      topics: [
        {
          heading: "Types of Pollution:",
          content:
            "Air pollution, water pollution, soil pollution, marine pollution, noise pollution, thermal pollution, nuclear hazards.",
        },
        {
          heading: "Pollution Control:",
          content:
            "Solid waste management, disaster management, climate change, global warming, ozone layer depletion, acid rain, prevention and control measures.",
        },
      ],
    },
    {
      title: "Unit-4: Social Issues and Environment",
      topics: [
        {
          heading: "Environmental Ethics and Legislation:",
          content:
            "Environmental ethics, issues and possible solutions, climate change, global warming, wasteland reclamation, environmental protection acts.",
        },
        {
          heading: "Sustainable Development:",
          content:
            "Urban problems related to energy, water conservation, rainwater harvesting, watershed management, resettlement and rehabilitation of people.",
        },
      ],
    },
  ];

  return (
    <>
      <div
        className="text-center py-4"
        style={{ background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)" }}
      >
        <h1 className="text-white mb-3">SWN | Environmental Science</h1>
        <h4 className="text-white my-2">Indus University</h4>
        <p className="text-white mb-0">CSE Section</p>
      </div>

      <div className="container-fluid">
        <div className="row" style={{ minHeight: "calc(100vh - 160px)" }}>
          {/* Main Content */}
          <div className="col-lg-9 py-4 order-1 order-lg-2">
            <h1 className="mb-4">Environmental Science</h1>

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

            {/* Course Units */}
            <div className="mb-4">
              {courseUnits.map((unit, index) => (
                <div key={index} className="card shadow-sm mb-4">
                  <div className="card-body">
                    <h3 className="mb-3" style={{ color: "#4ECDC4" }}>
                      {unit.title}
                    </h3>
                    {unit.topics.map((topic, subIndex) => (
                      <p key={subIndex}>
                        <span className="fw-bold d-block mb-2">
                          {topic.heading}
                        </span>
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
