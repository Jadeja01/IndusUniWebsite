"use client";
import { createContext, useContext, useState, useEffect } from "react";

const SubjectContext = createContext();

export function SubjectProvider({ subject, children }) {
  
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (!subject) {
        return;
      }
      
      try {
        const res = await fetch(`/api/files?subject=${subject}`);
        
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    
    fetchData();
  }, [subject]);

  return (
    <SubjectContext.Provider value={{ data }}>
      {children}
    </SubjectContext.Provider>
  );
}

export function useSubject() {
  return useContext(SubjectContext);
}