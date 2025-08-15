import React, { useEffect, useState } from "react";
import CandidateBusy from "./candidate-busy/CandidateBusy";
import CandidateNoAnswer from "./candidate-no-answer/CandidateNoAnswer";
import "./AiPreInterview.css";
import CandidateOverAllReview from "./candidate-review/CandidateOverAllReview";
import { getInterviewAnalysisByCandidateId } from "@/services/api/candidateApi";
import InterviewIncomplete from "./interview-incomplete/InterviewIncomplete";
import InterviewRejected from "./interview-rejected/InterviewRejected";

const AiPreInterview = () => {
  const [analysisData, setAnalysisData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const candidate_status = [
    "Busy",
    "No Answer",
    "Not Started",
    "Completed",
    "Dropped",
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getInterviewAnalysisByCandidateId("1215"); // static ID for now
      setAnalysisData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  console.log("Interview Analysis Data:", analysisData);

  return (
    <div className="pre-interview-wrapper">
      {/* Candidate Status */}
      <div className="status-container">
        <h3 className="section-title">Candidate Status</h3>
        <div className="status-buttons">
          {candidate_status.map((status, index) => (
            <button
              key={index}
              className={`status-btn ${status === "Busy" ? "active" : ""}`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Loading state */}
      {loading && <p>Loading candidate analysis...</p>}

      {/* Render based on final_status */}
      {!loading && analysisData?.final_status && (
        <>
          {analysisData.final_status.toLowerCase() === "incomplete" && (
            <InterviewIncomplete data={analysisData}  />
          )}
          {analysisData.final_status.toLowerCase() === "rejected" && (
            <InterviewRejected data={analysisData} />
          )}
          {analysisData.final_status.toLowerCase() === "selected" && (
            <CandidateOverAllReview data={analysisData}/>
          )}
        </>
      )}

      {/* Post Interview Review */}
      <div className="post-review-container">
        <h3 className="section-title">Post Interview Review</h3>
        <textarea
          className="review-textarea"
          placeholder="Write your review here..."
        ></textarea>
        <button className="submit-review-btn">Submit Review</button>
      </div>
    </div>
  );
};

export default AiPreInterview;
