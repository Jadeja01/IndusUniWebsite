"use client";

import { useRouter } from "next/navigation";

export default function LockedButton({
  children,
  locked,
  lockReason, // "login" | "profile"
}) {
  const router = useRouter();

  const config = {
    login: {
      text: "Login required",
      subtext: "Sign in to continue",
      redirect: "/login",
    },
    profile: {
      text: "Profile incomplete",
      subtext: "Complete profile to unlock",
      redirect: "/profile/setProfile",
    },
  };

  const current = config[lockReason];

  return (
    <div
      className="locked-btn-wrapper"
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "stretch",
      }}
    >
      {/* Base Button */}
      <div
        className={locked ? "opacity-50" : ""}
        style={{
          pointerEvents: locked ? "none" : "auto",
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        {children}
      </div>

      {/* Overlay */}
      {locked && (
        <div
          onClick={() => router.push(current.redirect)}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "0.375rem",
            background: "rgba(13,110,253,0.12)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(13,110,253,0.25)",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0.5rem",
          }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#0d6efd",
            }}
          >
            {current.text}
          </div>
          <div
            style={{
              fontSize: "0.65rem",
              color: "#495057",
              lineHeight: 1.2,
            }}
          >
            {current.subtext}
          </div>
        </div>
      )}
    </div>
  );
}
