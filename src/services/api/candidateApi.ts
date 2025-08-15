import axios from "axios";
import { API_URL,N8N_CORS_ALLOW_ORIGIN } from "@/sample-data/ApiConstants";

// Type for the request body
export interface CandidateResumePayload {
  candidate_id: string;
  name: string; 
  job_id: string;
  base64: string; 
}

// Function to send candidate resume
export const addCandidateResume = async (payload: CandidateResumePayload) => {
  console.log("uploading candidate resume:", payload);
  try {
    const response = await axios.post(
      `${API_URL}/add-candidate-resume`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": N8N_CORS_ALLOW_ORIGIN,
        },
      }
    );

    return response.data; 
  } catch (error: any) {
    console.error(
      "Error adding candidate resume:",
      error.response?.data || error.message
    );
    throw error;
  }
};



// Type for the candidate object
export interface Candidate {
  candidate_id: string;
  candidate_name: string;
  match_level: string;
  overall_score: string;
  about_user: string;
  job_match_issues: string;
  candidate_location: string;
  candidate_stage: string;
  interview_recommended: string;
  interview_recommentation_reason: string;
  focus_area_1: string;
  focus_area_2: string;
  focus_area_3: string;
  location_fit_level: string;
  location_fit_description: string;
  location_fit_percentage: number;
  relevant_experience_level: string;
  relevant_experience_description: string;
  relevant_experience_percentage: number;
  technical_skill_level: string;
  technical_skill_description: string;
  technical_skill_percentage: number;
  education_degree: string;
  education_score_level: string;
  education_score_percentage: number;
  education_score_description: string;
  job_description_id: string;
  resume_name: string;
  is_processing: boolean;
  phone_number: string;
  email: string;
}

// Fetch candidates by Job Description ID
export const getCandidatesByJobId = async (jobId: string): Promise<Candidate[]> => {
  try {
    const response = await axios.get(`${API_URL}/get-candidate-by-jd`, {
      params: { id: jobId },
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": N8N_CORS_ALLOW_ORIGIN,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error(
      "Error fetching candidates by Job Description ID:",
      error.response?.data || error.message
    );
    throw error;
  }
};


// Fetch single candidate by Candidate ID
export const getCandidateById = async (candidateId: string): Promise<Candidate | null> => {
  try {
    const response = await axios.get(`${API_URL}/get-candidate-by-id`, {
      params: { id: candidateId },
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": N8N_CORS_ALLOW_ORIGIN,
      },
    });
    console.log("API Response candidate by cnd id:", response.data);
    // The API returns an array with a single object, so return first element
    return response.data ?? null;
  } catch (error: any) {
    console.error(
      "Error fetching candidate by ID:",
      error.response?.data || error.message
    );
    return null;
  }
};






// Fetch interview analysis for a candidate by ID
export const getInterviewAnalysisByCandidateId = async (
  candidateId: string
): Promise<any | null> => {
  console.log("thsiss workifnddd")
  try {
    const response = await axios.get(
      `${API_URL}/analyze-interview-data`,
      {
        params: { candidate_id: candidateId },
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Allow from anywhere (adjust if needed)
        },
      }
    );

    console.log(
      "API Response - interview analysis:",
      response.data
    );

    // The API returns an array with a single object, so return the first element's output
    if (Array.isArray(response.data) && response.data.length > 0) {
      return response.data[0].output ?? null;
    }

    return null;
  } catch (error: any) {
    console.error(
      "Error fetching interview analysis:",
      error.response?.data || error.message
    );
    return null;
  }
};
