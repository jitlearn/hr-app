"use client";
import React, { useState, useMemo } from "react";
import "./styles.css";
import { Check, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Candidate } from "@/services/api/candidateApi";

interface CandidateSectionProps {
  id: string;
  candidates?: Candidate[]; // optional in case API doesn't return it
  loading: boolean;
}

const CandidateSection: React.FC<CandidateSectionProps> = ({
  id,
  candidates = [], // fallback to empty array
  loading,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const itemsPerPage = 5;
  const router = useRouter();

const filteredCandidates = useMemo(() => {
  const safeCandidates = Array.isArray(candidates) ? candidates : [];
  const lowerSearch = searchTerm.toLowerCase();
  return safeCandidates.filter(
    (candidate) =>
      (candidate.candidate_name?.toLowerCase().includes(lowerSearch) ?? false) ||
      (candidate.candidate_location?.toLowerCase().includes(lowerSearch) ?? false) ||
      (candidate.candidate_stage?.toLowerCase().includes(lowerSearch) ?? false) ||
      (candidate.interview_recommentation_reason?.toLowerCase().includes(lowerSearch) ?? false)
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

    {Array.isArray(candidates) && candidates.length > 0 && (
      <input
        type="text"
        placeholder="Search by name, location, or stage"
        className="search-box"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
        }}
      />
    )}


      {loading ? (
        <p>Loading candidates...</p>
      ) : candidates.length === 0 ? (
          <div className="no-candidates-msg">
            <p>🚫 No candidates present for this job.</p>
          </div>
      ) : filteredCandidates.length === 0 ? (
          <div className="no-candidates-msg">
            <p>🔍 No candidates match your search.</p>
          </div>
      ) : (
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
            {currentCandidates.map((candidate) => (
              <tr
                key={candidate.candidate_id}
                onClick={() =>
                  router.push(
                    `/job-dashboard/dashboard/${id}/candidate/${encodeURIComponent(
                      candidate.candidate_id
                    )}`
                  )
                }
                className="candidates-row"
              >
                <td className="candidates-cell">{candidate.candidate_name ?? "-"}</td>
                <td className="candidates-cell">
                  <span
                    className={`badge ${
                      candidate.candidate_stage?.toLowerCase().replace(/\s+/g, "-") ?? ""
                    }`}
                  >
                    {candidate.candidate_stage ?? "-"}
                  </span>
                </td>
                <td className="candidates-cell">{candidate.candidate_location ?? "-"}</td>
                <td className="candidates-cell">
                  <span className={`badge ${candidate.match_level?.toLowerCase() ?? ""}`}>
                    {candidate.match_level ?? "-"}
                  </span>
                </td>
                <td className="candidates-cell">{candidate.overall_score ?? "-"}</td>
                <td className="candidates-cell">
                  {candidate.match_level === "high" || candidate.match_level === "medium" ? (
                    <Check color="green" size={18} />
                  ) : (
                    <X color="red" size={18} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {totalPages > 1 && !loading && (
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
                className={page === currentPage ? "active" : ""}
              >
                {page}
              </button>
            );
          })}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default CandidateSection;
