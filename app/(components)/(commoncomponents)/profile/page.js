"use client";

import { getSession, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";
import UserContributions from "./userContributions";
import UserMemories from "./userMemories";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  useEffect(() => {
    getSession();
  }, []);

  const profileCompleted = session?.user?.profileCompleted;
  const userTokens = session?.user?.tokens || 0;
  console.log(userTokens);
  

  let accessPercent = 70;
  if (profileCompleted) accessPercent += 20;
  if (userTokens >= 10) accessPercent += 10;

  const hasFullAccess = accessPercent >= 100;

  if (status === "loading") {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <span className="text-muted">Loading profile...</span>
      </div>
    );
  }

return (
  <div className="min-vh-100 bg-light py-5">
    <div className="container" style={{ maxWidth: "900px" }}>

      {/* PROFILE HEADER */}
      <div className="card border-0 shadow-lg mb-4 overflow-hidden">
        <div className="bg-primary bg-gradient p-4 text-white">
          <div className="d-flex align-items-center justify-content-between">

            <div className="d-flex align-items-center gap-3">
              {/* Avatar */}
              <div
                className="rounded-circle bg-white text-primary fw-bold d-flex align-items-center justify-content-center"
                style={{ width: "60px", height: "60px", fontSize: "22px" }}
              >
                {session?.user?.name?.charAt(0)}
              </div>

              <div>
                <h4 className="fw-bold mb-1">
                  {session?.user?.name}
                </h4>
                <small className="opacity-75">
                  Academic Access Level
                </small>
              </div>
            </div>

            <div className="text-end">
              <div className="fs-4 fw-bold">
                {accessPercent}%
              </div>
              <span
                className={`badge px-3 py-2 ${
                  hasFullAccess ? "bg-success" : "bg-warning text-dark"
                }`}
              >
                {hasFullAccess ? "Full Access" : "Limited Access"}
              </span>
            </div>

          </div>
        </div>

        {/* Progress Section */}
        <div className="p-4">
          <div className="progress mb-2" style={{ height: "10px" }}>
            <div
              className={`progress-bar ${
                hasFullAccess ? "bg-success" : "bg-primary"
              }`}
              style={{ width: `${accessPercent}%` }}
            ></div>
          </div>

          {!hasFullAccess && (
            <div className="small text-muted">
              Earn <strong>{Math.max(0, 10 - userTokens)}</strong> more tokens
              to unlock <strong>100% academic access</strong>.
            </div>
          )}
        </div>
      </div>

      {/* CONTRIBUTIONS */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <h5 className="fw-bold mb-4 text-primary border-bottom pb-2">
            My Contributions
          </h5>
          <UserContributions />
        </div>
      </div>

      {/* MEMORY CONTRIBUTIONS */}
<div className="card border-0 shadow-sm mb-4">
  <div className="card-body">
    <h5 className="fw-bold mb-4 text-primary border-bottom pb-2">
      My Memory Contributions
    </h5>
    <UserMemories />
  </div>
</div>


      {/* ACTION SECTION */}
      <div className="row g-4">

        {!profileCompleted && (
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm hover-card">
              <div className="card-body">
                <h6 className="fw-semibold text-primary mb-2">
                  Complete Your Profile
                </h6>
                <p className="text-muted small mb-3">
                  Add academic details to unlock premium resources and full access.
                </p>
                <Link
                  href="/profile/setProfile"
                  className="btn btn-primary btn-sm px-4"
                >
                  Complete Now
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm hover-card">
            <div className="card-body">
              <h6 className="fw-semibold text-danger mb-2">
                Logout
              </h6>
              <p className="text-muted small mb-3">
                Securely sign out from this device.
              </p>
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="btn btn-outline-danger btn-sm px-4"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Back Home */}
      <div className="text-center mt-5">
        <Link href="/" className="btn btn-outline-secondary btn-sm px-4">
          ← Back to Home
        </Link>
      </div>

    </div>
  </div>
);

}
