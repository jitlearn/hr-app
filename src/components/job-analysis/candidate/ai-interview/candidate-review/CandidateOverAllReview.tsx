import React, { useState } from "react";
import "./CandidateOverAllReview.css";
import { SELECTED } from "@/sample-data/sample-interviewData";

const CandidateOverAllReview = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  // Split transcript into messages
  const chatMessages = SELECTED.transcript.trim().split("\n").map((line, index) => {
    const [role, ...messageParts] = line.split(":");
    const message = messageParts.join(":").trim();
    return {
      id: index,
      role: role.trim(),
      message
    };
  });

  // Extract evaluations
  const evaluation = SELECTED.agent_extraction["asst_0DxYqjpXy2EObi8cKPs7fwRN"];
  const strengths = SELECTED.agent_extraction["asst_NKJE7Ch7Il0k2yAGhcqr2YFU"].strength;
  const weaknesses = SELECTED.agent_extraction["asst_NKJE7Ch7Il0k2yAGhcqr2YFU"].weakness;
  const softSkills = SELECTED.agent_extraction["asst_kwpZ7PEDimsrGExBR5MXWIq5"];

  // Ratings data
  const ratingSections = [
    { title: "Final Evaluation", rating: evaluation.final_evaluation_rating, description: evaluation.final_evaluation },
    { title: "Technical Qualification", rating: evaluation.technical_qualification_rating, description: evaluation.technical_qualification },
    { title: "Clarity", rating: evaluation.clarity_rating, description: evaluation.clarity },
    { title: "Technical Understanding", rating: evaluation.technical_understanding_rating, description: evaluation.technical_understanding },
    { title: "Consistency with CV", rating: evaluation.consistency_with_cv_rating, description: evaluation.consistency_with_cv },
    { title: "Handling Edge Cases", rating: evaluation.handling_edge_cases_rating, description: evaluation.handling_edge_cases },
  ];

  return (
    <div className="overall-review-wrapper">
      <h2>Candidate Call Review</h2>

      {/* Two-panel layout */}
      <div className="review-layout">
        {/* Chat Interface */}
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
          <h3>Evaluation Summary</h3>
          {ratingSections.map((section, idx) => {
            const ratingValue = Number(section.rating);
            return (
              <div key={idx} className="rating-section">
                <div
                  className="rating-header"
                  onClick={() => setOpenSection(openSection === idx ? null : idx)}
                >
                  <span>{section.title}</span>
                  <span
                    className={`rating-score ${
                      ratingValue >= 7
                        ? "good"
                        : ratingValue >= 4
                        ? "average"
                        : "bad"
                    }`}
                  >
                    {ratingValue} / 10
                  </span>
                </div>
                {openSection === idx && (
                  <div className="rating-description">{section.description}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* New Section for Weaknesses, Soft Skills & Strengths */}
      <div className="extra-info-section">
        <div className="grid-sections">

          <div>
            <h4>Soft Skills</h4>
            <ul>
              <li><strong>Soft Skill Rating:</strong> {softSkills.soft_skill_evaluation_rating}/10</li>
              <li><strong>Clarity:</strong> {softSkills.clarity_rating}/10</li>
              <li><strong>Fluency:</strong> {softSkills.fluency_rating}/10</li>
              <li><strong>Confidence:</strong> {softSkills.confidence_rating}/10</li>
              <li><strong>Conciseness:</strong> {softSkills.conciseness_rating}/10</li>
              <li><strong>Context Appropriateness:</strong> {softSkills.contextual_appropriateness_rating}/10</li>
              <li><strong>Technical Terminology:</strong> {softSkills.technical_terminology_rating}/10</li>
            </ul>
          </div>
          <div>
            <h4>Weaknesses</h4>
            <p>{weaknesses}</p>
          </div>
        </div>

        <div className="strengths-section">
          <h4>Strengths</h4>
          <p>{strengths}</p>
        </div>
      </div>

    </div>
  );
};

export default CandidateOverAllReview;
