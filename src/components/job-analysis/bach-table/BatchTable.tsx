import React, { useState } from "react";
import "./BactchTableStyles.css";

interface ResumeItem {
  id: string;
  name: string;
  base64: string;
  status?: "Pending" | "In Progress" | "Completed";
}

interface BatchTableProps {
  resumeQueue: ResumeItem[];
}

const BatchTable: React.FC<BatchTableProps> = ({ resumeQueue }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const totalPages = Math.ceil(resumeQueue.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = resumeQueue.slice(indexOfFirstRow, indexOfLastRow);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="batch-section-custom">
      <div className="batch-section-title-custom">Queued Resumes</div>

      {resumeQueue.length === 0 ? (
        <p className="no-resumes-msg">No resumes in queue</p>
      ) : (
        <>
          <table className="batch-table-custom">
            <thead>
              <tr>
                <th className="batch-header-cell-custom">File Name</th>
                <th className="batch-header-cell-custom">Status</th>
              </tr>
            </thead>
            <tbody>
                {currentRows.map((resume) => {
                  let statusClass = "";
                  if (resume.status === "Pending") statusClass = "status-pending";
                  else if (resume.status === "In Progress") statusClass = "status-progress";
                  else if (resume.status === "Completed") statusClass = "status-completed";

                  return (
                    <tr key={resume.id} className="batch-row-custom">
                      <td className="batch-cell-custom">{resume.name}</td>
                      <td className="batch-cell-custom">
                        <span className={`status-badge ${statusClass}`}>
                          {resume.status || "Pending"}
                        </span>
                      </td>
                    </tr>

                  );
                })}

            </tbody>
          </table>

          {totalPages > 1 && (
            <div className="batch-pagination-custom">
              <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={currentPage === index + 1 ? "batch-pagination-active-custom" : ""}
                >
                  {index + 1}
                </button>
              ))}
              <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BatchTable;
