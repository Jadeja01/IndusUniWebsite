"use client";

import { signIn } from "next-auth/react";

export default function GoogleLoginButton() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="card shadow-sm border-0"
        style={{ maxWidth: "420px", width: "100%" }}
      >
        <div className="card-body p-4">
          {/* Heading */}
          <h4 className="text-center fw-bold mb-3">Sign in to IUHub</h4>
          <p className="text-center text-muted mb-4">
            Access academic resources with your college Google account
          </p>

          {/* Notes Section */}
          <div className="alert alert-warning small mb-4">
            <h6 className="fw-semibold mb-2">
              <i className="bi bi-info-circle me-2"></i>
              Notes to Remember
            </h6>
            <ul className="mb-0 ps-3">
              <li>
                Use your <strong>college email ID</strong> only
              </li>
              <li>This email will be used for future communication</li>
              <li>Benefits and access are linked to your institute</li>
            </ul>
          </div>

          {/* Unlock Benefits Section */}
          <div className="alert alert-success small mb-4">
            <h6 className="fw-semibold mb-2">
              <i className="bi bi-unlock me-2"></i>
              What Gets Unlocked After Login
            </h6>

            <ul className="mb-0 ps-3">
              <li>
                Access to <strong>~70% of premium academic resources</strong>
              </li>
              <li>
                A <strong>dedicated student profile</strong> linked to your
                college email
              </li>
              <li>
                Personalized recommendations based on your year and subjects
              </li>
              <li>
                Early access to new tools, notes, and exam-focused content
              </li>
            </ul>
          </div>

          {/* Google Login Button */}
          <button
            onClick={() => signIn("google", { callbackUrl: "/profile" })}
            className="btn btn-outline-dark w-100 d-flex align-items-center justify-content-center py-2 fw-medium"
          >
            <i className="bi bi-google me-2"></i>
            Continue with Google
          </button>

          {/* Footer Text */}
          <p className="text-center text-muted small mt-4 mb-0">
            By continuing, you agree to use your institutional email for
            academic purposes.
          </p>
        </div>
      </div>
    </div>
  );
}
