"use client";
import React from "react";
import './JobDescriptionStyles.css'
import BasicDetails from "@/components/job-analysis/job-description/basic-details/BasicDetails";
import TechnicalDetails from "@/components/job-analysis/job-description/technical-details/TechnicalDetials";
import QualificationsDetails from "@/components/job-analysis/job-description/qualification-details/QualificationDetails";
import AdditionalDetails from "@/components/job-analysis/job-description/additional-details/AdditionalDetails";
import { jobsData } from "@/sample-data/JobDescriptionsData";
import { useParams } from "next/navigation";

const JobDescription: React.FC = () => {
  const id = useParams().id;
  const job = jobsData.find(job => job.id === id);

  return (
    <div className="job-description-container">
      {/* Header */}
      <div className="header-section">
        <h1>{job?.title}</h1>
        {/* <p className="subtitle">Job Description</p> */}
      </div>
      <BasicDetails />
      <TechnicalDetails />
      <QualificationsDetails />
      <AdditionalDetails />
    </div>
  );
};

export default JobDescription;
