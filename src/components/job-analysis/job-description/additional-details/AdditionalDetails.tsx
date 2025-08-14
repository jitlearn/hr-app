"use client";
import './AdditionalDetailsStyles.css';
import React, { useState } from 'react';

interface AdditionalDetailsProps {
  job: {
    key_responsibilities: string;
    required_soft_skills: string;
    must_have_requirements: string;
    nice_to_have_attributes: string;
    cultural_fit_indicators: string;
  };
}

const AdditionalDetails: React.FC<AdditionalDetailsProps> = ({ job }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [details, setDetails] = useState({
    keyResponsibilities: job.key_responsibilities,
    requiredSoftSkills: job.required_soft_skills,
    mustHaveRequirements: job.must_have_requirements,
    niceToHave: job.nice_to_have_attributes,
    culturalFit: job.cultural_fit_indicators
  });

  const handleChange = (field: string, value: string) => {
    setDetails({ ...details, [field]: value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    // Add save API call here if needed
  };

  return (
    <div className="add-card">
      <div className="add-card-header">
        <p className="add-card-title">Additional</p>
        <button className="add-edit-btn" onClick={toggleEdit}>
          {isEditing ? "Save Changes" : "Edit Fields"}
        </button>
      </div>

      {[
        { label: "Key Responsibilities", field: "keyResponsibilities" },
        { label: "Required Soft Skills", field: "requiredSoftSkills" },
        { label: "Must-Have Requirements", field: "mustHaveRequirements" },
        { label: "Nice-To-Have Attributes", field: "niceToHave" },
        { label: "Cultural Fit Indicators", field: "culturalFit" }
      ].map(({ label, field }) => (
        <div className="add-section" key={field}>
          <h4>{label}</h4>
          {isEditing ? (
            <textarea
              value={details[field as keyof typeof details]}
              onChange={(e) => handleChange(field, e.target.value)}
            />
          ) : (
            <p>{details[field as keyof typeof details]}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdditionalDetails;
