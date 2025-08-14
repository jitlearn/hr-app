"use client";
import React, { useEffect, useState } from "react";
import "./BasicDetailsStyles.css";
import { JobDescription as JobDescriptionType } from "@/services/api/jobDescriptionApi";
import { updateJobDescriptionBasic, JobDescriptionUpdatePayloadBasic } from "@/services/api/jobDescriptionApi"; // import the API

interface BasicDetailsProps {
  job: JobDescriptionType;
  onUpdate?: () => void;
}

const BasicDetails: React.FC<BasicDetailsProps> = ({ job, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [details, setDetails] = useState({
    jobTitle: "",
    department: "",
    location: "",
    employmentType: "",
    experienceLevel: "",
    salaryRange: "",
  });
  const [loading, setLoading] = useState(false);

  // Initialize details from the prop
  useEffect(() => {
    if (job) {
      setDetails({
        jobTitle: job.title || "",
        department: job.department || "",
        location: job.location || "",
        employmentType: job.employment_type || "",
        experienceLevel: job.experience_level || "",
        salaryRange: job.salary || "",
      });
    }
  }, [job]);

  const handleChange = (field: string, value: string) => {
    setDetails((prev) => ({ ...prev, [field]: value }));
  };

  const toggleEdit = async () => {
    if (isEditing) {
      // Save changes
      setLoading(true);

      const payload: JobDescriptionUpdatePayloadBasic = {
        id: job.id,
        title: details.jobTitle || job.title,
        department: details.department || job.department,
        location: details.location || job.location,
        employment_type: details.employmentType || job.employment_type,
        experience_level: details.experienceLevel || job.experience_level,
        salary: details.salaryRange || job.salary,
      };

      try {
        await updateJobDescriptionBasic(payload);
        // Trigger refresh in parent component
        if (onUpdate) onUpdate();
      } catch (error) {
        console.error("Failed to update:", error);
      } finally {
        setLoading(false);
      }
    }

    setIsEditing((prev) => !prev);
  };


  return (
    <div className="basic-card">
      <div className="basic-card-header">
        <p className="basic-card-title">Basic Details</p>
        <button className="basic-edit-btn" onClick={toggleEdit} disabled={loading}>
          {isEditing ? (loading ? "Saving..." : "Save Changes") : "Edit Fields"}
        </button>
      </div>

      <div className="basic-details-grid">
        {[
          { label: "Job Title", field: "jobTitle" },
          { label: "Department", field: "department" },
          { label: "Location", field: "location" },
          { label: "Employment Type", field: "employmentType" },
          { label: "Experience Level Required", field: "experienceLevel" },
          { label: "Salary Range", field: "salaryRange" },
        ].map(({ label, field }) => (
          <div key={field}>
            <p className="basic-label">{label}</p>
            {isEditing ? (
              <input
                value={details[field as keyof typeof details]}
                onChange={(e) => handleChange(field, e.target.value)}
              />
            ) : (
              <p>{details[field as keyof typeof details]}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BasicDetails;
