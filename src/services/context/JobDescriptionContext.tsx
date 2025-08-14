"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getAllJobDescriptions,
  getJobDescriptionById,
  JobDescription,
} from "../api/jobDescriptionApi";

interface JobDescriptionContextType {
  jobs: JobDescription[];
  loading: boolean;
  refreshJobs: () => Promise<void>;
  getJobById: (id: string | number) => Promise<JobDescription | null>;
}

const JobDescriptionContext = createContext<JobDescriptionContextType | undefined>(undefined);

export const JobDescriptionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [jobs, setJobs] = useState<JobDescription[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const data = await getAllJobDescriptions();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const getJobById = async (id: string | number): Promise<JobDescription | null> => {
    try {
      setLoading(true);
      const job = await getJobDescriptionById(id);
      console.log("job data from context", job);
      return job;
    } catch (error) {
      console.error(`Error fetching job with ID ${id}:`, error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <JobDescriptionContext.Provider
      value={{
        jobs,
        loading,
        refreshJobs: fetchJobs,
        getJobById,
      }}
    >
      {children}
    </JobDescriptionContext.Provider>
  );
};

// Hook for consuming context
export const useJobDescriptions = () => {
  const context = useContext(JobDescriptionContext);
  if (!context) {
    throw new Error("useJobDescriptions must be used within a JobDescriptionProvider");
  }
  return context;
};
