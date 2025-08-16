"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./JobDashboardStyle.css";
import UploadJobDescription from "@/components/landing/upload-jd/UploadJobDescription";
import { getAllJobDescriptions, JobDescription } from "@/services/api/jobDescriptionApi";
import JDStatusSection from "@/components/job-dashboard/status-section/JDStatusSection";

const JobDashboard = () => {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);

  // Job state
  const [jobs, setJobs] = useState<JobDescription[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const fetchJobs = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log("fetch api is woring ::::::::::::::::::::::")
      const data = await getAllJobDescriptions();
      // Ensure we always have an array
      console.log("object data is ::::::::::::::::::::::", data);
      setJobs(Array.isArray(data) ? data : []);
    } catch (err) {
      setJobs([]); // fallback
      setError("Failed to fetch jobs");
      console.error("Job API error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(jobs.length / itemsPerPage) || 1;
  const paginatedJobs = jobs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleOpenPopup = () => setShowPopup(true);
  const handleClosePopup = () => {
    setShowPopup(false);
    fetchJobs(); // Trigger refresh here
  };


  const handleJobClick = (id: number) => {
    router.push(`/job-dashboard/dashboard/${id}`);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="jobs-dashboard-container">
      {showPopup && <UploadJobDescription onClose={handleClosePopup} />}

      <div className="jobs-header">
        <h2 className="jobs-title">Jobs</h2>
        <button onClick={handleOpenPopup} className="add-job-btn">
          + Add New Job
        </button>
      </div>

         <JDStatusSection />

      {loading ? (
  <div className="loading-container">
    <div className="spinner"></div>
    <p>Loading jobs...</p>
  </div>
      ) : jobs.length === 0 ? (
  <div className="no-jobs-container">
    <p>No jobs available</p>
    <button onClick={handleOpenPopup} className="add-job-btn">
      + Add New Job
    </button>
  </div>
      ) : (
        <div className="jobs-table-wrapper">
          <table className="jobs-table">
            <thead>
              <tr>
                <th>JOB TITLE</th>
                <th>POSITION STATUS</th>
                <th>EXPERIENCE LEVEL</th>
                <th>SALARY</th>
                <th>DEPARTMENT</th>
              </tr>
            </thead>
            <tbody>
              {paginatedJobs.map((job) => (
                <tr key={job.id}>
                  <td
                    className="job-title-cell"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleJobClick(job.id)}
                  >
                    <span className="job-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="#1893F7" strokeWidth="2" />
                        <path d="M12 4v8l4 2" stroke="#1893F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {job.title}
                  </td>
                  <td>
                    <span className={job.status?.toLowerCase() === "open" ? "position-open" : "position-closed"}>
                      {job.status || "N/A"}
                    </span>
                  </td>
                  <td>{job.experience_level || 0}</td>
                  <td>{job.salary || 0}</td>
                  <td>{job.department || "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      {jobs.length > 0 && (
        <div className="pagination">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={currentPage === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          ))}

          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default JobDashboard;
