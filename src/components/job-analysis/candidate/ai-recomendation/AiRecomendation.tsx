"use client";
import React from "react";
import { BadgeCheck, AlertTriangle  } from "lucide-react";
import "./AiRecomendationStyles.css";

// Define props type
interface AiRecommendationProps {
  candidate: {
    candidate_id: string;
    job_description_id: string;
    interview_recommended: string;
    interview_recommentation_reason: string;
    focus_area_1: string;
    focus_area_2: string;
    focus_area_3: string;
    match_level:string;
    overall_score: string;
  };
}

const AiRecommendation: React.FC<AiRecommendationProps> = ({ candidate }) => {
  if (!candidate) {
    return <p>No candidate data available.</p>;
  }

  return (
    <div className="ai-recommendation">
      <div className="ai-header">
        <div className="check-icon">
          {candidate.match_level === "medium" || candidate.match_level === "high" ? (
            <BadgeCheck size={24} color="#4CAF50" />
          ) : (
            <AlertTriangle size={24} color="#F44336" />
          )}
        </div>
        <p className="candidate-stage-title">AI Recommendation</p>
      </div>

      <p className="sub-title">
        Recommendation for Interview:{" "}
        <span
          className={
            ["medium", "high"].includes(candidate.match_level?.toLowerCase() || "")
              ? "yes-text"
              : "no-text"
          }
        >
          {["medium", "high"].includes(candidate.match_level?.toLowerCase() || "")
            ? "Yes"
            : "No"}
        </span>

      </p>

      <p>{candidate.interview_recommentation_reason}</p>

      <p className="sub-title">Suggested Interview Focus Areas:</p>
      <ul className="numbered-list">
        <li>
          <span className="list-number">1.</span> {candidate.focus_area_1}
        </li>
        <li>
          <span className="list-number">2.</span> {candidate.focus_area_2}
        </li>
        <li>
          <span className="list-number">3.</span> {candidate.focus_area_3}
        </li>
      </ul>
    </div>
  );
};

export default AiRecommendation;
