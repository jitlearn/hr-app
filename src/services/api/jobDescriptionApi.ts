import axios from "axios";
import { API_URL,N8N_CORS_ALLOW_ORIGIN } from "@/sample-data/ApiConstants";


// https://ai-screening.app.n8n.cloud/webhook/create-job-description
export interface JobDescriptionPayload {
  title: string;
  description: string;
  id: string;
}

export const createJobDescription = async (payload: JobDescriptionPayload) => {
  try {
    const response = await axios.post(
      `${API_URL}/create-job-description`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": N8N_CORS_ALLOW_ORIGIN,
        },
      }
    );
    console.log("respone from api page ::", response)

    return response.data;
  } catch (error: any) {
    console.error(
      "Error creating job description:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Response interface (based on your sample)
export interface JobDescription {
  id: number;
  title: string;
  department: string;
  location: string;
  employment_type: string;
  experience_level: string;
  salary: string;
  status: string;
  total_applicants: number | string;
  total_resumes: number | string;
  high_fit_candidates: number | string;
  medium_fit_candidates: number | string;
  low_fit_candidates: number | string;
  completed_analysis: string;
  technical: string;
  tools_and_software: string;
  certifications: string;
  education_level: string;
  years_of_experience: string;
  industry_experience: string;
  language_requirements: string;
  key_responsibilities: string;
  required_soft_skills: string;
  must_have_requirements: string;
  nice_to_have_attributes: string;
  cultural_fit_indicators: string;
}

export const getAllJobDescriptions = async (): Promise<JobDescription[]> => {
  try {
    const response = await axios.get(`${API_URL}/get-all-jd-data`, {
      headers: {
        "Content-Type": "application/json",
          "Access-Control-Allow-Origin": N8N_CORS_ALLOW_ORIGIN,
      },
    });

    return response.data;
  } catch (error: any) {
    console.error(
      "Error fetching job descriptions:",
      error.response?.data || error.message
    );
    throw error;
  }
};


// ✅ New API: Get job description by ID
export const getJobDescriptionById = async (
  id: string | number
): Promise<JobDescription> => {
  try {
    const response = await axios.get(`${API_URL}/get-job-description`, {
      params: { id },
      headers: {
        "Content-Type": "application/json",
          "Access-Control-Allow-Origin": N8N_CORS_ALLOW_ORIGIN,
      },
    });
    console.log("response.data", response.data);

    return response.data;
  } catch (error: any) {
    console.error(
      `Error fetching job description with ID ${id}:`,
      error.response?.data || error.message
    );
    throw error;
  }
};



// Define the payload type
export interface JobDescriptionUpdatePayloadBasic {
  id: number;
  title: string;
  department: string;
  location: string;
  employment_type: string;
  experience_level: string;
  salary: string;
}

// PUT API function
export const updateJobDescriptionBasic = async (payload: JobDescriptionUpdatePayloadBasic) => {
  console.log("this is wokring basic details form update api folder ::::  ", payload);
  try {
    const response = await axios.put(
      `${API_URL}/jd-basic-details-update`,
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
      "Error updating job description:",
      error.response?.data || error.message
    );
    throw error;
  }
};
