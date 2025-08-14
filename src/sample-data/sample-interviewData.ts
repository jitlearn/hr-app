export const BUSY =  {
    "id": "f29f0606-e553-4f3a-840e-7f2df54a31d8",
    "agent_id": "4ebf0d11-4156-42ca-b712-bbc6eccededa",
    "batch_id": null,
    "created_at": "2025-08-14T14:05:13.684865",
    "updated_at": "2025-08-14T14:05:43.693128",
    "scheduled_at": "2025-08-14T14:05:13.684839",
    "answered_by_voice_mail": null,
    "conversation_duration": 0,
    "total_cost": 0,
    "transcript": null,
    "usage_breakdown": {
        "llmModel": {
            "gpt-4.1-mini": {
                "input": 0,
                "output": 0
            }
        },
        "llmTokens": 0,
        "synthesizer_model": "eleven_turbo_v2_5",
        "transcriber_model": "azure",
        "llm_usage_breakdown": {
            "hangup": null,
            "analytics": null,
            "extraction": null,
            "conversation": {
                "input": 0,
                "model": "gpt-4.1-mini",
                "output": 0,
                "provider": "openai",
                "provider_connected": false
            },
            "summarization": null
        },
        "synthesizer_provider": "elevenlabs",
        "transcriber_duration": 0,
        "transcriber_provider": "azure",
        "synthesizer_characters": 0,
        "synthesizer_usage_breakdown": {
            "provider_connected": false,
            "welcome_message_cache": true,
            "conversation_characters": 0,
            "welcome_message_characters": 0
        },
        "transcriber_usage_breakdown": {
            "provider_connected": false,
            "transcriber_duration": 0
        }
    },
    "cost_breakdown": {
        "llm": 0,
        "network": 0,
        "platform": 0,
        "synthesizer": 0,
        "transcriber": 0,
        "llm_breakdown": {
            "hangup": 0,
            "analytics": 0,
            "extraction": 0,
            "conversation": 0,
            "summarization": 0
        },
        "synthesizer_breakdown": {
            "conversation": 0,
            "welcome_message": 0
        },
        "transcriber_breakdown": {
            "analytics": 0,
            "conversation": 0
        }
    },
    "extracted_data": null,
    "summary": null,
    "error_message": null,
    "status": "busy",
    "agent_extraction": null,
    "workflow_retries": null,
    "rescheduled_at": null,
    "custom_extractions": null,
    "campaign_id": null,
    "smart_status": "busy",
    "telephony_data": {
        "duration": "0.0",
        "to_number": "+919961872300",
        "from_number": "+16282774700",
        "recording_url": null,
        "hosted_telephony": true,
        "provider_call_id": "CA7317174fd9081e826e639b2449415722",
        "call_type": "outbound",
        "provider": "twilio",
        "hangup_by": null,
        "hangup_reason": null,
        "hangup_provider_code": null
    },
    "transfer_call_data": null,
    "context_details": {
        "recipient_data": null,
        "recipient_phone_number": "+919961872300"
    },
    "batch_run_details": null,
    "provider": "twilio"
}

