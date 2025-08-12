import React, { useState } from 'react';
import './UploadJobDescriptionStyles.css';

interface UploadJobDescriptionProps {
  onClose: () => void;
}

const UploadJobDescription: React.FC<UploadJobDescriptionProps> = ({ onClose }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }
    console.log("Uploading Job Description:", file);
    onClose();
  };

  return (
    <div className="jobdesc-popup-overlay">
      <div className="jobdesc-popup-box">
        {/* Header */}
        <div className="jobdesc-popup-header">
          <h3>Create a New Job</h3>
          <button className="jobdesc-close-icon" onClick={onClose}>×</button>
        </div>

        {/* Intro Description */}
        <p className="jobdesc-intro">
          Welcome! This is the first step in creating your job listing.
          You can upload an existing job description document here.
          Supported formats: <strong>PDF, DOC, DOCX</strong>.
          Once uploaded, we’ll guide you to review and publish your job.
        </p>

        {/* File Upload Section */}
        <div className="jobdesc-file-section">
          <label className="jobdesc-file-label">
            Upload job description <span className="jobdesc-required">Required</span>
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="jobdesc-file-input"
          />
        </div>

        {/* Actions */}
        <button className="jobdesc-submit-btn" onClick={handleUpload}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default UploadJobDescription;
