import React, { useEffect, useState } from "react";
import "./AiPreInterview.css";
import CandidateOverAllReview from "./candidate-review/CandidateOverAllReview";
import InterviewIncomplete from "./interview-incomplete/InterviewIncomplete";
import InterviewRejected from "./interview-rejected/InterviewRejected";
import { getCandidateInterviewDetailsApi } from "@/services/api/candidateApi";

interface AiPreInterviewProps {
  candidate: {
    candidate_id: string;
    screening_completed: boolean;
  };
}

const AiPreInterview: React.FC<AiPreInterviewProps> = ({ candidate }) => {
  const [analysisData, setAnalysisData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!candidate?.screening_completed) {
        console.log("Screening not completed. Skipping API call.");
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const data = await getCandidateInterviewDetailsApi(candidate.candidate_id);
        setAnalysisData(data);
      } catch (error) {
        console.error("Error fetching interview details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [candidate]);

  console.log("Interview Analysis Data:", analysisData);
   console.log("relocation ::", analysisData.relocation_willingness)

  return (
    <div className="pre-interview-wrapper">
      {/* Candidate Status */}
      <div className="status-container">
        <h3 className="section-title">Candidate Status</h3>
      </div>

      {loading && <p>Loading candidate analysis...</p>}

      {!loading && analysisData?.final_status && (
        <>
          {analysisData.final_status.toLowerCase() === "incomplete" && (
            <InterviewIncomplete data={analysisData} />
          )}
          {analysisData.final_status.toLowerCase() === "rejected" && (
            <InterviewRejected data={analysisData} />
          )}
          {analysisData.final_status.toLowerCase() === "selected" && (
            <CandidateOverAllReview data={analysisData} />
          )}
        </>
      )}

      {/* Post Interview Review */}
      <div className="post-review-container">
        <h3 className="section-title">Post Interview Review</h3>
        <textarea
          className="review-textarea"
          placeholder="Write your review here..."
        ></textarea>
        <button className="submit-review-btn">Submit Review</button>
      </div>
    </div>
  );
};

export default AiPreInterview;
