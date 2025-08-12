"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import './JobDashboardStyle.css';
import UploadJobDescription from '@/components/landing/upload-jd/UploadJobDescription';
import { jobsData } from '@/sample-data/JobDescriptionsData';

const JobDashboard = () => {
  const router = useRouter();
  const [showPopup, setShowPopup] = React.useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 6;

  // Calculate total pages
  const totalPages = Math.ceil(jobsData.length / itemsPerPage);

  // Slice jobs for the current page
  const paginatedJobs = jobsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleOpenPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  const handleJobClick = (id: string) => {
    router.push(`/job-dashboard/dashboard/${id}`);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="jobs-dashboard-container">
      {showPopup && (
        <UploadJobDescription onClose={handleClosePopup} />
      )}

      <div className="jobs-header">
        <h2 className="jobs-title">Jobs</h2>
        <button onClick={handleOpenPopup} className="add-job-btn">
          + Add New Job
        </button>
      </div>

      <div className="jobs-table-wrapper">
        <table className="jobs-table">
          <thead>
            <tr>
              <th>JOB TITLE</th>
              <th>POSITION STATUS</th>
              <th>TOTAL RESUMES</th>
              <th>HIGH FIT CANDIDATES</th>
              <th>COMPLETED ANALYSIS</th>
            </tr>
          </thead>
          <tbody>
            {paginatedJobs.map((job) => (
              <tr key={job.id}>
                <td
                  className="job-title-cell"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleJobClick(job.id)}
                >
                  <span className="job-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="#1893F7" strokeWidth="2" />
                      <path
                        d="M12 4v8l4 2"
                        stroke="#1893F7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {job.title}
                </td>
                <td>
                  <span
                    className={
                      job.status.toLowerCase() === 'open'
                        ? 'position-open'
                        : 'position-closed'
                    }
                  >
                    {job.status}
                  </span>
                </td>
                <td>{job.totalResumes}</td>
                <td>{job.highFitCandidates}</td>
                <td>{job.completedAnalysis}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={currentPage === i + 1 ? 'active' : ''}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default JobDashboard;
