"use client";
import React, { useState } from 'react';
import './QualificationDetailsStyles.css';

interface QualificationsDetailsProps {
  job: {
    education_level: string;
    experience_level: string;
    industry_experience: string;
    language_requirements: string;
  };
}

const QualificationsDetails: React.FC<QualificationsDetailsProps> = ({ job }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [details, setDetails] = useState({
    education: job.education_level,
    experience: job.experience_level,
    industry: job.industry_experience,
    language: job.language_requirements
  });

  const handleChange = (field: string, value: string) => {
    setDetails({ ...details, [field]: value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    // Save logic can be added here
  };

  return (
    <div className="qual-card">
      <div className="qual-card-header">
        <p className="qual-card-title">Qualifications</p>
        <button className="qual-edit-btn" onClick={toggleEdit}>
          {isEditing ? "Save Changes" : "Edit Fields"}
        </button>
      </div>

      <div className="qual-details-grid">
        <div>
          <p className="qual-label">Education Level</p>
          {isEditing ? (
            <input
              type="text"
              value={details.education}
              onChange={(e) => handleChange("education", e.target.value)}
            />
          ) : (
            <p>{details.education}</p>
          )}
        </div>
        <div>
          <p className="qual-label">Years of Experience</p>
          {isEditing ? (
            <input
              type="text"
              value={details.experience}
              onChange={(e) => handleChange("experience", e.target.value)}
            />
          ) : (
            <p>{details.experience}</p>
          )}
        </div>
        <div>
          <p className="qual-label">Industry Experience</p>
          {isEditing ? (
            <input
              type="text"
              value={details.industry}
              onChange={(e) => handleChange("industry", e.target.value)}
            />
          ) : (
            <p>{details.industry}</p>
          )}
        </div>
        <div>
          <p className="qual-label">Language Requirements</p>
          {isEditing ? (
            <input
              type="text"
              value={details.language}
              onChange={(e) => handleChange("language", e.target.value)}
            />
          ) : (
            <p>{details.language}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QualificationsDetails;
