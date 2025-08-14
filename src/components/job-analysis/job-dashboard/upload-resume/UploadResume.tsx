"use client";
import React, { useState } from "react";
import { FilePlus2, X } from "lucide-react";
import { useParams } from "next/navigation";
import { addCandidateResume } from "@/services/api/candidateApi";
import "./uploadStyles.css";

interface ResumeItem {
  id: string;
  name: string;
  base64: string;
  status?: "Pending" | "In Progress" | "Completed";
}

interface UploadResumeFormProps {
  onUploadSuccess?: () => void;
  resumeQueue: ResumeItem[];
  setResumeQueue: React.Dispatch<React.SetStateAction<ResumeItem[]>>;
}

const UploadResumeForm: React.FC<UploadResumeFormProps> = ({
  onUploadSuccess,
  resumeQueue,
  setResumeQueue,
}) => {
  const params = useParams();
  const jobId = String(params.id);

  const [loading, setLoading] = useState(false);

  const generateRandomId = () => Math.random().toString(36).substring(2, 10);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    Array.from(files).forEach((file) => {
      if (!allowedTypes.includes(file.type)) {
        alert(`File ${file.name} is not supported.`);
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const base64String = (reader.result as string).split(",")[1];
        setResumeQueue((prev) => [
          ...prev,
          { id: generateRandomId(), name: file.name, base64: base64String, status: "Pending" },
        ]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleUploadAll = async () => {
    if (resumeQueue.length === 0) return alert("No resumes to upload.");

    setLoading(true);

    try {
      for (const resume of [...resumeQueue]) {
        try {
          // set to "In Progress"
          setResumeQueue((prev) =>
            prev.map((item) =>
              item.id === resume.id ? { ...item, status: "In Progress" } : item
            )
          );

          await addCandidateResume({
            candidate_id: generateRandomId(),
            name: resume.name,
            job_id: jobId,
            base64: resume.base64,
          });

          // Remove from queue after upload
          setResumeQueue((prev) => prev.filter((item) => item.id !== resume.id));

          await new Promise((res) => setTimeout(res, 300));
        } catch (err) {
          console.error(`Failed to upload ${resume.name}`, err);
        }
      }

      onUploadSuccess?.();
    } finally {
      setLoading(false);
    }
  };

  const removeFromQueue = (id: string) => {
    setResumeQueue((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="upload-section">
      <p className="upload-section-title">Upload resumes</p>
      <p className="upload-section-sub-title">
        Upload resumes to have them reviewed and rated. Supports PDF, DOC, DOCX formats.
      </p>

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        multiple
        style={{ display: "none" }}
        id="resumeUpload"
        onChange={handleFileUpload}
      />

{loading ? (
        <div className="loader-container">
          <div className="square yellow"></div>
          <div className="square white"></div>
          <p>LOADING...</p>
        </div>
) : (
  <>
    {resumeQueue.length === 0 && (
      <button
        className="upload-btn"
        onClick={() => document.getElementById("resumeUpload")?.click()}
      >
        <FilePlus2 size={18} />
        Add Resumes
      </button>
    )}

    {resumeQueue.length > 0 && (
      <div className="upload-queue">
        <ul className="queue-list">
          {resumeQueue.map((resume) => (
            <li key={resume.id} className="queue-item">
              {resume.name}
              <button
                className="remove-btn"
                onClick={() => removeFromQueue(resume.id)}
              >
                <X size={14} />
              </button>
            </li>
          ))}
        </ul>
        <button className="upload-all-btn" onClick={handleUploadAll}>
          Upload All ({resumeQueue.length})
        </button>
      </div>
    )}
  </>
)}


      <p className="note">
        After upload, resumes are queued and processed automatically.
      </p>
    </div>
  );
};

export default UploadResumeForm;
