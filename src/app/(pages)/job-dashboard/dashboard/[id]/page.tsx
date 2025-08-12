"use client";
import React, { useState } from "react";
import "./JobAnalysisStyles.css";
import { Star, FilePlus2 } from 'lucide-react';
import UploadResume from "@/components/job-analysis/upload-resume/UploadResume";
import CandidateSection from "@/components/job-analysis/candidates-table/CandidateSection";
import BatchTable from "@/components/job-analysis/bach-table/BatchTable";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { jobsData } from "@/sample-data/JobDescriptionsData";

export default function JobAnalysis() {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const params = useParams();
  const id = String(params.id);
  const router = useRouter();
  const jobDescription = jobsData.find(job => job.id === id);


  return (
    <div className="container">
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-left">
          <button onClick={() => router.push('/job-dashboard')} className="back-btn">← Back to Dashboard</button>
          <div className="navbar-title">{jobDescription?.title}</div>
        </div>
      </div>

      {/* Stats */}
      <div className="stats">
        <div className="stat-card"><h3>Total Applicants</h3><p>{jobDescription?.totalApplicants}</p></div>
        <div className="stat-card"><h3>High Fit Candidates</h3><p>{jobDescription?.highFitCandidates}</p></div>
        <div className="stat-card"><h3>Medium Fit Candidates</h3><p>{jobDescription?.mediumFitCandidates}</p></div>
        <div className="stat-card"><h3>Low Fit Candidates</h3><p>{jobDescription?.lowFitCandidates}</p></div>
      </div>

      {/* Recommendation bar */}
      <div className="recommendation-bar">
        <Star size={18} color="black" />{" "}
        {(jobDescription?.highFitCandidates ?? 0) + (jobDescription?.mediumFitCandidates ?? 0)} recommended for interview
      </div>

      {/* Job details */}
      <div className="job-details">
        <div className="job-info">
          <p className="job-info-title">Job Details</p>
          <ul>
            <li><strong>Job Title:</strong> <span>{jobDescription?.title}</span></li>
            <li><strong>Department:</strong> <span>{jobDescription?.department}</span></li>
            <li><strong>Location:</strong> <span>{jobDescription?.location}</span></li>
            <li><strong>Employment Type:</strong> <span>{jobDescription?.employmentType}</span></li>
            <li><strong>Experience Level:</strong> <span>{jobDescription?.experienceLevel}</span></li>
            <li><strong>Salary:</strong> <span>{jobDescription?.salary}</span></li>
          </ul>
          <button className="see-details">
            <Link href={`/job-dashboard/dashboard/${id}/job-description`}>See Full Details</Link> 
            </button>
        </div>

        <div className="upload-section">
          <p className="upload-section-title">Upload resumes</p>
          <p className="upload-section-sub-title">Upload resumes to have them reviewed and rated. Supports PDF, DOC, DOCX formats.</p>
          <button className="upload-btn" onClick={() => setIsUploadOpen(true)}>
            <FilePlus2 size={18} />
            Upload Resumes
          </button>
          <p className="note">After upload, resumes are queued and processed automatically..</p>
        </div>
      </div>

      {/* Candidates Table */}
      <CandidateSection id={id} />

      {/* Batch Analysis Table */}
      <BatchTable />

      {/* Upload Resume Popup */}
      {isUploadOpen && <UploadResume onClose={() => setIsUploadOpen(false)} />}
    </div>
  );
}
