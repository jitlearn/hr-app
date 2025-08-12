"use client";
import React, { useState } from 'react';
import './BasicDetailsStyles.css'; // Assuming you have a CSS file for styles
import { useParams } from 'next/navigation';
import { jobsData } from '@/sample-data/JobDescriptionsData';

const BasicDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
    const id = useParams().id;
    const job = jobsData.find(job => job.id === id);

  const [details, setDetails] = useState({
    jobTitle: job?.title,
    department: job?.department,
    location: job?.location,
    employmentType: job?.employmentType,
    experienceLevel: job?.experienceLevel,
    salaryRange: job?.salary
  });

  const handleChange = (field: string, value: string) => {
    setDetails({ ...details, [field]: value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    // Here you could also trigger a save API call when going from edit → save
  };

  return (
    <div className="basic-card">
      <div className="basic-card-header">
        <p className="basic-card-title">Basic Details</p>
        <button className="basic-edit-btn" onClick={toggleEdit}>
          {isEditing ? "Save Changes" : "Edit Fields"}
        </button>
      </div>

      <div className="basic-details-grid">
        <div>
          <p className="basic-label">Job Title</p>
          {isEditing ? (
            <input
              value={details.jobTitle}
              onChange={(e) => handleChange("jobTitle", e.target.value)}
            />
          ) : (
            <p>{details.jobTitle}</p>
          )}
        </div>
        <div>
          <p className="basic-label">Department</p>
          {isEditing ? (
            <input
              value={details.department}
              onChange={(e) => handleChange("department", e.target.value)}
            />
          ) : (
            <p>{details.department}</p>
          )}
        </div>
        <div>
          <p className="basic-label">Location</p>
          {isEditing ? (
            <input
              value={details.location}
              onChange={(e) => handleChange("location", e.target.value)}
            />
          ) : (
            <p>{details.location}</p>
          )}
        </div>
        <div>
          <p className="basic-label">Employment Type</p>
          {isEditing ? (
            <input
              value={details.employmentType}
              onChange={(e) => handleChange("employmentType", e.target.value)}
            />
          ) : (
            <p>{details.employmentType}</p>
          )}
        </div>
        <div>
          <p className="basic-label">Experience Level Required</p>
          {isEditing ? (
            <input
              value={details.experienceLevel}
              onChange={(e) => handleChange("experienceLevel", e.target.value)}
            />
          ) : (
            <p>{details.experienceLevel}</p>
          )}
        </div>
        <div>
          <p className="basic-label">Salary Range</p>
          {isEditing ? (
            <input
              value={details.salaryRange}
              onChange={(e) => handleChange("salaryRange", e.target.value)}
            />
          ) : (
            <p>{details.salaryRange}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
