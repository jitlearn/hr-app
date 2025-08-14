import React, { useState } from "react";
import "./UploadJobDescriptionStyles.css";
import { useRouter } from "next/navigation";
import { createJobDescription } from "@/services/api/jobDescriptionApi";

interface UploadJobDescriptionProps {
  onClose: () => void;
}

const UploadJobDescription: React.FC<UploadJobDescriptionProps> = ({ onClose }) => {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<"ai" | "upload">("ai");
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const title = "python developer";

  const generateUniqueId = () => `${Math.floor(Math.random() * 100000)}`;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (activeTab === "upload" && !file) {
      alert("Please select a file first!");
      return;
    }
    if (activeTab === "ai" && !jobDescription.trim()) {
      alert("Please enter a short job description!");
      return;
    }

    const payload = {
      title,
      description:
        activeTab === "upload"
          ? `Uploaded file: ${file?.name || ""}`
          : jobDescription,
      id: generateUniqueId(),
    };

    try {
      setLoading(true);
      const result = await createJobDescription(payload);
      if (result.message === "success") {
        setSuccess(true);
        setTimeout(() => {
          onClose();
          router.refresh();
          router.push("/job-dashboard");
        }, 2000);
      } else {
        alert("Failed to create job description. Please try again.");
      }
    } catch (error: any) {
      alert(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="jobdesc-popup-overlay">
    <div className="jobdesc-popup-box">
      {loading && !success ? (
        // Full loading screen replaces popup content
        <div className="jobdesc-loading-full">
          <div className="jobdesc-color-loader">
            <div className="jobdesc-square"></div>
            <div className="jobdesc-square"></div>
            <div className="jobdesc-square"></div>
          </div>
          <p>Creating Job Description...</p>
        </div>
      ) : success ? (
        // Success screen
        <div className="jobdesc-success-box">
          <div className="jobdesc-success-icon">✔</div>
          <h3 className="jobdesc-success-title">Success</h3>
          <p className="jobdesc-success-text">
            Check your email for a booking confirmation. We’ll see you soon!
          </p>
          <button
            className="jobdesc-success-btn"
            onClick={() => {
              onClose();
              router.refresh();
              router.push("/job-dashboard");
            }}
          >
            OK
          </button>
        </div>
      ) : (
        // Normal popup content
        <>
          <div className="jobdesc-popup-header">
            <h3>Create a New Job</h3>
            <button className="jobdesc-close-icon" onClick={onClose}>
              ×
            </button>
          </div>

          <div className="jobdesc-tab-buttons">
            <button
              className={`tab-btn ${activeTab === "ai" ? "active" : ""}`}
              onClick={() => setActiveTab("ai")}
            >
              AI Job Generator
            </button>
            <button
              className={`tab-btn ${activeTab === "upload" ? "active" : ""}`}
              onClick={() => setActiveTab("upload")}
            >
              Upload a File
            </button>
            <div className={`tab-indicator ${activeTab}`}></div>
          </div>

          {activeTab === "ai" ? (
            <div className="ai-section">
              <label className="jobdesc-file-label">
                Write a short description of the job.{" "}
                <span className="jobdesc-required">Required</span>
              </label>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Sales Development Representative || English || Previous experience required."
                className="jobdesc-textarea"
              />
            </div>
          ) : (
            <div className="jobdesc-file-section">
              <label className="jobdesc-file-label">
                Upload job description{" "}
                <span className="jobdesc-required">Required</span>
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="jobdesc-file-input"
              />
            </div>
          )}

          <button
            className="jobdesc-submit-btn"
            onClick={handleSubmit}
            disabled={loading}
          >
            Submit
          </button>
        </>
      )}
    </div>
  </div>
  );
};

export default UploadJobDescription;
