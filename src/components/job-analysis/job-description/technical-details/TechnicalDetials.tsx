"use client";
import React, { useState } from 'react';
import './TechnicalDetailsStyles.css'; 
import { jobsData } from '@/sample-data/JobDescriptionsData';
import { useParams } from 'next/navigation';

const TechnicalDetails = () => {
    const id = useParams().id;
    const job = jobsData.find(job => job.id === id);
  const [isEditing, setIsEditing] = useState(false);
  const [details, setDetails] = useState({
    technicalSkills:job?.technical,
    toolsAndSoftware:job?.toolsAndSoftware,
    certifications: job?.certifications
  });

  const handleChange = (field: string, value: string) => {
    setDetails({ ...details, [field]: value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    // save API call can be added here
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
