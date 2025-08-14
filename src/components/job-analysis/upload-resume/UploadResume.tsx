import React, { useState } from 'react';
import './UploadResumeStyles.css';

interface UploadResumeProps {
  onClose: () => void;
}

const UploadResume: React.FC<UploadResumeProps> = ({ onClose }) => {
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
    console.log("Uploading:", file);
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <div className="popup-header">
          <h3>Batch Resume Handler</h3>
          <button className="close-icon" onClick={onClose}>×</button>
        </div>

        <div className="file-section">
          <label className="file-label">
            Upload resumes <span className="required">Required</span>
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="file-input"
          />
        </div>

        <button className="submit-btn" onClick={handleUpload}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default UploadResume;
