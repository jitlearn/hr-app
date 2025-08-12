"use client"; 
import React, { useState, useMemo } from 'react';
import './styles.css';
import Link from 'next/link';
import { candidatesData } from '@/sample-data/candidateData';
import { Check, X } from 'lucide-react';
import { useRouter } from 'next/navigation';


interface CandidateSectionProps {
  id: string;
}

const CandidateSection: React.FC<CandidateSectionProps> = ({ id }) => {
  const candidates = candidatesData[Number(id)] || [];

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const itemsPerPage = 3;
  const router = useRouter();

  // Filter candidates based on search term
  const filteredCandidates = useMemo(() => {
    const lowerSearch = searchTerm.toLowerCase();
    return candidates.filter(candidate =>
      candidate.name.toLowerCase().includes(lowerSearch) ||
      candidate.location.toLowerCase().includes(lowerSearch) ||
      candidate.candidateStage.toLowerCase().includes(lowerSearch) ||
      (candidate.recommendationForInterview.reason?.toLowerCase().includes(lowerSearch) ?? false)
    );
  }, [searchTerm, candidates]);

  const totalPages = Math.ceil(filteredCandidates.length / itemsPerPage);

  const currentCandidates = filteredCandidates.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="candidates-section">
      <p className="candidates-section-title">View Candidates</p>
      <input
        type="text"
        placeholder="Search by name, location, or stage"
        className="search-box"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1); // reset to first page on search
        }}
      />

      <table className="candidates-table">
        <thead className="candidates-thead">
          <tr className="candidates-header-row">
            <th className="candidates-header-cell">NAME</th>
            <th className="candidates-header-cell">STAGE</th>
            <th className="candidates-header-cell">LOCATION</th>
            <th className="candidates-header-cell">MATCH</th>
            <th className="candidates-header-cell">SCORE</th>
            <th className="candidates-header-cell">RECOMMENDED</th>
          </tr>
        </thead>
        <tbody className="candidates-tbody">
          {currentCandidates.length > 0 ? (
            currentCandidates.map((candidate, i) => (
              
              <tr onClick={() =>
                  router.push(
                    `/job-dashboard/dashboard/${id}/candidate/${encodeURIComponent(candidate.id)}`
                  )
                } 
                key={i} 
                className="candidates-row"
              >
                <td className="candidates-cell">
                  {candidate.name}
                </td>
                <td className="candidates-cell">
                  <span className={`badge ${candidate.candidateStage.toLowerCase().replace(/\s+/g, '-')}`}>
                    {candidate.candidateStage}
                  </span>
                </td>

                <td className="candidates-cell">{candidate.location}</td>
                <td className="candidates-cell">
                  <span className={`badge ${candidate.match.toLowerCase()}`}>
                    {candidate.match}
                  </span>
                </td>
                <td className="candidates-cell">{candidate.score}</td>
                <td className="candidates-cell">
                  {candidate.match === "high" || candidate.match === "medium" ? (
                    <Check color="green" size={18} />
                  ) : (
                    <X color="red" size={18} />
                  )}
                </td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="no-results">
                No candidates found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
          {[...Array(totalPages)].map((_, idx) => {
            const page = idx + 1;
            return (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={page === currentPage ? 'active' : ''}
              >
                {page}
              </button>
            );
          })}
          <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default CandidateSection;
