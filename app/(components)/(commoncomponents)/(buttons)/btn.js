"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import LockedButton from "./LockedButtons";

export default function Buttons() {
  const { year, subject } = useParams();
  const { data: session, status } = useSession();

  const isLoggedIn = status === "authenticated";
  const profileCompleted = session?.user?.profileCompleted;

  const commonButtons = [
    { info: "pyqs", label: "PYQs" },
    { info: "assignments", label: "Assignments" },
    { info: "tutorials", label: "Tutorials" },
  ];

  if (status === "loading") return null;

  return (
    <div
      className="d-flex flex-wrap gap-3 mb-4"
      style={{ alignItems: "stretch" }}
    >
      {/* COMMON BUTTONS */}
      {commonButtons.map((btn, index) => (
        <LockedButton key={index} locked={!isLoggedIn} lockReason="login">
          <Link
            href={`/${year}/${subject}/${btn.info}`}
            className="btn btn-outline-primary fw-semibold"
            style={{
              minWidth: "140px",
              padding: "0.5rem 1.5rem",
              whiteSpace: "nowrap",
            }}
          >
            {btn.label}
          </Link>
        </LockedButton>
      ))}

      {/* EG EXTRA */}
      {subject === "eg" && (
        <>
          <LockedButton
            locked={!isLoggedIn || !profileCompleted}
            lockReason={!isLoggedIn ? "login" : "profile"}
          >
            <Link
              href={`/1st-year/eg/sheets-sol`}
              className="btn btn-primary fw-semibold"
              style={{
                minWidth: "160px",
                padding: "0.5rem 1.5rem",
                whiteSpace: "nowrap",
              }}
            >
              Sheets Solution
            </Link>
          </LockedButton>

          <LockedButton
            locked={!isLoggedIn || !profileCompleted}
            lockReason={!isLoggedIn ? "login" : "profile"}
          >
            <Link
              href={`/1st-year/eg/assignments-sol`}
              className="btn btn-primary fw-semibold"
              style={{
                minWidth: "180px",
                padding: "0.5rem 1.5rem",
                whiteSpace: "nowrap",
              }}
            >
              Assignments Solution
            </Link>
          </LockedButton>
        </>
      )}

      {/* WORKSHOP EXTRA */}
      {subject === "workshop" && (
        <LockedButton
          locked={!isLoggedIn || !profileCompleted}
          lockReason={!isLoggedIn ? "login" : "profile"}
        >
          <Link
            href={`/1st-year/workshop/ws-manual`}
            className="btn btn-primary fw-semibold"
            style={{
              minWidth: "170px",
              minHeight: "42px",
              padding: "0.5rem 1.5rem",
              whiteSpace: "nowrap",
            }}
          >
            Workshop Manual
          </Link>
        </LockedButton>
      )}
    </div>
  );
}
