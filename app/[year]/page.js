'use client';
import Link from 'next/link';
import SidebarLinks from '../(components)/(commoncomponents)/(sidebarlinks)/page';
import { useEffect, useState } from 'react';
import filterSubjects from '../(components)/(commoncomponents)/filterSubjects';

export default function Year({ params }) {
  const [filteredSubject, setFilteredSubject] = useState([]);
  const { year } = params;
  console.log('Year[year]',year);
  

  useEffect(() => {
    const filteredSubjects = filterSubjects.filter((e) => e.year === year);
    setFilteredSubject(filteredSubjects);
  }, [year]);


  return (
    <>
      {/* Header */}
      <div
        className="text-center py-4 mb-5"
        style={{ backgroundImage: 'linear-gradient(to right, #764ba2, #667eea)' }}
      >
        <h1 className="text-white">SWN | {year?.toUpperCase()}</h1>
      </div>

      {/* Content */}
      <div className="container mb-5">
        <div className="row justify-content-between">
          {/* Subject Cards */}
          <div className="col-lg-8">
            <div className="bg-white rounded p-3">
              <div className="row g-3">
                {filteredSubject.map((s, index) => (
                  <div key={index} className="col-6 col-sm-4 col-md-3">
                    <Link href={`/${year}/${s.sub}`}>
                      <div
                        className="text-white text-center p-3 d-flex flex-column align-items-center justify-content-center shadow"
                        style={{
                          background: 'linear-gradient(135deg, #667eea, #764ba2)',
                          borderRadius: '16px',
                          aspectRatio: '1 / 1',
                          cursor: 'pointer',
                          transition: 'transform 0.2s ease-in-out',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                      >
                        <i className="bi bi-book" style={{ fontSize: '2rem' }}></i>
                        <div className="mt-2">{s.label}</div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          
          <SidebarLinks/>

        </div>
      </div>
      
    </>
  );
}
