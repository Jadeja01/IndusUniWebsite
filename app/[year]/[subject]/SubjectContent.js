import Link from "next/link";
import { useSubject } from "@/app/(components)/context/SubjectContext";
import buttons from "@/app/(components)/(commoncomponents)/(buttons)/btn";
import SidebarLinks from "@/app/(components)/(commoncomponents)/(sidebarlinks)/sbl";
import { useParams } from "next/navigation";
import Buttons from "@/app/(components)/(commoncomponents)/(buttons)/btn";

export default function SubjectContent({ subject }) {
  const { data } = useSubject();
  const { year } = useParams();
  console.log("Year(subjectSontent)", year);
  console.log("Context value in component:", data);
  console.log("SyllabusURL", data);

  const isLoading = !data;
  const formattedSubject = subject.toUpperCase();

  return (
    <>
      {/* Header */}
      <div
        className="text-center py-4"
        style={{ background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)" }}
      >
        <h1 className="text-white mb-3">SWN | {formattedSubject}</h1>
      </div>

      <div className="container-fluid">
        <div className="row" style={{ minHeight: "calc(100vh - 160px)" }}>
          {/* Main Content */}
          <div className="col-lg-9 py-4 order-1 order-lg-2">
            {/* Buttons */}
            <Buttons/>

            {/* Syllabus */}
            <div className="d-flex justify-content-center align-items-center mb-4">
              {isLoading ? (
                <div className="text-center py-5">Loading...</div>
              ) : data.files && data.files[0]?.syllabus ? (
                <iframe
                  src={data.files[0].syllabus}
                  style={{ width: "95%", height: "900px", border: "none" }}
                  title="Syllabus PDF"
                />
              ) : (
                <div className="text-center py-5">No syllabus available</div>
              )}
            </div>
          </div>

          {/* Sidebar */}

          <SidebarLinks />
        </div>
      </div>
    </>
  );
}
