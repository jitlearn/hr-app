"use client";
import React from "react";
import "./CandidateProfileStyles.css";
import AiRecomendation from "@/components/job-analysis/candidate/ai-recomendation/AiRecomendation";
import AboutCandidate from "@/components/job-analysis/candidate/about-candidate/AboutCandidate";
import BreakDown from "@/components/job-analysis/candidate/breakdown/BreakDown";
import { useParams } from "next/navigation";
import { candidatesData } from "@/sample-data/candidateData";
import Link from "next/link";


const CandidateProfile: React.FC = () => {
  const params = useParams();
  const jobId = params?.id;   
  const candidateId = params?.candidateId; 
  const stages = ["Screening", "Interview Requested", "Rejected", "Interviewing", "Offer"];

  const candidates = candidatesData[Number(jobId)] || [];

  const candidate = candidates.find(c => c.id === candidateId);

  const selectedCandidate = candidate || candidates[0] || null;

  return (
    <div className="candidate-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link href={`/job-dashboard/`}>Job Dashboard</Link> / <Link href={`/job-dashboard/dashboard/${jobId}`}>Python Developer</Link> / <span className="active">{candidate?.name}</span>
      </div>

      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-image"></div>
        <div className="profile-info">
          <h2>{candidate?.name}</h2>
          <p className="location">{candidate?.candidateStage}</p>
          <button className="view-resume-btn">View Resume</button>
        </div>
      </div>

      {/* Candidate Stage */}
    <div className="candidate-stage">
      <p className="candidate-stage-title">Candidate Stage</p>
      <div className="stage-buttons">
        {stages.map(stage => (
          <button
            key={stage}
            className={`stage-btn ${candidate?.candidateStage === stage ? "active" : ""}`}
          >
            {stage}
          </button>
        ))}
      </div>
    </div>


      {/* AI Recommendation */}
      <AiRecomendation />
      <AboutCandidate />
      <BreakDown />

          <div className="candidate-assessment">
      {/* Top Section */}
      

      {/* Breakdown Section */}

    </div>

    </div>
  );
};

export default CandidateProfile;
