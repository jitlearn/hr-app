import React from 'react';
import './AboutCandidateStyles.css';
import { useParams } from 'next/navigation';
import { candidatesData } from '@/sample-data/candidateData';


// interface CandidateAssessment {
//   locationFit: AssessmentItem;
//   relevantExperience: AssessmentItem;
//   technicalSkillScore: AssessmentItem;
//   educationScore: AssessmentItem;

//   // Add index signature to allow access by dynamic keys safely
//   [key: string]: AssessmentItem | undefined;
// }

interface AssessmentItem {
  level: string;
  description?: string;
  percentage?: number;
}


const AboutCandidate = () => {
    const params = useParams();
    const jobId = params?.id;    
    const candidateId = params?.candidateId; 
    const candidates = candidatesData[Number(jobId)] || [];

    const assessmentCriteria = [
  { key: "locationFit", label: "Location Fit" },
  { key: "relevantExperience", label: "Relevant Experience" },
  { key: "technicalSkillScore", label: "Technical Skill" },
  { key: "educationScore", label: "Education Requirement" },
];

    const candidate = candidates.find(c => c.id === candidateId);
  return (
    <div className="about-candidate">
      <h2 className="section-title">Candidate Assessment</h2>

      <div className="assessment-header">
        <div className="assessment-left">
          <ul className="criteria-list">
            {assessmentCriteria.map(({ key, label }) => {
              const candidateAssessment = candidate?.candidateAssessment as any;
              const level = candidateAssessment?.[key]?.level || "low";
              const levelClass = level.toLowerCase();

              return (
                <li key={key}>
                  <span className="criteria-text">{label}</span>
                  <span className={`badge ${levelClass}`}>{level}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="assessment-about">
          <p className='sub-headding'>About</p>
          <p>
            {candidate?.aboutTheUser || "No information available."}
          </p>
        </div>

        <div className="assessment-issues">
          <p className='sub-headding'>Job Match Issues</p>
          <p>
            {candidate?.jobMatchIssues}          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCandidate;