export const REJECTED = {
    "id": "f966c69e-6d26-4853-a837-c45e7d193048",
    "agent_id": "4ebf0d11-4156-42ca-b712-bbc6eccededa",
    "batch_id": null,
    "created_at": "2025-08-14T14:45:16.144540",
    "updated_at": "2025-08-14T14:46:32.144971",
    "scheduled_at": "2025-08-14T14:45:16.144512",
    "answered_by_voice_mail": null,
    "conversation_duration": 59.4,
    "total_cost": 6.66,
    "transcript": "assistant: Hello, This is TOM the ai screening agent from ANC\nuser: 20.\nassistant:  Hi Vishnu, I’m calling from ANC. We have a Python developer opening you applied for—are you still interested in exploring it?\nuser: Yes, I am interested.\nassistant:  Is now a good time to speak?\nuser: Yeah, it's correct. Time to speak.\nassistant:   Have you already submitted your resignation in your current company?\nuser: No, not yet.\nassistant:   Just to confirm—you’ve officially put in your notice, correct?\nuser: Right.\nassistant:   This role is based in Riyadh—are you open to relocating?\nuser: I'm not OK with re relocating.\nassistant:   Understood, thanks for your time and wishing you all the best.\nuser: Thank you.\nassistant:  You're welcome, Vishnu! Have a great day ahead.\n",
    "usage_breakdown": {
        "llmModel": {
            "gpt-4.1-mini": {
                "input": 3173,
                "output": 103
            }
        },
        "llmTokens": 0,
        "synthesizer_model": "eleven_turbo_v2_5",
        "transcriber_model": "azure",
        "llm_usage_breakdown": {
            "hangup": null,
            "analytics": null,
            "extraction": null,
            "conversation": {
                "input": 3173,
                "model": "gpt-4.1-mini",
                "output": 103,
                "provider": "openai",
                "provider_connected": false
            },
            "summarization": null
        },
        "synthesizer_provider": "elevenlabs",
        "transcriber_duration": 59.3367555141449,
        "transcriber_provider": "azure",
        "synthesizer_characters": 452,
        "synthesizer_usage_breakdown": {
            "provider_connected": false,
            "welcome_message_cache": true,
            "conversation_characters": 0,
            "welcome_message_characters": 0
        },
        "transcriber_usage_breakdown": {
            "provider_connected": false,
            "transcriber_duration": 59.3367555141449
        }
    },
    "cost_breakdown": {
        "llm": 0.142,
        "network": 0,
        "platform": 0,
        "synthesizer": 4.52,
        "transcriber": 2,
        "llm_breakdown": {
            "hangup": 0,
            "analytics": 0,
            "extraction": 0,
            "conversation": 0.142,
            "summarization": 0
        },
        "synthesizer_breakdown": {
            "conversation": 4.52,
            "welcome_message": 0
        },
        "transcriber_breakdown": {
            "analytics": 0,
            "conversation": 2
        }
    },
    "extracted_data": null,
    "summary": null,
    "error_message": null,
    "status": "call-disconnected",
    "agent_extraction": null,
    "workflow_retries": null,
    "rescheduled_at": null,
    "custom_extractions": null,
    "campaign_id": null,
    "smart_status": "call-disconnected",
    "telephony_data": {
        "duration": "0.0",
        "to_number": "+919961872300",
        "from_number": "+16282774700",
        "recording_url": "",
        "hosted_telephony": true,
        "provider_call_id": "CAfaa166d3ec7c88021e07611869fc1650",
        "call_type": "outbound",
        "provider": "twilio",
        "hangup_by": null,
        "hangup_reason": null,
        "hangup_provider_code": null
    },
    "transfer_call_data": null,
    "context_details": {
        "recipient_data": null,
        "recipient_phone_number": "+919961872300"
    },
    "batch_run_details": null,
    "provider": "twilio"
}


