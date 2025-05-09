"use client";
import Link from "next/link";
import Image from "next/image";
import SidebarLinks from "@/app/(components)/(commoncomponents)/(sidebarlinks)/page";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import assignmentsData from "@/egcontent/assignmentscontent";

export default function Year({ params }) {
  const { year, subject } = useParams();
  const { assignment } = params;
  const [assignmentData, setAssignmentData] = useState([]);
  const formattedSubject = subject.toUpperCase();

  useEffect(() => {
    const filteredAssignments = assignmentsData.filter(
      (e) => e.id === assignment
    );
    setAssignmentData(filteredAssignments);
  }, [assignment]);

  return (
    <>
      <div
        className="text-center py-4"
        style={{ background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)" }}
      >
        <h1 className="text-white mb-3">
          SWN | {formattedSubject}-
          {assignment.charAt(0).toUpperCase() + assignment.slice(1)}
        </h1>
      </div>

      <div className="container-fluid">
        <div className="row" style={{ minHeight: "calc(100vh - 160px)" }}>
          {/* Main Content */}
          <div className="col-lg-9 py-4 order-1 order-lg-2">
            <div className="gap-3 mb-4">
              <Link
                href={`/${year}/${subject}/assignments-sol`}
                className="btn btn-info text-white px-4"
                style={{ backgroundColor: "#4ECDC4" }}
              >
                Back
              </Link>
            </div>
            <div className="card shadow">
              <div className="card-body">
                {assignmentData[0]?.questions.map((data, index) => (
                  <div className="mb-5" key={index}>
                    <h4 className="text-info mb-3">Question {index + 1}:</h4>
                    <p className="fw-bold mb-4">{data.text}</p>
                    <div className="text-center">
                      {data.answer && (
                        <>
                          {data.answer.ellipse && (
                            <div className="alert alert-success rounded-3 p-3 mb-4 text-start">
                              <strong>Ellipse:</strong> {data.answer.ellipse}
                            </div>
                          )}
                          {data.answer.parabola && (
                            <div className="alert alert-success rounded-3 p-3 mb-4 text-start">
                              <strong>Parabola:</strong> {data.answer.parabola}
                            </div>
                          )}
                          {data.answer.hyperbola && (
                            <div className="alert alert-success rounded-3 p-3 mb-4 text-start">
                              <strong>Hyperbola:</strong>{" "}
                              {data.answer.hyperbola}
                            </div>
                          )}
                          {data.answer.cycloid && (
                            <div className="alert alert-success rounded-3 p-3 mb-4 text-start">
                              <strong>Cycloid:</strong> {data.answer.cycloid}
                            </div>
                          )}
                          {data.answer.hypocycloid && (
                            <div className="alert alert-success rounded-3 p-3 mb-4 text-start">
                              <strong>Hypocycloid:</strong>{" "}
                              {data.answer.hypocycloid}
                            </div>
                          )}
                          {data.answer.epicycloid && (
                            <div className="alert alert-success rounded-3 p-3 mb-4 text-start">
                              <strong>Epicycloid:</strong>{" "}
                              {data.answer.epicycloid}
                            </div>
                          )}
                          {data.answer.involute && (
                            <div className="alert alert-success rounded-3 p-3 mb-4 text-start">
                              <strong>Involute:</strong> {data.answer.involute}
                            </div>
                          )}
                        </>
                      )}

                      {/* Question Image */}
                      {data.questionImage && (
                        <div className="mb-3">
                          <Image
                            src={data.questionImage}
                            alt={`Diagram${index + 1}`}
                            width={600}
                            height={400}
                            className="img-fluid rounded shadow-sm"
                          />
                        </div>
                      )}

                      {/* Additional Image */}
                      {data.imagePath && (
                        <div className="mt-3">
                          <Image
                            src={data.imagePath}
                            alt={`Question${index + 1} Diagram 1`}
                            width={600}
                            height={400}
                            className="img-fluid rounded shadow-sm mb-3"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <SidebarLinks />
        </div>
      </div>
    </>
  );
}
