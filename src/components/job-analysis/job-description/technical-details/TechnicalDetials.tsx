"use client";
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import './TechnicalDetailsStyles.css';
import { updateJobDescriptionTech, JobDescriptionUpdatePayloadTech } from '@/services/api/jobDescriptionApi'; // adjust the path as needed
interface TechnicalDetailsProps {
  job: {
    technical: string;
    tools_and_software: string;
    certifications: string;
  };
    onUpdate?: () => void;
}

const TechnicalDetails: React.FC<TechnicalDetailsProps> = ({ job, onUpdate }) => {
  const params = useParams();
  const jobId = Number(params.id); // assuming URL has /jobs/:id

  const [isEditing, setIsEditing] = useState(false);
  const [details, setDetails] = useState({
    technicalSkills: job.technical,
    toolsAndSoftware: job.tools_and_software,
    certifications: job.certifications
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (field: string, value: string) => {
    setDetails({ ...details, [field]: value });
  };

  const toggleEdit = async () => {
    if (isEditing) {
      // Save changes
      setLoading(true);
      const payload: JobDescriptionUpdatePayloadTech = {
        id: jobId,
        technical: details.technicalSkills,
        tools_and_software: details.toolsAndSoftware,
        certifications: details.certifications
      };
      try {
        await updateJobDescriptionTech(payload);
        alert('Technical details updated successfully!');
        if (onUpdate) onUpdate();
      } catch (error) {
        alert('Failed to update technical details.');
      } finally {
        setLoading(false);
      }
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="tech-card">
      <div className="tech-card-header">
        <p className="tech-card-title">Technical</p>
        <button className="tech-edit-btn" onClick={toggleEdit} disabled={loading}>
          {isEditing ? (loading ? "Saving..." : "Save Changes") : "Edit Fields"}
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
