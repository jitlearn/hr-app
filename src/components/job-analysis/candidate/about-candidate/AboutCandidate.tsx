"use client";
import React from "react";
import "./AboutCandidateStyles.css";

// Define the candidate type
interface AssessmentItem {
  level: string;
  description?: string;
  percentage?: number;
}

interface Candidate {
  candidate_id: string;
  candidate_name: string;
  about_user?: string;
  job_match_issues?: string;
  location_fit_level?: string;
  location_fit_description?: string;
  relevant_experience_level?: string;
  relevant_experience_description?: string;
  technical_skill_level?: string;
  technical_skill_description?: string;
  education_score_level?: string;
  education_score_description?: string;
}

interface AboutCandidateProps {
  candidate: Candidate;
}

const AboutCandidate: React.FC<AboutCandidateProps> = ({ candidate }) => {
  // Map assessment fields to labels
  const assessmentCriteria = [
    { key: "locationFit", label: "Location Fit", level: candidate.location_fit_level || "Low" },
    { key: "relevantExperience", label: "Relevant Experience", level: candidate.relevant_experience_level || "Low" },
    { key: "technicalSkillScore", label: "Technical Skill", level: candidate.technical_skill_level || "Low" },
    { key: "educationScore", label: "Education Requirement", level: candidate.education_score_level || "Low" },
  ];

  return (
    <div className="about-candidate">
      <h2 className="section-title">Candidate Assessment</h2>

      <div className="assessment-header">
        {/* Assessment Badges */}
        <div className="assessment-left">
          <ul className="criteria-list">
            {assessmentCriteria.map(({ key, label, level }) => {
              const levelClass = level.toLowerCase();
              return (
                <li key={key}>
                  <span className="criteria-text">{label}</span>
                  <span className={`badge ${levelClass}`}>{level}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* About Section */}
        <div className="assessment-about">
          <p className="sub-headding">About</p>
          <p>{candidate.about_user || "No information available."}</p>
        </div>

        {/* Job Match Issues */}
        <div className="assessment-issues">
          <p className="sub-headding">Job Match Issues</p>
          <p>{candidate.job_match_issues || "No issues reported."}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCandidate;
