import React, { useState } from "react";
import "./CandidateOverAllReview.css";

interface QAPair {
  question: string;
  answer: string;
}

interface SoftSkills {
  soft_skill_evaluation: string;
  soft_skill_evaluation_rating: number;
  clarity: string;
  clarity_rating: number;
  complex_words_rating: number;
  fluency: string;
  fluency_rating: number;
  confidence: string;
  confidence_rating: number;
  conciseness: string;
  conciseness_rating: number;
  contextual_appropriateness: string;
  contextual_appropriateness_rating: number;
  technical_terminology: string;
  technical_terminology_rating: number;
}

interface OverallAgentEvaluation {
  summary: string;
  overall_score: number;
}

interface CandidateOverAllReviewProps {
  data: {
    final_status: string;
    reason_for_selection_or_rejection_or_incomplete: string;
    call_status: string;
    qa_pairs: QAPair[];
    soft_skills: SoftSkills;
    conversation_duration_seconds: number;
    strength: string;
    weakness: string;
    overall_agent_evaluation: OverallAgentEvaluation;
    full_transcript: string;
    relocation_willingness: boolean;
  };
}

const CandidateOverAllReview: React.FC<CandidateOverAllReviewProps> = ({ data }) => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  // Split transcript into messages
  const chatMessages = data.full_transcript
    .trim()
    .split("\n")
    .map((line, index) => {
      const [role, ...messageParts] = line.split(":");
      const message = messageParts.join(":").trim();
      return {
        id: index,
        role: role.trim(),
        message,
      };
    });

  const softSkills = data.soft_skills;

  const softSkillSections = [
    { title: "Soft Skill Evaluation", rating: softSkills.soft_skill_evaluation_rating, description: softSkills.soft_skill_evaluation },
    { title: "Clarity", rating: softSkills.clarity_rating, description: softSkills.clarity },
    { title: "Fluency", rating: softSkills.fluency_rating, description: softSkills.fluency },
    { title: "Confidence", rating: softSkills.confidence_rating, description: softSkills.confidence },
    { title: "Conciseness", rating: softSkills.conciseness_rating, description: softSkills.conciseness },
    { title: "Context Appropriateness", rating: softSkills.contextual_appropriateness_rating, description: softSkills.contextual_appropriateness },
    { title: "Technical Terminology", rating: softSkills.technical_terminology_rating, description: softSkills.technical_terminology },
  ];

  return (
    <div className="overall-review-wrapper">
      {/* Heading */}
      <h2 className="ocandidate-review-heading">Candidate Call Review</h2>

      {/* Top Summary */}
      <div className="summary-box">
        <div className="summary-item">
          <span className="summary-label">Final Status</span>
          <span className="summary-value">Selected for next round</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Call Status</span>
          <span className="summary-value">{data.call_status}</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Conversation Duration</span>
          <span className="summary-value">
            {Math.floor(data.conversation_duration_seconds / 60)} min
          </span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Relocation Willingness</span>
          <span className="summary-value">
            {data.relocation_willingness ? "Yes" : "No"}
          </span>
        </div>

        {/* Reason Box */}
        <div className="summary-reason">
          <span className="reason-icon">🎉</span>
          <div className="reason-content">
            <span className="reason-text">
              {data.reason_for_selection_or_rejection_or_incomplete}
            </span>
          </div>

        </div>
                  <h3 className="evaluation-heading">Evaluation Summary</h3>
          <p className="evaluation-summary">{data.overall_agent_evaluation.summary}</p>
      </div>

      {/* Two-panel layout */}
      <div className="review-layout">
        {/* Chat */}
        <div className="chat-container">
          {chatMessages.map((msg) => (
            <div
              key={msg.id}
              className={`chat-bubble ${msg.role === "assistant" ? "assistant" : "user"}`}
            >
              {msg.message}
            </div>
          ))}
        </div>

        {/* Evaluation Summary */}
        <div className="review-panel">


          {softSkillSections.map((section, idx) => {
            const ratingValue = Number(section.rating);
            const isOpen = openSection === idx;
            return (
              <div key={idx} className={`rating-section-card ${isOpen ? "expanded" : ""}`}>
                <div
                  className="rating-header"
                  onClick={() => setOpenSection(openSection === idx ? null : idx)}
                >
                  <span>{section.title}</span>
                  <span
                    className={`rating-score ${
                      ratingValue >= 7 ? "good" : ratingValue >= 4 ? "average" : "bad"
                    }`}
                  >
                    {ratingValue} / 10
                  </span>
                </div>
                {isOpen && (
                  <div className="rating-description">{section.description}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Strengths & Weaknesses */}
      <div className="extra-info-section grid-sections">
        <div className="strengths-section">
          <h4>Strengths</h4>
          <p>{data.strength}</p>
        </div>
        <div className="weaknesses-section">
          <h4>Weaknesses</h4>
          <p>{data.weakness}</p>
        </div>

      </div>
    </div>
  );
};

export default CandidateOverAllReview;
