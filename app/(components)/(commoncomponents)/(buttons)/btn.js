
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Buttons({  }) {
    const { year,subject } = useParams();
    
    const buttons = [
  { info: "pyqs", label: "PYQs" },
  { info: "assignments", label: "ASSIGNMENTS" },
  { info: "tutorials", label: "TUTORIALS" },
];
  return (
    <div className="d-flex flex-wrap gap-3 mb-4">
      {buttons.map((btn, index) => (
        <Link
          key={index}
          href={`/${year}/${subject}/${btn.info}`}
          className="btn btn-info text-white px-4"
          style={{ backgroundColor: "#4ECDC4" }}
        >
          {btn.label}
        </Link>
      ))}
      {subject === "eg" && (
        <>
          <Link
            href={`/1st-year/eg/sheets-sol`}
            className="btn btn-info text-white px-4"
            style={{ backgroundColor: "#4ECDC4" }}
          >
            Sheets solution
          </Link>
          <Link
            href={`/1st-year/eg/assignments-sol`}
            className="btn btn-info text-white px-4"
            style={{ backgroundColor: "#4ECDC4" }}
          >
            Assignments solution
          </Link>
        </>
      )}
      {subject === "workshop" && (
        <>
          <Link
            href={`/1st-year/workshop/ws-manual`}
            className="btn btn-info text-white px-4"
            style={{ backgroundColor: "#4ECDC4" }}
          >
            Workshop Manual
          </Link>
        </>
      )}
      {subject === "ec" && (
        <>
          <Link
            href={`/1st-year/workshop/ec-practical`}
            className="btn btn-info text-white px-4"
            style={{ backgroundColor: "#4ECDC4" }}
          >
            Practical Solution
          </Link>
        </>
      )}

    </div>
  );
}
