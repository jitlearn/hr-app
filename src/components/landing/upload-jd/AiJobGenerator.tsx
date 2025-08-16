import React, { useState } from "react";

interface AiJobGeneratorProps {
  onSubmit: (description: string) => void;
}

const AiJobGenerator: React.FC<AiJobGeneratorProps> = ({ onSubmit }) => {
  const [jobDescription, setJobDescription] = useState("");

  const handleAiSubmit = () => {
    if (!jobDescription.trim()) {
      alert("Please enter a short job description!");
      return;
    }
    onSubmit(jobDescription);
  };

  return (
    <div className="ai-section">
      <label className="jobdesc-file-label">
        Write a short description of the job.{" "}
        <span className="jobdesc-required">Required</span>
      </label>
      <textarea
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Sales Development Representative || English || Previous experience required."
        className="jobdesc-textarea"
      />
      <button className="jobdesc-submit-btn" onClick={handleAiSubmit}>
        Submit
      </button>
    </div>
  );
};

export default AiJobGenerator;
