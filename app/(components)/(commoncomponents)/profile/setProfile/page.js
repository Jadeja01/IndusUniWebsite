"use client";
import { useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SetProfilePage() {
  const [step, setStep] = useState(1);
  const { data: session } = useSession();
  const router = useRouter();
  const { update } = useSession();

  // Form state
  const [form, setForm] = useState({
    branch: "",
    branchOther: "",
    course: "",
    courseOther: "",
    year: "",
    semester: "",
    goals: [],
    visibility: "private",
  });

  const branches = [
    "Computer Science Engineering",
    "Computer Engineering",
    "Information Technology",
    "Other",
  ];

  const courses = ["BE", "BTech", "Diploma", "Other"];

  const goals = [
    "Exam Preparation",
    "Concept Clarity",
    "Assignments & Practicals",
  ];

  const profileCompletion = step === 1 ? 70 : step === 2 ? 80 : 90;

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSaveProfile = async () => {
    if (!session?.user?.id) return;

    const res = await fetch("/api/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: session.user.id,
        profileData: {
          branch: form.branchOther ? form.branchOther : form.branch,
          course: form.courseOther ? form.courseOther : form.course,
          year: form.year,
          semester: form.semester,
          goals: form.goals,
          visibility: form.visibility,
        },
      }),
    });

    const data = await res.json();

    if (data.success) {
      await update()
      router.push("/profile");
    }
  };

  const isProfileValid =
    form.branch && form.course && form.year && form.semester;

  return (
    <div className="min-vh-100 bg-light py-4">
      <div className="container" style={{ maxWidth: "720px" }}>
        {/* Header */}
        <div className="mb-4">
          <h4 className="fw-bold mb-1">Complete Academic Profile</h4>
          <p className="text-muted small mb-2">
            Completing your profile unlocks up to <strong>90%</strong> of
            content
          </p>

          <div className="progress" style={{ height: "8px" }}>
            <div
              className="progress-bar bg-success"
              style={{ width: `${profileCompletion}%` }}
            ></div>
          </div>

          <div className="small text-muted mt-1">
            Profile Access: <strong>{profileCompletion}%</strong>
          </div>
        </div>

        {/* Step Indicator */}
        <div className="d-flex justify-content-between small text-muted mb-3">
          <span className={step >= 1 ? "fw-semibold text-dark" : ""}>
            1. Academic Info
          </span>
          <span className={step >= 2 ? "fw-semibold text-dark" : ""}>
            2. Preferences
          </span>
          <span className={step === 3 ? "fw-semibold text-dark" : ""}>
            3. Visibility
          </span>
        </div>

        {/* Step Content */}
        <div className="card border-0 shadow-sm">
          <div className="card-body">
            {/* STEP 1 */}
            {step === 1 && (
              <>
                <h6 className="fw-semibold mb-3">Academic Identity</h6>

                <div className="mb-3">
                  <label className="form-label">Branch / Department</label>
                  <select
                    className="form-select"
                    value={form.branch}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        branch: e.target.value,
                        branchOther: "",
                      })
                    }
                  >
                    <option value="">Select branch</option>
                    {branches.map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>

                  {form.branch === "Other" && (
                    <input
                      type="text"
                      className="form-control mt-2"
                      placeholder="Enter your department"
                      value={form.branchOther}
                      onChange={(e) =>
                        setForm({ ...form, branchOther: e.target.value })
                      }
                    />
                  )}
                </div>

                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Course</label>
                    <select
                      className="form-select"
                      value={form.course}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          course: e.target.value,
                          courseOther: "",
                        })
                      }
                    >
                      <option value="">Select course</option>
                      {courses.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>

                    {form.course === "Other" && (
                      <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="Enter your course"
                        value={form.courseOther}
                        onChange={(e) =>
                          setForm({ ...form, courseOther: e.target.value })
                        }
                      />
                    )}
                  </div>

                  <div className="col-md-3">
                    <label className="form-label">Year</label>
                    <select
                      className="form-select"
                      value={form.year}
                      onChange={(e) =>
                        setForm({ ...form, year: e.target.value })
                      }
                    >
                      <option value="">Year</option>
                      <option>1st</option>
                      <option>2nd</option>
                      <option>3rd</option>
                      <option>4th</option>
                    </select>
                  </div>

                  <div className="col-md-3">
                    <label className="form-label">Semester</label>
                    <select
                      className="form-select"
                      value={form.semester}
                      onChange={(e) =>
                        setForm({ ...form, semester: e.target.value })
                      }
                    >
                      <option value="">Sem</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <>
                <h6 className="fw-semibold mb-3">Academic Preferences</h6>

                <div className="mb-3">
                  <label className="form-label">Select Your Goals</label>

                  {goals.map((g) => (
                    <div className="form-check" key={g}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={form.goals.includes(g)}
                        onChange={(e) => {
                          setForm({
                            ...form,
                            goals: e.target.checked
                              ? [...form.goals, g]
                              : form.goals.filter((x) => x !== g),
                          });
                        }}
                      />
                      <label className="form-check-label">{g}</label>
                    </div>
                  ))}
                </div>

                {form.goals.length > 0 && (
                  <div className="mb-2">
                    <small className="text-muted">Selected:</small>
                    <div className="mt-1">
                      {form.goals.map((g) => (
                        <span key={g} className="badge bg-primary me-2">
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="alert alert-info small mb-0">
                  Preferences help us personalize subjects and recommendations
                  for you.
                </div>
              </>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <>
                <h6 className="fw-semibold mb-3">Profile Visibility</h6>

                <select
                  className="form-select mb-3"
                  value={form.visibility}
                  onChange={(e) =>
                    setForm({ ...form, visibility: e.target.value })
                  }
                >
                  <option value="private">Private</option>
                  <option value="students">
                    Visible to Indus University Students
                  </option>
                </select>

                <div className="alert alert-warning small">
                  <strong>Notes:</strong>
                  <ul className="mb-0 mt-1">
                    <li>This is an independent educational platform.</li>
                    <li>Your profile is private by default.</li>
                    <li>No personal data is shared without your consent.</li>
                  </ul>
                </div>

                <div className="alert alert-info small mb-0">
                  Almost done! Review your details and click{" "}
                  <strong>Save Profile</strong> to unlock more content.
                </div>
              </>
            )}

            {/* Navigation */}
            <div className="d-flex justify-content-between mt-4">
              {step > 1 ? (
                <button
                  className="btn btn-outline-secondary"
                  onClick={prevStep}
                >
                  Back
                </button>
              ) : (
                <Link href="/profile" className="btn btn-outline-secondary">
                  Cancel
                </Link>
              )}

              {step < 3 ? (
                <button
                  className="btn btn-primary"
                  onClick={nextStep}
                  disabled={step === 1 && !form.branch}
                >
                  Continue
                </button>
              ) : (
                <button
                  disabled={!isProfileValid}
                  className="btn btn-success"
                  onClick={handleSaveProfile}
                >
                  Save Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// What I learned
// 1. Use case of update() from useSession to refresh session data after profile update.