"use client";
import React from "react";
import "./BreakDwonStyles.css";

// Define the candidate type
interface Candidate {
  candidate_id: string;
  candidate_name: string;
  location_fit_level?: string;
  location_fit_percentage?: number;
  location_fit_description?: string;
  relevant_experience_level?: string;
  relevant_experience_percentage?: number;
  relevant_experience_description?: string;
  technical_skill_level?: string;
  technical_skill_percentage?: number;
  technical_skill_description?: string;
  education_score_level?: string;
  education_score_percentage?: number;
  education_score_description?: string;
}

interface BreakDownProps {
  candidate: Candidate;
}

const BreakDown: React.FC<BreakDownProps> = ({ candidate }) => {
  const breakdownItems = [
    {
      title: "Location",
      label: "Location Fit Score",
      percentage: candidate.location_fit_percentage || 0,
      description:
        candidate.location_fit_description ||
        "The candidate's location is not ideal for the job requirements, but they are open to relocation.",
    },
    {
      title: "Relevant Experience",
      label: "Relevant Experience Score",
      percentage: candidate.relevant_experience_percentage || 0,
      description:
        candidate.relevant_experience_description ||
        "The candidate has relevant experience in Python and Django, which aligns with the job requirements.",
    },
    {
      title: "Technical Skills",
      label: "Technical Skill Score",
      percentage: candidate.technical_skill_percentage || 0,
      description:
        candidate.technical_skill_description ||
        "The candidate has a solid understanding of Python and Django, but lacks experience with Flask, which is a key requirement.",
    },
    {
      title: "Education",
      label: "Education Score",
      percentage: candidate.education_score_percentage || 0,
      description:
        candidate.education_score_description ||
        "The candidate's educational background may not fully align with the job requirements.",
    },
  ];

  return (
    <div className="breakdown">
      <p className="breakdown-title">Breakdown</p>

      {breakdownItems.map((item) => (
        <div className="breakdown-item" key={item.title}>
          <p className="breakdown-sub-title">{item.title}</p>
          <p className="score-label">{item.label}</p>
          <div className="score-bar">
            <div className="score-fill" style={{ width: `${item.percentage}%` }}></div>
          </div>
          <p className="score-value">{item.percentage}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BreakDown;
