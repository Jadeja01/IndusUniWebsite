"use client";
import { createContext, useContext, useState, useEffect } from "react";

const SubjectContext = createContext();

export function SubjectProvider({ subject, year, children }) {
  console.log("year(subject provider):", year);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const displayYearMap = {
    "1st-year": "year1",
    "2nd-year": "year2",
    "3rd-year": "year3",
    "4th-year": "year4",
  };

  const displayYear = displayYearMap[year] || year;
  console.log("displayYear(subject provider):", displayYear);

  useEffect(() => {
    if (!subject || !year) return;

    async function fetchData() {
      try {
        const res = await fetch(`/api/files?subject=${subject}&year=${displayYear}`);

        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching subject data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [subject, year]);

  return (
    <SubjectContext.Provider value={{ data, loading }}>
      {children}
    </SubjectContext.Provider>
  );
}

export function useSubject() {
  return useContext(SubjectContext);
}
