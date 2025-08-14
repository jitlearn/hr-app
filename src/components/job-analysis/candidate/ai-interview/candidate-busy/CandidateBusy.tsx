import React from "react";
import "./CandidateBusy.css"; // Importing separate style file

const CandidateBusy = () => {
  const handleScheduleCall = () => {
    console.log("Schedule a call now clicked");
    // You can add API call or modal logic here
  };

  return (
    <div className="busy-wrapper">
      <div className="busy-card">
        <h2 className="busy-title">Candidate is Busy</h2>
        <p className="busy-message">
          The candidate is currently unavailable. An email has been sent regarding the interview.
        </p>
        <button className="schedule-btn" onClick={handleScheduleCall}>
          Schedule Interview Now
        </button>
      </div>
    </div>
  );
};

export default CandidateBusy;
