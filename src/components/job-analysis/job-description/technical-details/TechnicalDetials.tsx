"use client";
import React, { useState } from 'react';
import './TechnicalDetailsStyles.css';

interface TechnicalDetailsProps {
  job: {
    technical: string;
    tools_and_software: string;
    certifications: string;
  };
}

const TechnicalDetails: React.FC<TechnicalDetailsProps> = ({ job }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [details, setDetails] = useState({
    technicalSkills: job.technical,
    toolsAndSoftware: job.tools_and_software,
    certifications: job.certifications
  });

  const handleChange = (field: string, value: string) => {
    setDetails({ ...details, [field]: value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    // If saving, you could call your API here to persist changes
  };

  return (
    <div className="tech-card">
      <div className="tech-card-header">
        <p className="tech-card-title">Technical</p>
        <button className="tech-edit-btn" onClick={toggleEdit}>
          {isEditing ? "Save Changes" : "Edit Fields"}
        </button>
      </div>

      <div className="tech-section">
        <h4>Technical Skills</h4>
        {isEditing ? (
          <textarea
            value={details.technicalSkills}
            onChange={(e) => handleChange("technicalSkills", e.target.value)}
          />
        ) : (
          <p>{details.technicalSkills}</p>
        )}
      </div>

      <div className="tech-section">
        <h4>Tools and Software</h4>
        {isEditing ? (
          <textarea
            value={details.toolsAndSoftware}
            onChange={(e) => handleChange("toolsAndSoftware", e.target.value)}
          />
        ) : (
          <p>{details.toolsAndSoftware}</p>
        )}
      </div>

      <div className="tech-section">
        <h4>Certifications</h4>
        {isEditing ? (
          <textarea
            value={details.certifications}
            onChange={(e) => handleChange("certifications", e.target.value)}
          />
        ) : (
          <p>{details.certifications}</p>
        )}
      </div>
    </div>
  );
};

export default TechnicalDetails;
