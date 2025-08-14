"use client";
import React, { useEffect, useState } from "react";
import "./JobAnalysisStyles.css";
import UploadResumeForm from "@/components/job-analysis/job-dashboard/upload-resume/UploadResume";
import CandidateSection from "@/components/job-analysis/candidates-table/CandidateSection";
import BatchTable from "@/components/job-analysis/bach-table/BatchTable";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import CandidateStatus from "@/components/job-analysis/job-dashboard/candidate-status/CandidateStatus";

// API imports
import { getJobDescriptionById, JobDescription } from "@/services/api/jobDescriptionApi";
import { getCandidatesByJobId, Candidate } from "@/services/api/candidateApi";

interface ResumeItem {
  id: string;
  name: string;
  base64: string;
  status?: "Pending" | "In Progress" | "Completed";
}

export default function JobAnalysis() {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [jobDescription, setJobDescription] = useState<JobDescription | null>(null);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loadingJob, setLoadingJob] = useState(true);
  const [loadingCandidates, setLoadingCandidates] = useState(true);
  const [resumeQueue, setResumeQueue] = useState<ResumeItem[]>([]); // ✅ lifted state

  const params = useParams();
  const id = String(params.id);
  const router = useRouter();

  // Fetch job description
  useEffect(() => {
    const fetchJob = async () => {
      setLoadingJob(true);
      try {
        const job = await getJobDescriptionById(id);
        setJobDescription(job);
      } catch (error) {
        console.error("Failed to fetch job description:", error);
      } finally {
        setLoadingJob(false);
      }
    };
    fetchJob();
  }, [id]);

  // Fetch candidates
  const fetchCandidates = async () => {
    setLoadingCandidates(true);
    try {
      const data = await getCandidatesByJobId(id);
      setCandidates(data);
    } catch (error) {
      console.error("Failed to fetch candidates:", error);
    } finally {
      setLoadingCandidates(false);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, [id]);

  if (loadingJob || !jobDescription) {
    return <div className="loading">Loading job details...</div>;
  }

  return (
    <div className="container">
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-left">
          <button
            onClick={() => router.push("/job-dashboard")}
            className="back-btn"
          >
            ← Back to Dashboard
          </button>
          <div className="navbar-title">{jobDescription.title}</div>
        </div>
      </div>

      {/* Stats */}
      <CandidateStatus candidates={candidates} />

      {/* Job details */}
      <div className="job-details">
        <div className="job-info">
          <p className="job-info-title">Job Details</p>
          <ul>
            <li><strong>Job Title:</strong> <span>{jobDescription.title}</span></li>
            <li><strong>Department:</strong> <span>{jobDescription.department}</span></li>
            <li><strong>Location:</strong> <span>{jobDescription.location}</span></li>
            <li><strong>Employment Type:</strong> <span>{jobDescription.employment_type}</span></li>
            <li><strong>Experience Level:</strong> <span>{jobDescription.experience_level}</span></li>
            <li><strong>Salary:</strong> <span>{jobDescription.salary}</span></li>
          </ul>
          <button className="see-details">
            <Link href={`/job-dashboard/dashboard/${id}/job-description`}>See Full Details</Link>
          </button>
        </div>

        {/* Upload resumes - now passes queue state */}
        <UploadResumeForm
          onUploadSuccess={fetchCandidates}
          resumeQueue={resumeQueue}
          setResumeQueue={setResumeQueue}
        />
      </div>

      {/* Candidates Table */}
      <CandidateSection id={id} candidates={candidates} loading={loadingCandidates} />

      {/* Batch Analysis Table */}
      <BatchTable resumeQueue={resumeQueue} />

      {/* Upload Resume Popup */}
      {/* {isUploadOpen && <UploadResumeForm onClose={() => setIsUploadOpen(false)} />} */}
    </div>
  );
}
