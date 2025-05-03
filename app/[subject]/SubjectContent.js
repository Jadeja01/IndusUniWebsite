import Link from "next/link";
import { useSubject } from "../(components)/context/SubjectContext";
import buttons from "../(components)/(commoncomponents)/(buttons)/page";
import sidebarLinks from "../(components)/(commoncomponents)/(sidebarlinks)/page";

export default function SubjectContent({ subject }) {
  const { data } = useSubject();
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
            <div className="d-flex flex-wrap gap-3 mb-4">
              {buttons.map((btn, index) => (
                <Link
                  key={index}
                  href={`/${subject}/${btn.href}`}
                  className="btn btn-info text-white px-4"
                  style={{ backgroundColor: "#4ECDC4" }}
                >
                  {btn.label}
                </Link>
              ))}
            </div>

            {/* Syllabus */}
            <div className="mb-4">
              {isLoading ? (
                <div className="text-center py-5">Loading...</div>
              ) : data.files && data.files[0]?.syllabus ? (
                <iframe
                  src={data.files[0].syllabus}
                  style={{ width: "100%", height: "600px", border: "none" }}
                  title="Syllabus PDF"
                />
              ) : (
                <div className="text-center py-5">No syllabus available</div>
              )}
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
