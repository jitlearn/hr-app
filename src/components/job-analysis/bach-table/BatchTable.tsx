import React, { useState } from 'react';
import './BactchTableStyles.css';

const BatchTable = () => {
  const batches = [
    { batch: "Analysis Completed", totalResumes: 1, totalProcessed: 1, totalAnalyzed: 1 },
    { batch: "Analysis Completed", totalResumes: 1, totalProcessed: 1, totalAnalyzed: 1 },
    { batch: "Analysis Completed", totalResumes: 1, totalProcessed: 1, totalAnalyzed: 1 },
    { batch: "Pending", totalResumes: 2, totalProcessed: 1, totalAnalyzed: 0 },
    { batch: "In Progress", totalResumes: 5, totalProcessed: 3, totalAnalyzed: 2 },
    { batch: "Pending", totalResumes: 4, totalProcessed: 0, totalAnalyzed: 0 },
    { batch: "Completed", totalResumes: 6, totalProcessed: 6, totalAnalyzed: 6 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3;
  const totalPages = Math.ceil(batches.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = batches.slice(indexOfFirstRow, indexOfLastRow);

  const handlePageChange = (page:number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="batch-section-custom">
      <div className="batch-section-title-custom">Batch Report</div>
      
      <table className="batch-table-custom">
        <thead>
          <tr>
            <th className="batch-header-cell-custom">Batch</th>
            <th className="batch-header-cell-custom">Total Resumes</th>
            <th className="batch-header-cell-custom">Total Processed</th>
            <th className="batch-header-cell-custom">Total Analyzed</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((b, i) => (
            <tr key={i} className="batch-row-custom">
              <td className="batch-cell-custom">{b.batch}</td>
              <td className="batch-cell-custom">{b.totalResumes}</td>
              <td className="batch-cell-custom">{b.totalProcessed}</td>
              <td className="batch-cell-custom">{b.totalAnalyzed}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="batch-pagination-custom">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "batch-pagination-active-custom" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default BatchTable;
