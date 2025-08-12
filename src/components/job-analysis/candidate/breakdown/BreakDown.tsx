import React from 'react';
import './BreakDwonStyles.css';
import { useParams } from 'next/navigation';
import { candidatesData } from '@/sample-data/candidateData';

const BreakDown = () => {
    const params = useParams();
    const jobId = params?.id;    
    const candidateId = params?.candidateId; 
    const candidates = candidatesData[Number(jobId)] || [];
    const candidate = candidates.find(c => c.id === candidateId);
  return (
      <div className="breakdown">
        <p className='breakdown-title'>Breakdown</p>

        <div className="breakdown-item">
          <p className='breakdown-sub-title'>Location</p>
          <p className="score-label">Location Fit Score</p>
          <div className="score-bar">
            <div className="score-fill" style={{ width: `${candidate?.candidateAssessment.locationFit.percentage}%` }}></div>
          </div>
          <p className="score-value">{candidate?.candidateAssessment.locationFit.percentage}</p>
          <p>
            {candidate?.candidateAssessment.locationFit.description ||
            "The candidate's location is not ideal for the job requirements, but they are open to relocation."}
          </p>
        </div>

        <div className="breakdown-item">
          <p className='breakdown-sub-title'>Relevant Experience</p>
          <p className="score-label">Relevant Experience Score</p>
          <div className="score-bar">
            <div className="score-fill" style={{ width: `${candidate?.candidateAssessment.relevantExperience.percentage}%` }}></div>
          </div>
          <p className="score-value">{candidate?.candidateAssessment.relevantExperience.percentage}</p>
          <p>
            {candidate?.candidateAssessment.relevantExperience.description ||
            "The candidate has over a year of relevant experience in Python and Django, which aligns well with the job requirements."}
          </p>
        </div>

        <div className="breakdown-item">
          <p className='breakdown-sub-title'>Technical Skills</p>
          <p className="score-label">Technical Skill Score</p>
          <div className="score-bar">
            <div className="score-fill" style={{ width: `${candidate?.candidateAssessment.technicalSkillScore.percentage}%` }}></div>
          </div>
          <p className="score-value">{candidate?.candidateAssessment.technicalSkillScore.percentage}</p>
          <p>
            {candidate?.candidateAssessment.technicalSkillScore.description ||
            "The candidate has a solid understanding of Python and Django, but lacks experience with Flask, which is a key requirement for the job."}
          </p>
        </div>

        <div className="breakdown-item">
          <p className='breakdown-sub-title'>Education</p>
          <p className="score-label">Education Score</p>
          <div className="score-bar">
            <div className="score-fill" style={{ width: `${candidate?.candidateAssessment.educationScore.percentage}%` }}></div>
          </div>
          <p className="score-value">{candidate?.candidateAssessment.educationScore.percentage}</p>
          <p>
            {candidate?.candidateAssessment.educationScore.description ||
            "The candidate has a Bachelor's degree in Computer Science, which meets the job's educational requirements and is a positive factor for their application."}
          </p>
        </div>
      </div>
  )
}

export default BreakDown
