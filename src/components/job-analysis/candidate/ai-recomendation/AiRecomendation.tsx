"use client";
import React from 'react';
import { BadgeCheck } from 'lucide-react';
import './AiRecomendationStyles.css';
import { useParams } from 'next/navigation';
import { candidatesData } from '@/sample-data/candidateData';

const AiRecommendation: React.FC = () => {
    const params = useParams();
    const jobId = params?.id;    
    const candidateId = params?.candidateId; 
    const candidates = candidatesData[Number(jobId)] || [];

    const candidate = candidates.find(c => c.id === candidateId);


  return (
    <div className="ai-recommendation">
      <div className="ai-header">
        <div className="check-icon">
          <BadgeCheck size={24} color="#4CAF50" />
        </div>
        <p className="candidate-stage-title">AI Recommendation</p>
      </div>

      <p className="sub-title">
        Recommendation for Interview: <span className="yes-text">{candidate?.recommendationForInterview.recommended}</span>
      </p>

      <p>{candidate?.recommendationForInterview.reason}</p>

      <p className="sub-title">Suggested Interview Focus Areas:</p>
      <ul className="numbered-list">
        {candidate?.suggestedInterviewFocusAreas.map((area, index) => (
          <li key={index}>
            <span className="list-number">{index + 1}.</span> {area}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AiRecommendation;
