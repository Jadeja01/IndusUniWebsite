"use client";
import { createContext, useContext, useState, useEffect } from "react";

const SubjectContext = createContext();

export function SubjectProvider({ subject, children }) {
  console.log('Subject(SubjectProvider)',subject);
  
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (!subject) {
        console.log("No subject provided");
        return;
      }
      
      try {
        console.log("Fetching data for subject:", subject);
        const res = await fetch(`/api/files?subject=${subject}`);
        console.log('res:',res);
        
        const result = await res.json();
        console.log("API result:", result);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        console.log("Fetch completed");
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