"use client";
import React, { createContext, useContext, useState, useCallback } from "react";
import { getCandidatesByJobId, getCandidateById, Candidate } from "../api/candidateApi";

// Define context type
interface CandidateContextType {
  candidates: Candidate[];
  loading: boolean;
  fetchCandidates: (jobId: string) => Promise<void>;
  fetchCandidateById: (candidateId: string) => Promise<Candidate | null>;
}

const CandidateContext = createContext<CandidateContextType | undefined>(undefined);

// Provider
export const CandidateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch candidates by Job ID
  const fetchCandidates = useCallback(async (jobId: string) => {
    setLoading(true);
    try {
      const data = await getCandidatesByJobId(jobId);
      setCandidates(data || []);
    } catch (error) {
      console.error("Error fetching candidates:", error);
      setCandidates([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch a single candidate by ID
  const fetchCandidateById = useCallback(async (candidateId: string) => {
    try {
      const candidate = await getCandidateById(candidateId);
      console.log("Candidate fetched:", candidate);
      return candidate;
    } catch (error) {
      console.error("Error fetching candidate by ID:", error);
      return null;
    }
  }, []);

  return (
    <CandidateContext.Provider
      value={{ candidates, loading, fetchCandidates, fetchCandidateById }}
    >
      {children}
    </CandidateContext.Provider>
  );
};

// Hook for using context
export const useCandidateContext = () => {
  const context = useContext(CandidateContext);
  if (!context) {
    throw new Error("useCandidateContext must be used within a CandidateProvider");
  }
  return context;
};
