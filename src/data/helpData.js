const helpData = {
  introduction: {
    title: "How To Use The App",
    content:
      "Welcome to AI Helper! This section provides a step-by-step guidance on how to use the app, answers common questions, and offers troubleshooting tips.",
  },

  gettingStarted: {
    title: "Getting Started",
    sections: [
      {
        heading: "What is AI Helper?",
        content:
          "AI Helper is a web application designed to help users craft high-quality AI prompts using the Pentagram methodology. By structuring prompts effectively, users get better, more accurate AI-generated responses.",
      },
      {
        heading: "How AI Helper Works",
        steps: [
          "Enter your prompt details using the Pentagram input form (Persona, Context, Task, Output, Constraints).",
          "Submit your prompt to Google Gemini’s API.",
          "View and refine the AI-generated response.",
          "Modify or optimize your inputs for better results.",
        ],
      },
      {
        heading: "Navigating the Interface",
        subsections: [
          {
            name: "Hero Section",
            description:
              "Welcomes end-users and provides a brief app description.",
          },
          {
            name: "Pentagram Input Form",
            description: "Allows a structured input of prompt details.",
          },
          {
            name: "Results Area",
            description: "Displays responses from the AI.",
          },
          {
            name: "Header & Footer",
            description:
              "Contains navigation links, user details, and credits.",
          },
          {
            name: "Help Section",
            description: "Access support, FAQs, and troubleshooting guides.",
          },
        ],
      },
    ],
  },

  faqs: {
    title: "Frequently Asked Questions (FAQs)",
    sections: [
      {
        heading: "Using AI Helper",
        questions: [
          {
            question: "What is the Pentagram methodology?",
            answer:
              "A structured approach to writing AI prompts that improves response accuracy.",
          },
          {
            question: "Do I need an account to use AI Helper?",
            answer:
              "No, but some features (e.g., saving prompts) may require one.",
          },
          {
            question: "Can I edit my prompt after submission?",
            answer:
              "Yes, you can modify individual Pentagram fields and resubmit.",
          },
          {
            question: "Is there a cost to using AI Helper?",
            answer:
              "AI Helper is free to use with Google Gemini’s free-tier API.",
          },
        ],
      },
      {
        heading: "Troubleshooting",
        questions: [
          {
            question: "Why is my AI response blank or irrelevant?",
            answer:
              "Ensure all Pentagram fields are filled in with clear, specific details.",
          },
          {
            question: "Why do I see an error message when submitting a prompt?",
            answer:
              "Possible causes include:\n- Missing required fields.\n- API connection issues.\n- Formatting errors in input.\nCheck the error message for details and try again.",
          },
          {
            question: "How do I reset my prompt inputs?",
            answer:
              "Click the Reset Button next to each field or use the Clear All option.",
          },
          {
            question: "How do I get the best AI responses?",
            answer: "Use clear and detailed inputs. Avoid vague requests.",
          },
        ],
      },
    ],
  },

  advancedFeatures: {
    title: "Advanced Features",
    sections: [
      {
        heading: "Saving & Exporting Prompts",
        features: [
          "Save previous prompts for reuse.",
          "Export responses as PDF or CSV for reference.",
        ],
      },
      {
        heading: "Personalization",
        features: [
          "Store user preferences (e.g., writing style, AI response length).",
          "Display personalized recommendations based on past prompts.",
        ],
      },
      {
        heading: "Analytics & Performance Tracking",
        features: [
          "View session metrics (e.g., number of prompts submitted, success rate).",
          "Track AI accuracy over time.",
        ],
      },
      {
        heading: "Community & Support",
        features: [
          "Join the AI Helper Community Forum to share tips.",
          "Contact support via email or live chat for assistance.",
        ],
        links: {
          forum: "",
          supportEmail: "",
          liveChat: "",
        },
      },
    ],
  },
};

export default helpData;
