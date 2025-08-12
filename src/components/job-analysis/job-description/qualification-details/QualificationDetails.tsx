"use client";
import React, { useState } from 'react';
import './QualificationDetailsStyles.css';
import { jobsData } from '@/sample-data/JobDescriptionsData';
import { useParams } from 'next/navigation';


const QualificationsDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const id = useParams().id;
  const job = jobsData.find(job => job.id === id);
  const [details, setDetails] = useState({
    education:job?.educationLevel,
    experience: job?.experienceLevel,
    industry:job?.industryExperience,
    language: job?.languageRequirements
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
