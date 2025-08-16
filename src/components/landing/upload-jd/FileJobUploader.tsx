import React, { useState } from "react";
import { createJobDescriptionByDocs } from "@/services/api/jobDescriptionApi";

interface FileJobUploaderProps {
  onSubmit: (description: string) => void;
}

const FileJobUploader: React.FC<FileJobUploaderProps> = ({ onSubmit }) => {
  const [file, setFile] = useState<File | null>(null);

  // Convert file to base64
    const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
        const result = reader.result as string;
        // Remove prefix ("data:...;base64,")
        const base64Content = result.split(",")[1];
        resolve(base64Content);
        };
        reader.onerror = (error) => reject(error);
    });
    };


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleFileSubmit = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    try {
      // Convert to base64
      const base64String = await fileToBase64(file);
      console.log("base 6t4 ::", base64String)

      // ✅ Call parent with base64 string
      onSubmit(base64String);
    } catch (error) {
      alert("Error reading file. Please try again.");
    }
  };

  return (
    <div className="jobdesc-file-section">
      <label className="jobdesc-file-label">
        Upload job description <span className="jobdesc-required">Required</span>
      </label>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        className="jobdesc-file-input"
      />
      <button className="jobdesc-submit-btn" onClick={handleFileSubmit}>
        Submit
      </button>
    </div>
  );
};

export default FileJobUploader;
