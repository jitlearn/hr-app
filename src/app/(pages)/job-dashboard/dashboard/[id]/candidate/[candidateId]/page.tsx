"use client";
import React, { useEffect, useState } from "react";
import "./CandidateProfileStyles.css";
import AiRecomendation from "@/components/job-analysis/candidate/ai-recomendation/AiRecomendation";
import AboutCandidate from "@/components/job-analysis/candidate/about-candidate/AboutCandidate";
import BreakDown from "@/components/job-analysis/candidate/breakdown/BreakDown";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Candidate, getCandidateById } from "@/services/api/candidateApi";
import profilePic from "@/assets/images/user_img.png";
import Image from "next/image";
import { FiPhone, FiMail } from "react-icons/fi";
import AiPreInterview from "@/components/job-analysis/candidate/ai-interview/AiPreInterview";
import { makeCandidateCall } from "@/services/api/candidateApi";

const CandidateProfile: React.FC = () => {
  const params = useParams();
  const jobId = Array.isArray(params?.id) ? params.id[0] : params?.id ?? "";
  const candidateId = Array.isArray(params?.candidateId)
    ? params.candidateId[0]
    : params?.candidateId ?? "";

  const stages = ["Screening", "Interview Requested", "Rejected", "Interviewing", "Offer"];

  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const [showNotification, setShowNotification] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleAIInterview = async () => {
    if (!candidate) return;

    const matchLevel = candidate.match_level?.toLowerCase();

    if (matchLevel === "low") {
      setShowConfirmModal(true);
    } else {
      try {
        // Call the webhook API
        const response = await makeCandidateCall(candidate.candidate_id);
        console.log("AI Interview webhook response:", response);

        // Proceed with the rest of your AI interview logic
        performAIInterview();
      } catch (error) {
        console.error("Failed to make AI interview call:", error);
        alert("Failed to start AI interview. Please try again.");
      }
    }
  };

  const performAIInterview = () => {
    setShowNotification(true);
    setShowConfirmModal(false); // hide modal if open
    setTimeout(() => setShowNotification(false), 3000);
  };

  // Fetch candidate by ID
  useEffect(() => {
    if (candidateId) {
      setLoading(true);
      getCandidateById(candidateId)
        .then((data) => setCandidate(data))
        .catch((err) => {
          console.error("Error fetching candidate:", err);
          setCandidate(null);
        })
        .finally(() => setLoading(false));
    }
  }, [candidateId]);

  if (loading) return <p>Loading candidate details...</p>;
  if (!candidate) return <p>Candidate not found.</p>;

  return (
    <div className="candidate-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link href={`/job-dashboard/`}>Job Dashboard</Link> /{" "}
        <Link href={`/job-dashboard/dashboard/${jobId}`}>Job Details</Link> /{" "}
        <span className="active">{candidate.candidate_name}</span>
      </div>

      {/* Profile Header */}
      <div className="profile-header-wrapper">
        <div className="profile-header">
          <div className="profile-image">
            <Image
              src={profilePic}
              alt="Profile Image"
              width={65}
              height={65}
              className="rounded-full"
            />
          </div>

          <div className="profile-info">
            <h2>{candidate.candidate_name}</h2>

            {candidate.phone_number?.length > 0 && (
              <p className="contact">
                <span className="icon"><FiPhone /></span>
                <span className="text">{candidate.phone_number}</span>
              </p>
            )}

            {candidate.email?.length > 0 && (
              <p className="contact">
                <span className="icon"><FiMail /></span>
                <span className="text">{candidate.email}</span>
              </p>
            )}
          </div>

          {candidate.match_level !== "low" && !candidate.call_id  && (
            <div className="profile-actions">
              <button onClick={handleAIInterview} className="ai-interview-btn">
                Start AI Pre-Interview
              </button>
            </div>
          )}


        </div>

        {showNotification && (
          <div className="popup-notification">
            Notification sent to the candidate!
          </div>
        )}
      </div>

      {/* Confirmation Modal for Low Match */}
      {showConfirmModal && (
        <div className="custom-modal-overlay">
          <div className="custom-modal">
            <h3>Low Match Candidate</h3>
            <p>Initiate an automated pre-interview call to understand the candidate’s interest, CTC expectations, location preferences, and more before the main interview</p>
            <div className="modal-actions">
              <button className="modal-btn confirm" onClick={performAIInterview}>
                Yes, Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Candidate Stage */}
      <div className="candidate-stage">
        <p className="candidate-stage-title">Candidate Stage</p>
        <div className="stage-buttons">
          {stages.map((stage) => (
            <button
              key={stage}
              className={`stage-btn ${candidate.candidate_stage === stage ? "active" : ""}`}
            >
              {stage}
            </button>
          ))}
        </div>
      </div>

      {/* AI Recommendation, About Candidate, Breakdown */}
      <AiRecomendation candidate={candidate} />
      <AboutCandidate candidate={candidate} />
      <BreakDown candidate={candidate} />

      <div className="candidate-assessment">
        {/* Additional assessment sections can be added here */}
      </div>
      {
        candidate.screening_completed &&(
          <AiPreInterview candidate={candidate} />

        )
      }
    </div>
  );
};

export default CandidateProfile;
