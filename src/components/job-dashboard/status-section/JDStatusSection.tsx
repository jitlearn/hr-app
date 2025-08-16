import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styels.css";

const API_URL = "https://poc-n8n-app.greenplant-1e0071c3.eastus.azurecontainerapps.io/webhook"; // replace with your API
const N8N_CORS_ALLOW_ORIGIN = "*"; // set according to your config

const JDStatusSection = () => {
  const [stats, setStats] = useState({
    totalApplicants: 0,
    screening: 0,
    interviewRequested: 0,
    rejected: 0,
  });

  // ✅ Fetch all candidates
  const fetchCandidates = async () => {
    try {
      const response = await axios.get(`${API_URL}/all-candidates`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": N8N_CORS_ALLOW_ORIGIN,
        },
      });

      const candidates = response.data || [];

      // ✅ Calculate counts
      const totalApplicants = candidates.length;
      const screening = candidates.filter(
        (c: any) => c.candidate_stage?.toLowerCase() === "screening"
      ).length;
      const interviewRequested = candidates.filter(
        (c: any) =>
          c.candidate_stage?.toLowerCase() === "interview requested"
      ).length;
      const rejected = candidates.filter(
        (c: any) => c.candidate_stage?.toLowerCase() === "rejected"
      ).length;

      setStats({
        totalApplicants,
        screening,
        interviewRequested,
        rejected,
      });
    } catch (error: any) {
      console.error("Error fetching candidates:", error.message);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  return (
    <>
      <div className="stats">
        <div className="stat-card">
          <h3>Total Applicants</h3>
          <p>{stats.totalApplicants}</p>
        </div>
        <div className="stat-card">
          <h3>Screening stage</h3>
          <p>{stats.screening}</p>
        </div>
        <div className="stat-card">
          <h3>Interview Requested</h3>
          <p>{stats.interviewRequested}</p>
        </div>
        <div className="stat-card">
          <h3>Rejected candidates</h3>
          <p>{stats.rejected}</p>
        </div>
      </div>
    </>
  );
};

export default JDStatusSection;
