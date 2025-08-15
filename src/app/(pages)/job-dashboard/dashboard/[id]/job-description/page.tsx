"use client";
import React, { useEffect, useState } from "react";
import "./JobDescriptionStyles.css";
import BasicDetails from "@/components/job-analysis/job-description/basic-details/BasicDetails";
import TechnicalDetails from "@/components/job-analysis/job-description/technical-details/TechnicalDetials";
import QualificationsDetails from "@/components/job-analysis/job-description/qualification-details/QualificationDetails";
import AdditionalDetails from "@/components/job-analysis/job-description/additional-details/AdditionalDetails";
import { useParams } from "next/navigation";
import { JobDescription as JobDescriptionType, getJobDescriptionById } from "@/services/api/jobDescriptionApi";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const JobDescription: React.FC = () => {
  const params = useParams();
  const id = String(params.id);

  const [jobDescription, setJobDescription] = useState<JobDescriptionType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchJobDescription = async () => {
    setLoading(true);
    try {
      const job = await getJobDescriptionById(id);
      setJobDescription(job);
    } catch (error) {
      console.error("Failed to fetch job description:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobDescription();
  }, [id]);

  if (loading || !jobDescription) {
    return <div className="loading">Loading job description...</div>;
  }

  return (
    <div className="job-description-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link href={`/job-dashboard/dashboard/${id}`} className="back-button">
          <ArrowLeft size={18} />
        </Link>
        <Link href={`/job-dashboard/`}>Job Dashboard</Link> /{" "}
        <Link href={`/job-dashboard/dashboard/${id}`}>Job Details</Link> /{" "}
        <span className="active">{jobDescription.title}</span>
      </div>

      {/* Header */}
      <div className="header-section">
        <h1>{jobDescription.title}</h1>
      </div>

      {/* Pass data & refresh function to BasicDetails */}
      <BasicDetails job={jobDescription} onUpdate={fetchJobDescription} />
      <TechnicalDetails job={jobDescription} onUpdate={fetchJobDescription} />
      <QualificationsDetails job={jobDescription} />
      <AdditionalDetails job={jobDescription} />
    </div>
  );
};

export default JobDescription;
