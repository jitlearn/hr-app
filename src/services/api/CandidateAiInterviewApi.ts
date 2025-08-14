import axios from "axios";
import { API_URL,N8N_CORS_ALLOW_ORIGIN } from "@/sample-data/ApiConstants";


export const makeCall = async (candidateId: string) => {
  console.log("making call for candidate:", candidateId);
  try {
    const response = await axios.post(
      `${API_URL}/makecall`,
      { candidateId }, // request body
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
      "Error making call:",
      error.response?.data || error.message
    );
    throw error;
  }
};
