import Link from "next/link";

export default function SidebarLinks() {
  const sidebarLinks = [
    // 1st Year
    { sub: "es", year: "1st-year", label: "Environmental Science" },
    { sub: "calculus", year: "1st-year", label: "Engineering Calculus" },
    { sub: "ec", year: "1st-year", label: "Engineering Chemistry" },
    { sub: "boe", year: "1st-year", label: "Basic of Energy" },
    { sub: "tcss", year: "1st-year", label: "Technical Communication" },
    { sub: "eg", year: "1st-year", label: "Engineering Graphics" },
    { sub: "iks", year: "1st-year", label: "Indian Knowledge System" },
    { sub: "automobile", year: "1st-year", label: "Automobile Engineering" },
    { sub: "dela", year: "1st-year", label: "Differential Equations & Linear Algebra" },
    { sub: "ep", year: "1st-year", label: "Engineering Physics" },
    { sub: "bcps", year: "1st-year", label: "Business Communication & Presentation Skills" },
    { sub: "workshop", year: "1st-year", label: "Workshop Practice" },
    { sub: "bst", year: "1st-year", label: "Bharatiya Science & Technology" },
    { sub: "pps", year: "1st-year", label: "Programming for Problem Solving" },
    { sub: "acdc", year: "1st-year", label: "Introduction to AC-DC Machine" },
    { sub: "bac", year: "1st-year", label: "Basics of AC Circuits" },

    // 2nd Year
    { sub: "psnm", year: "2nd-year", label: "Probability, Statistics & Numerical Methods" },
    { sub: "ict", year: "2nd-year", label: "ICT Tools & Technology" },
    { sub: "de", year: "2nd-year", label: "Digital Electronics" },
    { sub: "oocu", year: "2nd-year", label: "Object Oriented Concept with UML" },
    { sub: "dbms", year: "2nd-year", label: "Database Management System" },
    { sub: "hvpe", year: "2nd-year", label: "Human Values & Professional Ethics" },
    { sub: "dsa", year: "2nd-year", label: "Data Structure and Algorithms" },
    { sub: "os", year: "2nd-year", label: "Operating System" },
    { sub: "mfe", year: "2nd-year", label: "Management for Engineers" },
    { sub: "cjp", year: "2nd-year", label: "Core Java Programming" },
    { sub: "coa", year: "2nd-year", label: "Computer Organization and Architecture" },
  ];

  const groupedLinks = sidebarLinks.reduce((acc, item) => {
    acc[item.year] = acc[item.year] || [];
    acc[item.year].push(item);
    return acc;
  }, {});

  return (
    <div className="col-lg-3 px-0 order-2 order-lg-1">
      <div
        className="card h-100 rounded-0 border-end"
        style={{ position: "sticky", top: "72px" }}
      >
        <div className="card-body p-0">
          {/* Header */}
          <div className="border-bottom px-3 py-3 text-center">
            <h6 className="fw-bold mb-0">Course Plan</h6>
            <small className="text-muted">
              Subjects by academic year
            </small>
          </div>

          {/* Links */}
          <div className="list-group list-group-flush">
            {Object.entries(groupedLinks).map(([year, links]) => (
              <div key={year}>
                {/* Year Label */}
                <div className="px-3 py-2 bg-light text-secondary fw-semibold small">
                  {year === "1st-year" ? "First Year" : "Second Year"}
                </div>

                {/* Subjects */}
                {links.map((link, index) => (
                  <Link
                    key={index}
                    href={`/${link.year}/${link.sub}`}
                    className="list-group-item list-group-item-action border-0 border-bottom py-3"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
