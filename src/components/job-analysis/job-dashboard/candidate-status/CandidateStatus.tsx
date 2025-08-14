"use client";
import React, { useMemo } from "react";
import { Star } from "lucide-react";
import { Candidate } from "@/services/api/candidateApi";

interface CandidateStatusProps {
  candidates: Candidate[];
}

const CandidateStatus: React.FC<CandidateStatusProps> = ({ candidates }) => {
  // Compute match level counts
  const { totalApplicants, highFit, mediumFit, lowFit } = useMemo(() => {
    if (!candidates || candidates.length === 0) {
      return {
        totalApplicants: 0,
        highFit: 0,
        mediumFit: 0,
        lowFit: 0,
      };
    }

    let high = 0;
    let medium = 0;
    let low = 0;

    candidates.forEach((c) => {
      const level = c.match_level?.toLowerCase();
      if (level === "high") high += 1;
      else if (level === "medium") medium += 1;
      else if (level === "low") low += 1;
    });

    return {
      totalApplicants: candidates.length,
      highFit: high,
      mediumFit: medium,
      lowFit: low,
    };
  }, [candidates]);

  return (
    <>
      <div className="stats">
        <div className="stat-card">
          <h3>Total Applicants</h3>
          <p>{totalApplicants}</p>
        </div>
        <div className="stat-card">
          <h3>High Fit Candidates</h3>
          <p>{highFit}</p>
        </div>
        <div className="stat-card">
          <h3>Medium Fit Candidates</h3>
          <p>{mediumFit}</p>
        </div>
        <div className="stat-card">
          <h3>Low Fit Candidates</h3>
          <p>{lowFit}</p>
        </div>
      </div>

      <div className="recommendation-bar">
        <Star size={18} color="black" /> {highFit + mediumFit} recommended for interview
      </div>
    </>
  );
};

export default CandidateStatus;
