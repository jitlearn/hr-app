import React from 'react';
import './InterviewRejectedStyles.css'

interface InterviewRejectedProps {
  data: {
    final_status: string;
    reason_for_selection_or_rejection_or_incomplete: string;
    call_status: string;
    relocation_willingness: boolean;
    conversation_duration_seconds: number;
  };
}

const InterviewRejected: React.FC<InterviewRejectedProps> = ({ data }) => {
  return (
    <div>
      <h2 className="ocandidate-review-heading">Candidate Call Review</h2>

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
            {data.conversation_duration_seconds} sec
          </span>
        </div>

        <div className="summary-item">
          <span className="summary-label">Relocation Willingness</span>
          <span className="summary-value">
            {data.relocation_willingness ? "Yes" : "No"}
          </span>
        </div>

        {/* Reason Box */}
        <div className="summary-reason-rejected">
          <span className="reason-icon-rejected">❌</span>
          <div className="reason-content">
            <span className="reason-text-rejected">
              {data.reason_for_selection_or_rejection_or_incomplete}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterviewRejected
