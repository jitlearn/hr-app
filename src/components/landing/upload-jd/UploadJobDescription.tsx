import React, { useState } from "react";
import "./UploadJobDescriptionStyles.css";
import { useRouter } from "next/navigation";
import { createJobDescription, createJobDescriptionByDocs } from "@/services/api/jobDescriptionApi";
import AiJobGenerator from "./AiJobGenerator";
import FileJobUploader from "./FileJobUploader";

interface UploadJobDescriptionProps {
  onClose: () => void;
}

const UploadJobDescription: React.FC<UploadJobDescriptionProps> = ({ onClose }) => {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<"ai" | "upload">("ai");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const title = "python developer";

  const generateUniqueId = () => `${Math.floor(Math.random() * 100000)}`;

const handleSubmit = async (description: string) => {
  const payload = {
    title,
    id: generateUniqueId(),
    description,
  };

  try {
    setLoading(true);
    let result;

    if (activeTab === "ai") {
      // AI job generator
      result = await createJobDescription(payload);
    } else {
      // File uploader (base64 content)
      console.log("the upload payload ::::::", payload)
      result = await createJobDescriptionByDocs(payload);
      console.log("result of the upodate :::::::", result)
    }

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
          <div className="jobdesc-loading-full">
            <div className="jobdesc-color-loader">
              <div className="jobdesc-square"></div>
              <div className="jobdesc-square"></div>
              <div className="jobdesc-square"></div>
            </div>
            <p>Creating Job Description...</p>
          </div>
        ) : success ? (
          <div className="jobdesc-success-box">
            <div className="jobdesc-success-icon">✔</div>
            <h3 className="jobdesc-success-title">Success</h3>
            <p className="jobdesc-success-text">
              Job description created successfully!
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
              <AiJobGenerator onSubmit={handleSubmit} />
            ) : (
              <FileJobUploader onSubmit={handleSubmit} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default UploadJobDescription;