export const SELECTED = {
    "id": "c82f3dc5-4c62-456a-af76-30ba3e96893d",
    "agent_id": "4ebf0d11-4156-42ca-b712-bbc6eccededa",
    "batch_id": null,
    "created_at": "2025-08-14T11:45:42.489610",
    "updated_at": "2025-08-14T11:49:50.877085",
    "scheduled_at": "2025-08-14T11:45:42.489583",
    "answered_by_voice_mail": null,
    "conversation_duration": 96.1,
    "total_cost": 22.99,
    "transcript": "assistant: Hello, This is TOM the ai screening agent from ANC\nuser: Camera. Camera. Hello. Hi.\nassistant:  Hi Vishnu, I’m calling from ANC. We have a Python developer opening you applied for—are you still interested in exploring it?\nuser: Yes.\nassistant:  Is now a good time to speak?\nuser: Yes, it's the correct name.\nassistant:  Great! Have you already submitted your resignation in your current company?\nuser: Yes, I have already submitted resignation.\nassistant:   This role is based in Riyadh—are you open to relocating?\nuser: Yeah, I will. I can relocate.\nassistant:   What’s your expected yearly CTC for this position?\nuser: 40,000.\nassistant:   Just to give context, this role offers between 50,000 and 70,000—where do you see yourself in that range?\nuser: 55,000.\nassistant:   If everything sounds good so far, would you be open to a first-round interview?\nuser: Yeah, I would be OK for that.\nassistant:   Great—I’ll send you a scheduling link so you can pick a time. Thanks for your time today. You’ll get an email with the next steps shortly.\nuser: OK.\nassistant:   Have a great day, Vishnu! Feel free to reach out if you have any questions.\nuser: OK. Thank you.\nassistant:  You're welcome! Take care!\n",
    "usage_breakdown": {
        "llmModel": {
            "gpt-4.1-mini": {
                "input": 5705,
                "output": 181
            }
        },
        "llmTokens": 0,
        "synthesizer_model": "eleven_turbo_v2_5",
        "transcriber_model": "azure",
        "llm_usage_breakdown": {
            "hangup": null,
            "analytics": null,
            "extraction": null,
            "conversation": {
                "input": 5705,
                "model": "gpt-4.1-mini",
                "output": 181,
                "provider": "openai",
                "provider_connected": false
            },
            "summarization": null
        },
        "synthesizer_provider": "elevenlabs",
        "transcriber_duration": 96.01868557929993,
        "transcriber_provider": "azure",
        "synthesizer_characters": 763,
        "synthesizer_usage_breakdown": {
            "provider_connected": false,
            "welcome_message_cache": true,
            "conversation_characters": 0,
            "welcome_message_characters": 0
        },
        "transcriber_usage_breakdown": {
            "provider_connected": false,
            "transcriber_duration": 96.01868557929993
        }
    },
    "cost_breakdown": {
        "llm": 0.256,
        "network": 8.1,
        "platform": 4,
        "synthesizer": 7.63,
        "transcriber": 3,
        "llm_breakdown": {
            "hangup": 0,
            "analytics": 0,
            "extraction": 0,
            "conversation": 0.256,
            "summarization": 0
        },
        "synthesizer_breakdown": {
            "conversation": 7.63,
            "welcome_message": 0
        },
        "transcriber_breakdown": {
            "analytics": 0,
            "conversation": 3
        }
    },
    "extracted_data": null,
    "summary": null,
    "error_message": null,
    "status": "completed",
    "agent_extraction": {
        "asst_0DxYqjpXy2EObi8cKPs7fwRN": {
            "final_evaluation": "Overall Score: 3.8 Summary: The candidate screening call was very brief and primarily focused on administrative logistics such as resignation status, relocation willingness, salary expectations, and interview scheduling. The conversation lacked any technical questioning or demonstration of technical expertise. Therefore, the evaluation for technical qualification, depth, and handling edge cases is low due to absence of relevant content. Communication was clear but minimal, with straightforward answers and no elaboration. There was no opportunity to assess consistency with the CV due to lack of technical dialogue. The call successfully covered logistical screening but did not include any technical assessment.",
            "final_evaluation_rating": "3.8",
            "technical_qualification": "Candidate did not provide any technical information or project explanations during the call, making it impossible to evaluate technical qualification.",
            "technical_qualification_rating": "2",
            "clarity": "Communication was clear and responses were straightforward, but the exchange lacked depth or elaboration.",
            "clarity_rating": "6",
            "technical_understanding": "There was no demonstration of technical understanding as no technical questions were asked or answered.",
            "technical_understanding_rating": "1",
            "consistency_with_cv": "No technical discussions occurred to verify consistency with the CV; therefore, consistency could not be assessed.",
            "consistency_with_cv_rating": "3",
            "handling_edge_cases": "No follow-up or technical edge case questions were posed; hence, no evaluation possible on handling edge cases.",
            "handling_edge_cases_rating": "2"
        },
        "asst_NKJE7Ch7Il0k2yAGhcqr2YFU": {
            "strength": "The candidate showed clear communication and willingness to relocate, which indicates flexibility and openness to new opportunities.",
            "weakness": "There was no technical discussion or demonstration of Python skills or any other technical knowledge, so no assessment of technical proficiency can be made."
        },
        "asst_kwpZ7PEDimsrGExBR5MXWIq5": {
            "soft_skill_evaluation": "The candidate responded confidently and appropriately to all questions, showing willingness to relocate and clear communication about current status and salary expectations. However, the interaction was brief with minimal technical discussion, limiting assessment of technical language use.",
            "soft_skill_evaluation_rating": "7",
            "clarity": "The candidate's responses were clear and easy to understand throughout the call.",
            "clarity_rating": "9",
            "complex_words_rating": "7",
            "fluency": "Speech was mostly fluent with only minor brief pauses, maintaining smooth flow for a short conversation.",
            "fluency_rating": "8",
            "confidence": "Candidate demonstrated confidence and engagement in responses despite the short exchange.",
            "confidence_rating": "8",
            "conciseness": "Answers were direct and relevant with no redundant or off-topic content.",
            "conciseness_rating": "9",
            "contextual_appropriateness": "Language used was appropriate for the screening context, staying on topic and relevant.",
            "contextual_appropriateness_rating": "9",
            "technical_terminology": "Limited use of technical terms due to the nature of the screening, but appropriate to the discussion (mentioning resignation, relocation, salary expectations).",
            "technical_terminology_rating": "6"
        },
        "asst_f4sCpG4zASXIls0FMl7PkMMt": {
            "qa_pair_question_1": "Have you already submitted your resignation in your current company?",
            "qa_pair_analysis_of_question_1": "Yes",
            "qa_pair_question_2": "This role is based in Riyadh—are you open to relocating?",
            "qa_pair_analysis_of_question_2": "Yes",
            "qa_pair_question_3": "What’s your expected yearly CTC for this position?",
            "qa_pair_analysis_of_question_3": "55000",
            "qa_pair_question_4": "If everything sounds good so far, would you be open to a first-round interview?",
            "qa_pair_analysis_of_question_4": "Yes"
        }
    },
    "workflow_retries": null,
    "rescheduled_at": null,
    "custom_extractions": null,
    "campaign_id": null,
    "smart_status": "completed",

    "transfer_call_data": null,

    "batch_run_details": null,
    "provider": "twilio"
}