import React from 'react';
import './InterviewIncompleteStyles.css';


interface InterviewIncompleteProps {
  data: {
    final_status: string;
    reason_for_selection_or_rejection_or_incomplete: string;
    call_status: string;
    relocation_willingness: boolean;
    conversation_duration_seconds: number;
  };
}

const InterviewIncomplete: React.FC<InterviewIncompleteProps> = ({ data }) => {
  return (
    <div>
      <h2 className="ocandidate-review-heading-incomplete">Candidate Call Review</h2>

      <div className="summary-box">
        <div className="summary-item">
          <span className="summary-label">Final Status</span>
          <span className="summary-value">{data.final_status}</span>
        </div>

        <div className="summary-item">
          <span className="summary-label">Call Status</span>
          <span className="summary-value">{data.call_status}</span>
        </div>

        <div className="summary-item">
          <span className="summary-label">Conversation Duration</span>
          <span className="summary-value">
            {Math.floor(data.conversation_duration_seconds / 60)} minutes
          </span>
        </div>

        <div className="summary-item">
          {/* addeda  */}
          <span className="summary-label">Relocation Willingness</span>
          <span className="summary-value">
            {data.relocation_willingness ? "Yes" : "No"}
          </span>
        </div>

        {/* Reason Box for Incomplete */}
        <div className="summary-reason-incomplete">
          <span className="reason-icon-incomplete">⏰</span>
          <div className="reason-content">
            <span className="reason-text-incomplete">
              {data.reason_for_selection_or_rejection_or_incomplete} <br />
              AI has rescheduled the meeting and shared an email with the candidate.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewIncomplete;
