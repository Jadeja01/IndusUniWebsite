"use client";
import Link from "next/link";
import SidebarLinks from "../(components)/(commoncomponents)/(sidebarlinks)/sbl";
import { useEffect, useState } from "react";
import filterSubjects from "../(components)/(commoncomponents)/filterSubjects";
import { useParams } from "next/navigation";

export default function Year() {
  const [filteredSubject, setFilteredSubject] = useState([]);
  const params = useParams();
  const year = params.year;
  console.log(year);

  const [brand, setBrand] = useState("");

  useEffect(() => {
    const filteredSubjects = filterSubjects.filter((e) => e.year === year);
    setFilteredSubject(filteredSubjects);
    setBrand(process.env.NEXT_PUBLIC_WEBSITE_NAME);
  }, [year]);

  return (
    <>
      {/* Header */}
      <div className="text-center py-5 mb-5 bg-white border-bottom">
        <h1 className="fw-bold mb-2">
          {brand} <span className="text-primary">| {year?.toUpperCase()}</span>
        </h1>
        <p className="text-muted mb-0">
          Subjects and resources aligned with university syllabus
        </p>
      </div>

      {/* Content */}
      <div className="container mb-5">
        <div className="row justify-content-between">
          {/* SUBJECT CARDS */}
          <div className="col-lg-8 mb-3 px-0">
            <div className="bg-white rounded border p-3">
              <div className="row g-3">
                {filteredSubject.map((s, index) => (
                  <div key={index} className="col-6 col-sm-4 col-md-3">
                    <Link
                      href={`/${year}/${s.sub}`}
                      className="text-decoration-none"
                    >
                      <div className="card h-100 text-center shadow-sm border subject-card">
                        <div className="card-body d-flex flex-column justify-content-center align-items-center p-3">
                          <i className="bi bi-book fs-3 text-primary mb-2"></i>
                          <span className="fw-semibold text-dark small text-center">
                            {s.label}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <SidebarLinks />
        </div>
      </div>
    </>
  );
}
