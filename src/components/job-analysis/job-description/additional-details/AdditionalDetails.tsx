"use client";
import { useParams } from 'next/navigation';
import './AdditionalDetailsStyles.css';
import React, { useState } from 'react';
import { jobsData } from '@/sample-data/JobDescriptionsData';

const AdditionalDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const id = useParams().id;
  const job = jobsData.find(job => job.id === id);
  const [details, setDetails] = useState({
    keyResponsibilities:job?.keyResponsibilities,
    requiredSoftSkills:job?.requiredSoftSkills,
    mustHaveRequirements:job?.requiredSoftSkills,
    niceToHave:job?.niceToHaveAttributes,
    culturalFit:job?.culturalFitIndicators
  });

  const handleChange = (field: string, value: string) => {
    setDetails({ ...details, [field]: value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    // Save logic can be added here if needed
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
