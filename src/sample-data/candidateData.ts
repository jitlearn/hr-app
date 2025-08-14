
interface RecommendationForInterview {
  recommended: string;
  reason: string;
}

interface LocationFit {
  level: string;
  description: string;
  percentage: number;
}

interface RelevantExperience {
  level: string;
  description: string;
  percentage: number;
}

interface TechnicalSkillScore {
  level: string;
  description: string;
  percentage: number;
}

interface EducationScore {
  level: string;
  percentage: number;
  description: string;
}

interface CandidateAssessment {
  locationFit: LocationFit;
  relevantExperience: RelevantExperience;
  technicalSkillScore: TechnicalSkillScore;
  education: string;
  educationScore: EducationScore;
}

interface Candidate {
  id:string;
  name: string;
  aboutTheUser:string;
  jobMatchIssues:string;
  match: string; // 'high' | 'medium' | 'low'
  score: string; // numeric string, but used for logic
  location: string;
  candidateStage: string;
  recommendationForInterview: RecommendationForInterview;
  suggestedInterviewFocusAreas: string[];
  candidateAssessment: CandidateAssessment;
}

export const candidatesData: Record<number, Candidate[]> = {
   1: [ // Python Developer
    {
      id: "1",
      name: "Rohit Sharma",
      match: "high",
      score: "95",
    aboutTheUser:
      "Experienced Python developer with strong backend skills and a focus on Django and REST APIs. Works remotely with proven ability to deliver scalable solutions.",
    jobMatchIssues:
      "Needs to clarify SQL proficiency and Flask framework experience during the interview.",
    location: "Bangalore, India",
    candidateStage: "Interview Requested", // or "Screening", "Interviewing", "Rejected", "Offer"
    recommendationForInterview: {
      recommended: "Yes",
      reason:
        "Vishnu Narayanan has demonstrated hands-on experience with Python and Django, making him a strong candidate for the Python Developer position; however, clarification on his SQL proficiency and familiarity with Flask is needed during the interview."
    },
    suggestedInterviewFocusAreas: [
      "Django REST API design and scalability",
      "Clarification of SQL query proficiency and experience with database management",
      "Understanding of Flask framework and its integration with Django"
    ],
    candidateAssessment: {
      locationFit: {
        level: "High",
        description:
          "The applicant’s experience clearly notes remote work, specifically at BytezTechweb Solution, which aligns perfectly with the job requirement of being a Python Developer in a remote position. This demonstrates his capacity to work efficiently in a remote environment.",
        percentage: 95
      },
      relevantExperience: {
        level: "Low",
        description:
          "The applicant has hands-on experience in Python and Django, which aligns with the primary technical skill requirement. They have worked with PostgreSQL for data management tasks and are familiar with using Git for version control. They also have experience in developing REST APIs using Django, which is part of the job's key responsibilities.",
        percentage: 90
      },
      technicalSkillScore: {
        level: "medium",
        description:
          "The applicant demonstrates more than a year of professional experience with significant self-taught skills in Python and Django, aligning with the job's key requirements. There is evidence of experience with REST APIs, PostgreSQL, and Git.",
        percentage: 92
      },
      education: "Bachelor's in Computer Science",
      educationScore: {
        level: "High",
        percentage: 90,
        description:
          "The applicant holds a Bachelor's degree in Computer Science, which meets the educational requirement for the Python Developer position. This educational background provides a solid foundation in programming and software development principles, essential for the role."
      }
    }
  },
  {
    id: "2",
    name: "Sneha Patel",
    match: "medium",
    score: "60",
    aboutTheUser:
      "Python developer with 3 years of experience mostly in automation and scripting. Limited exposure to web frameworks and cloud deployment.",
    jobMatchIssues:
      "Lacks strong Django REST API and cloud deployment experience needed for the role.",
    location: "Mumbai, India",
    candidateStage: "Screening",
    recommendationForInterview: {
      recommended: "No",
      reason:
        "Limited experience with Django REST framework and needs to improve skills in cloud deployment and API design."
    },
    suggestedInterviewFocusAreas: [
      "REST API best practices and Django middleware",
      "Experience with PostgreSQL and database schema design"
    ],
    candidateAssessment: {
      locationFit: {
        level: "Medium",
        description:
          "Candidate is located in Mumbai, which is approximately 980 km from Bangalore, indicating moderate relocation or remote working considerations.",
        percentage: 70
      },
      relevantExperience: {
        level: "Medium",
        description:
          "3 years experience with Python, mainly in automation scripts and basic web apps; limited exposure to Django and REST APIs.",
        percentage: 60
      },
      technicalSkillScore: {
        level: "Medium",
        description:
          "Basic understanding of Django, lacks experience in building complex REST APIs or cloud deployment strategies.",
        percentage: 65
      },
      education: "Bachelor's in Information Technology",
      educationScore: {
        level: "Medium",
        percentage: 75,
        description:
          "Completed a relevant bachelor's degree in IT, providing foundational knowledge but less specialized than Computer Science."
      }
    }
  },
  {
    id: "3",
    name: "Vikram Singh",
    match: "low",
    score: "50",
    aboutTheUser:
      "Backend developer with 4 years of experience focused on Django and AWS cloud infrastructure. Experienced in microservices and CI/CD pipelines.",
    jobMatchIssues:
      "Relocation or remote work needs to be confirmed; clarify experience with caching and scalability.",
    location: "Chennai, India",
    candidateStage: "Interviewing",
    recommendationForInterview: {
      recommended: "Yes",
      reason:
        "Strong backend experience with Django and AWS; good culture fit and ready to handle cloud infrastructure tasks."
    },
    suggestedInterviewFocusAreas: [
      "Django scalability and caching strategies",
      "Cloud infrastructure deployment and CI/CD pipelines"
    ],
    candidateAssessment: {
      locationFit: {
        level: "Medium",
        description:
          "Located in Chennai, roughly 350 km from Bangalore; candidate open to relocation or remote work.",
        percentage: 70
      },
      relevantExperience: {
        level: "High",
        description:
          "4 years of backend development experience including microservices and cloud deployments on AWS.",
        percentage: 85
      },
      technicalSkillScore: {
        level: "High",
        description:
          "Proficient in Python, Django, Docker, AWS services, and CI/CD with Jenkins and Git.",
        percentage: 88
      },
      education: "Bachelor's in Computer Science",
      educationScore: {
        level: "High",
        percentage: 85,
        description: "Strong foundational education relevant to the job role."
      }
    }
  },
  {
    id: "4",
    name: "Anjali Mehta",
    match: "high",
    score: "80",
    aboutTheUser:
      "Frontend developer with experience mainly in UI technologies. Limited backend knowledge and no significant Python experience.",
    jobMatchIssues:
      "Mismatch in technical skills and experience; backend Python and Django skills missing.",
    location: "Delhi, India",
    candidateStage: "Rejected",
    recommendationForInterview: {
      recommended: "No",
      reason:
        "Lacks experience in Django and backend technologies; primarily experienced in frontend development."
    },
    suggestedInterviewFocusAreas: ["N/A due to rejection"],
    candidateAssessment: {
      locationFit: {
        level: "Low",
        description:
          "Candidate is in Delhi, 2150 km from Bangalore, with no indication of relocation plans.",
        percentage: 40
      },
      relevantExperience: {
        level: "Low",
        description: "Experience mostly in frontend frameworks, no backend development.",
        percentage: 35
      },
      technicalSkillScore: {
        level: "Low",
        description: "No experience with Python or Django backend development.",
        percentage: 20
      },
      education: "Bachelor's in Commerce",
      educationScore: {
        level: "Low",
        percentage: 40,
        description:
          "Educational background unrelated to software development."
      }
    }
  },
  {
    id: "5",
    name: "Arjun Desai",
    match: "low",
    score: "40",
    aboutTheUser:
      "Senior Python developer with 6 years of experience building scalable backend systems and leading development teams.",
    jobMatchIssues:
      "No significant issues; excellent match for role and responsibilities.",
    location: "Bangalore, India",
    candidateStage: "Offer",
    recommendationForInterview: {
      recommended: "Yes",
      reason:
        "Exceptional Python skills with leadership experience; strong fit for senior backend role."
    },
    suggestedInterviewFocusAreas: [
      "Advanced Python optimization and concurrency",
      "Leadership and mentoring within development teams"
    ],
    candidateAssessment: {
      locationFit: {
        level: "High",
        description:
          "Local Bangalore candidate with no relocation needed, enabling immediate availability.",
        percentage: 98
      },
      relevantExperience: {
        level: "High",
        description:
          "6 years of experience building scalable backend systems using Python, Django, and microservices.",
        percentage: 95
      },
      technicalSkillScore: {
        level: "High",
        description:
          "Expert in Python, Django, AWS cloud, Docker, and CI/CD tools; also experienced in team leadership.",
        percentage: 96
      },
      education: "Master's in Computer Science",
      educationScore: {
        level: "High",
        percentage: 95,
        description:
          "Advanced degree emphasizing software engineering and system design."
      }
    }
  }
],

  2: [ // Frontend Engineer
  {
    id: "1",
    name: "Ananya Gupta",
    match: "low",
    score: "30",
    aboutTheUser:
      "Creative frontend developer with 3 years of experience in building responsive and accessible web applications using React, TypeScript, and Tailwind CSS.",
    jobMatchIssues:
      "Needs to strengthen unit testing skills and exposure to CI/CD pipelines.",
    location: "Mumbai, India",
    candidateStage: "Interview Requested",
    recommendationForInterview: {
      recommended: "Yes",
      reason:
        "Ananya has strong expertise in React and TypeScript with experience in large-scale projects, making her a promising candidate. Clarification on testing practices is required."
    },
    suggestedInterviewFocusAreas: [
      "React hooks and performance optimization",
      "Unit testing best practices with Jest",
      "Understanding of CI/CD pipelines"
    ],
    candidateAssessment: {
      locationFit: {
        level: "High",
        description:
          "Located in Mumbai with no relocation constraints and available for hybrid or remote work.",
        percentage: 90
      },
      relevantExperience: {
        level: "High",
        description:
          "Over 3 years of experience in modern frontend frameworks, particularly React and Next.js.",
        percentage: 88
      },
      technicalSkillScore: {
        level: "High",
        description:
          "Strong understanding of React, Redux, TypeScript, and CSS-in-JS libraries.",
        percentage: 92
      },
      education: "Bachelor's in Information Technology",
      educationScore: {
        level: "High",
        percentage: 85,
        description:
          "Bachelor's degree in IT provides a solid foundation in computer science concepts."
      }
    }
  },
  {
    id: "2",
    name: "Rahul Verma",
    match: "high",
    score: "95",
    aboutTheUser:
      "Frontend developer specializing in Vue.js and Nuxt.js with experience in crafting seamless user experiences for SaaS platforms.",
    jobMatchIssues:
      "Needs deeper knowledge of state management best practices in large Vue applications.",
    location: "Pune, India",
    candidateStage: "Screening",
    recommendationForInterview: {
      recommended: "Yes",
      reason:
        "Rahul's strong Vue.js background aligns well with the job role; state management practices should be clarified."
    },
    suggestedInterviewFocusAreas: [
      "Vuex and Pinia state management",
      "Component composition and reusability",
      "Performance profiling in Vue applications"
    ],
    candidateAssessment: {
      locationFit: {
        level: "Medium",
        description:
          "Currently in Pune, open to relocation within India.",
        percentage: 75
      },
      relevantExperience: {
        level: "High",
        description:
          "4 years of professional experience in Vue.js-based development.",
        percentage: 90
      },
      technicalSkillScore: {
        level: "High",
        description:
          "Excellent skills in Vue.js, Nuxt.js, and Tailwind CSS.",
        percentage: 88
      },
      education: "Bachelor's in Computer Engineering",
      educationScore: {
        level: "Medium",
        percentage: 78,
        description:
          "Bachelor's degree in Computer Engineering provides a relevant technical background."
      }
    }
  },
  {
    id: "3",
    name: "Sneha Iyer",
    match: "medium",
    score: "74",
    aboutTheUser:
      "Passionate frontend developer focused on accessibility and design systems, with solid experience in Figma-to-code workflows.",
    jobMatchIssues:
      "Limited exposure to performance optimization in large-scale SPAs.",
    location: "Chennai, India",
    candidateStage: "Interviewing",
    recommendationForInterview: {
      recommended: "Yes",
      reason:
        "Sneha's strong design-to-development expertise is valuable; performance optimization experience should be discussed."
    },
    suggestedInterviewFocusAreas: [
      "Accessibility best practices (WCAG 2.1)",
      "Design system implementation",
      "SPA performance optimization"
    ],
    candidateAssessment: {
      locationFit: {
        level: "High",
        description:
          "Based in Chennai and open to remote work.",
        percentage: 95
      },
      relevantExperience: {
        level: "Medium",
        description:
          "2 years of frontend development experience in startups.",
        percentage: 72
      },
      technicalSkillScore: {
        level: "Medium",
        description:
          "Good knowledge of React, Storybook, and accessibility tools.",
        percentage: 75
      },
      education: "Bachelor's in Design and Technology",
      educationScore: {
        level: "High",
        percentage: 85,
        description:
          "Education aligns with UI/UX focus and frontend development."
      }
    }
  },
  {
    id: "4",
    name: "Amit Sharma",
    match: "high",
    score: "84",
    aboutTheUser:
      "Senior frontend engineer with expertise in Angular, RxJS, and scalable enterprise solutions.",
    jobMatchIssues:
      "Needs stronger grasp of modern React ecosystem if required for cross-team collaboration.",
    location: "Delhi, India",
    candidateStage: "Rejected",
    recommendationForInterview: {
      recommended: "No",
      reason:
        "Amit's Angular expertise is solid, but lack of React experience may be a blocker for this role."
    },
    suggestedInterviewFocusAreas: [
      "Advanced RxJS patterns",
      "Migrating from Angular to React",
      "Component-driven architecture"
    ],
    candidateAssessment: {
      locationFit: {
        level: "High",
        description:
          "Delhi-based with no relocation constraints.",
        percentage: 90
      },
      relevantExperience: {
        level: "High",
        description:
          "6 years in Angular development for enterprise clients.",
        percentage: 92
      },
      technicalSkillScore: {
        level: "Medium",
        description:
          "Strong in Angular but average in React.",
        percentage: 70
      },
      education: "Master's in Computer Science",
      educationScore: {
        level: "High",
        percentage: 90,
        description:
          "Master's degree provides advanced understanding of computer science concepts."
      }
    }
  },
  {
    id: "5",
    name: "Priya Menon",
    match: "high",
    score: "88",
    aboutTheUser:
      "Frontend developer with focus on Next.js and server-side rendering for SEO-optimized web applications.",
    jobMatchIssues:
      "Needs more exposure to backend integration beyond REST APIs.",
    location: "Kochi, India",
    candidateStage: "Offer",
    recommendationForInterview: {
      recommended: "Yes",
      reason:
        "Priya's Next.js expertise and SSR knowledge make her highly suitable for SEO-heavy projects."
    },
    suggestedInterviewFocusAreas: [
      "Server-side rendering and static generation",
      "API integration best practices",
      "GraphQL basics"
    ],
    candidateAssessment: {
      locationFit: {
        level: "High",
        description:
          "Based in Kochi and open to relocation.",
        percentage: 88
      },
      relevantExperience: {
        level: "High",
        description:
          "3 years of experience in Next.js and React.",
        percentage: 85
      },
      technicalSkillScore: {
        level: "High",
        description:
          "Excellent in Next.js, React, and Tailwind CSS.",
        percentage: 90
      },
      education: "Bachelor's in Computer Applications",
      educationScore: {
        level: "Medium",
        percentage: 78,
        description:
          "Bachelor's degree relevant to software development."
      }
    }
  }
],
3:[ // Data Scientist
  {
    id: "1",
    name: "Arjun Mehta",
    match: "high",
    score: "90",
    aboutTheUser:
      "Data Scientist with 4 years of experience in predictive modeling, data visualization, and machine learning deployment. Skilled in Python, R, and SQL.",
    jobMatchIssues:
      "Needs more exposure to deep learning frameworks like TensorFlow and PyTorch.",
    location: "Bangalore, India",
    candidateStage: "Interview Requested",
    recommendationForInterview: {
      recommended: "Yes",
      reason:
        "Arjun’s strong foundation in statistical modeling and ML pipelines makes him a strong candidate, but further discussion is needed on deep learning capabilities."
    },
    suggestedInterviewFocusAreas: [
      "Model deployment with Flask and FastAPI",
      "Experience with TensorFlow or PyTorch",
      "Feature engineering and selection techniques"
    ],
    candidateAssessment: {
      locationFit: {
        level: "High",
        description:
          "Located in Bangalore, open to hybrid or remote work, fits the job’s location flexibility.",
        percentage: 92
      },
      relevantExperience: {
        level: "High",
        description:
          "4 years in data science roles with exposure to predictive modeling and real-time analytics.",
        percentage: 88
      },
      technicalSkillScore: {
        level: "High",
        description:
          "Strong in Python, R, SQL, and ML libraries like scikit-learn and XGBoost.",
        percentage: 90
      },
      education: "Master's in Data Science",
      educationScore: {
        level: "High",
        percentage: 95,
        description:
          "Master’s degree in Data Science provides deep theoretical and applied knowledge."
      }
    }
  },
  {
    id: "2",
    name: "Neha Kapoor",
    match: "high",
    score: "85",
    aboutTheUser:
      "Data Scientist specializing in NLP and text analytics with 3 years of experience building chatbot and sentiment analysis solutions.",
    jobMatchIssues:
      "Needs clarification on handling large-scale data processing with Spark.",
    location: "Hyderabad, India",
    candidateStage: "Screening",
    recommendationForInterview: {
      recommended: "Yes",
      reason:
        "Neha’s NLP expertise fits well with project needs; big data handling skills should be validated."
    },
    suggestedInterviewFocusAreas: [
      "Large-scale text preprocessing techniques",
      "Spark and distributed data processing",
      "Transformer models and BERT"
    ],
    candidateAssessment: {
      locationFit: {
        level: "Medium",
        description:
          "Based in Hyderabad, open to relocation but prefers remote work.",
        percentage: 78
      },
      relevantExperience: {
        level: "High",
        description:
          "3 years in NLP-focused roles, delivering production-ready models.",
        percentage: 85
      },
      technicalSkillScore: {
        level: "High",
        description:
          "Proficient in Python, spaCy, Hugging Face Transformers, and TensorFlow.",
        percentage: 88
      },
      education: "Bachelor's in Computer Science",
      educationScore: {
        level: "High",
        percentage: 85,
        description:
          "Bachelor’s degree provides strong programming and analytical skills."
      }
    }
  },
  {
    id: "3",
    name: "Vikram Singh",
    match: "high",
    score: "88",
    aboutTheUser:
      "Data Scientist with expertise in computer vision and image analytics, including object detection and classification models.",
    jobMatchIssues:
      "Needs to improve MLOps knowledge for scalable deployments.",
    location: "Delhi, India",
    candidateStage: "Interviewing",
    recommendationForInterview: {
      recommended: "Yes",
      reason:
        "Vikram’s computer vision skills are rare and valuable; MLOps readiness to be evaluated."
    },
    suggestedInterviewFocusAreas: [
      "MLOps best practices with MLflow",
      "Transfer learning with pre-trained CNNs",
      "Image preprocessing pipelines"
    ],
    candidateAssessment: {
      locationFit: {
        level: "High",
        description:
          "Based in Delhi, available for immediate relocation or remote work.",
        percentage: 90
      },
      relevantExperience: {
        level: "Medium",
        description:
          "2 years of experience in computer vision; solid but still growing.",
        percentage: 75
      },
      technicalSkillScore: {
        level: "High",
        description:
          "Skilled in OpenCV, TensorFlow, PyTorch, and YOLO frameworks.",
        percentage: 88
      },
      education: "Bachelor's in Artificial Intelligence",
      educationScore: {
        level: "High",
        percentage: 90,
        description:
          "Bachelor’s degree focused on AI with relevant coursework in vision models."
      }
    }
  },
  {
    id: "4",
    name: "Priyanka Nair",
    match: "medium",
    score: "72",
    aboutTheUser:
      "Data Scientist experienced in business intelligence and dashboard creation, bridging the gap between analytics and decision-making.",
    jobMatchIssues:
      "Needs more exposure to advanced statistical modeling techniques.",
    location: "Kochi, India",
    candidateStage: "Rejected",
    recommendationForInterview: {
      recommended: "No",
      reason:
        "Strong BI skills but insufficient statistical modeling experience for this role."
    },
    suggestedInterviewFocusAreas: [
      "Advanced statistical techniques",
      "Time series forecasting",
      "Data storytelling"
    ],
    candidateAssessment: {
      locationFit: {
        level: "High",
        description:
          "Located in Kochi with no relocation constraints.",
        percentage: 88
      },
      relevantExperience: {
        level: "Medium",
        description:
          "4 years in BI roles with some exposure to predictive analytics.",
        percentage: 70
      },
      technicalSkillScore: {
        level: "Medium",
        description:
          "Good at Power BI, Tableau, SQL, and Excel, but limited ML experience.",
        percentage: 72
      },
      education: "Bachelor's in Statistics",
      educationScore: {
        level: "High",
        percentage: 88,
        description:
          "Degree in Statistics provides strong data analysis fundamentals."
      }
    }
  },
  {
    id: "5",
    name: "Siddharth Rao",
    match: "high",
    score: "90",
    aboutTheUser:
      "Senior Data Scientist specializing in recommendation systems and personalization algorithms for e-commerce.",
    jobMatchIssues:
      "Needs to improve documentation and code readability for cross-team collaboration.",
    location: "Pune, India",
    candidateStage: "Offer",
    recommendationForInterview: {
      recommended: "Yes",
      reason:
        "Siddharth’s expertise in recommendation engines is a strong match for the role."
    },
    suggestedInterviewFocusAreas: [
      "Collaborative and content-based filtering",
      "Matrix factorization and embeddings",
      "AB testing for recommendation systems"
    ],
    candidateAssessment: {
      locationFit: {
        level: "High",
        description:
          "Based in Pune, available for hybrid work.",
        percentage: 92
      },
      relevantExperience: {
        level: "High",
        description:
          "6 years of experience in e-commerce data science projects.",
        percentage: 94
      },
      technicalSkillScore: {
        level: "High",
        description:
          "Strong in Python, Spark, and recommendation system algorithms.",
        percentage: 90
      },
      education: "Master's in Machine Learning",
      educationScore: {
        level: "High",
        percentage: 96,
        description:
          "Advanced degree in ML aligns perfectly with the job requirements."
      }
    }
  }
]


}
