"use client";

import { getSession, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";
import UserContributions from "./userContributions";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  useEffect(() => {
    getSession();
  }, []);

  const profileCompleted = session?.user?.profileCompleted;
  const accessPercent = session?.user?.accessPercent || 70;

  if (status === "loading") {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <span className="text-muted">Loading profile...</span>
      </div>
    );
  }

  return (
    <div className="min-vh-100 bg-light py-4">
      <div className="container">
        {/* Header */}
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div>
            <h4 className="fw-bold mb-1">Your Profile</h4>
            <p className="text-muted mb-0">
              Manage your account and unlock academic features
            </p>
          </div>

          <Link href="/" className="btn btn-sm btn-outline-secondary">
            ← Home
          </Link>
        </div>

        {/* Contributions */}
        <div className="container py-4">
          <h2 className="fw-bold mb-4">My Contributions</h2>
          <UserContributions />
        </div>

        {/* Profile Status */}
        <div
          className={`alert ${
            profileCompleted ? "alert-success" : "alert-info"
          } small mb-4`}
        >
          <strong>Profile Status:</strong>{" "}
          {profileCompleted ? "Completed" : "Incomplete"}
          <br />
          {profileCompleted
            ? "Your academic profile is complete."
            : "Complete your profile to unlock full access and visibility."}
        </div>

        {/* Access Progress */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body">
            <h6 className="fw-semibold mb-2">
              <i className="bi bi-bar-chart-steps me-2"></i>
              Content Access Progress
            </h6>

            <div className="small text-muted mb-2">
              Login unlocks <strong>70%</strong> of academic resources.
              Completing your profile unlocks an <strong>additional 20%</strong>
              .
            </div>

            <div className="progress mb-2" style={{ height: "8px" }}>
              <div
                className={`progress-bar ${
                  profileCompleted ? "bg-primary" : "bg-success"
                }`}
                role="progressbar"
                style={{ width: `${accessPercent}%` }}
                aria-valuenow={accessPercent}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>

            <div className="d-flex justify-content-between small text-muted">
              <span>
                Current Access: <strong>{accessPercent}%</strong>
              </span>
              <span>
                Full Access: <strong>90%</strong>
              </span>
            </div>

            {!profileCompleted && (
              <div className="alert alert-warning small mt-3 mb-0">
                Complete your profile to unlock <strong>90%</strong> of all
                available content.
              </div>
            )}
          </div>
        </div>

        {/* Action Cards */}
        <div className="row g-3">
          {/* Set Profile (ONLY if incomplete) */}
          {!profileCompleted && (
            <div className="col-12 col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h6 className="fw-semibold">
                    <i className="bi bi-person-lines-fill me-2"></i>
                    Complete Your Profile
                  </h6>
                  <p className="text-muted small">
                    Add academic details like year, branch, and interests. This
                    helps personalize resources for you.
                  </p>

                  <Link
                    href="/profile/setProfile"
                    className="btn btn-primary btn-sm mt-2"
                  >
                    Set Profile
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Logout */}
          <div className="col-12 col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h6 className="fw-semibold text-danger">
                  <i className="bi bi-box-arrow-right me-2"></i>
                  Logout
                </h6>
                <p className="text-muted small">
                  Securely sign out from your account on this device.
                </p>

                <button
                  onClick={() => signOut({ callbackUrl: "/login" })}
                  className="btn btn-outline-danger btn-sm mt-2"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* What You Unlock */}
        <div className="card border-0 shadow-sm mt-4">
          <div className="card-body">
            <h6 className="fw-semibold mb-2">
              <i className="bi bi-unlock me-2"></i>
              What You Unlock
            </h6>

            <ul className="small text-muted mb-0 ps-3">
              <li>
                Access to <strong>{profileCompleted ? "90%" : "~70%"}</strong>{" "}
                academic resources
              </li>
              <li>Personalized subject recommendations</li>
              <li>
                Dedicated student profile{" "}
                {profileCompleted ? "(enabled)" : "(future visibility)"}
              </li>
              <li>Early access to tools, notes, and updates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
