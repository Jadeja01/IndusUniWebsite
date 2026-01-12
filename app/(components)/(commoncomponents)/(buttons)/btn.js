import Link from "next/link";
import { useParams } from "next/navigation";

export default function Buttons() {
  const { year, subject } = useParams();

  const buttons = [
    { info: "pyqs", label: "PYQs" },
    { info: "assignments", label: "Assignments" },
    { info: "tutorials", label: "Tutorials" },
  ];

  return (
    <div className="d-flex flex-wrap gap-3 mb-4">
      {/* Common buttons */}
      {buttons.map((btn, index) => (
        <Link
          key={index}
          href={`/${year}/${subject}/${btn.info}`}
          className="btn btn-outline-primary px-4 fw-semibold"
        >
          {btn.label}
        </Link>
      ))}

      {/* EG specific */}
      {subject === "eg" && (
        <>
          <Link
            href={`/1st-year/eg/sheets-sol`}
            className="btn btn-primary px-4 fw-semibold"
          >
            Sheets Solution
          </Link>
          <Link
            href={`/1st-year/eg/assignments-sol`}
            className="btn btn-primary px-4 fw-semibold"
          >
            Assignments Solution
          </Link>
        </>
      )}

      {/* Workshop specific */}
      {subject === "workshop" && (
        <Link
          href={`/1st-year/workshop/ws-manual`}
          className="btn btn-primary px-4 fw-semibold"
        >
          Workshop Manual
        </Link>
      )}

      {/* Engineering Chemistry specific */}
      {/* {subject === "ec" && (
        <Link
          href={`/1st-year/workshop/ec-practical`}
          className="btn btn-primary px-4 fw-semibold"
        >
          Practical Solutions
        </Link>
      )} */}
    </div>
  );
}
