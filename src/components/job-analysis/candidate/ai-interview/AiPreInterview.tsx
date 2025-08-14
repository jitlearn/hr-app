import React from "react";
import CandidateBusy from "./candidate-busy/CandidateBusy";
import CandidateNoAnswer from './candidate-no-answer/CandidateNoAnswer'
import "./AiPreInterview.css";
import CandidateOverAllReview from "./candidate-review/CandidateOverAllReview";

const AiPreInterview = () => {
  const candidate_status = [
    "Busy",
    "No Answer",
    "Not Started",
    "Completed",
    "Dropped"
  ];

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

      {/* Busy Component */}
      <CandidateBusy />
      <CandidateNoAnswer />
      <CandidateOverAllReview />

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
