import React from "react";
import "./CandidateNoAnswer.css";

const CandidateNoAnswer = () => {
  const handleScheduleCall = () => {
    console.log("Schedule a call now clicked for No Answer");
    // API or modal logic goes here
  };

  return (
    <div className="no-answer-wrapper">
      <div className="no-answer-card">
        <h2 className="no-answer-title">No Answer</h2>
        <p className="no-answer-message">
          The candidate did not answer the call. An email has been sent regarding the interview.
        </p>
        <button className="schedule-btn" onClick={handleScheduleCall}>
          Schedule a Call Now
        </button>
      </div>
    </div>
  );
};

export default CandidateNoAnswer;
