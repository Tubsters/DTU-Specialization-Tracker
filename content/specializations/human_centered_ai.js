// content/specializations/human_centered_ai.js
// MSc in Human-Centered Artificial Intelligence — Specializations (DTU)
// Source: DTU specialization pages

globalThis.DTU_HCAI_SPECIALIZATIONS = {
  "ai-and-cognition": {
    name: "AI and Cognition",
    requiredEcts: 35,
    note: "Choose at least 35 ECTS among the recommended courses.",
    courses: {
      "02180": { ects: 5, title: "Introduction to Artificial Intelligence" },
      "02285": {
        ects: 7.5,
        title: "Artificial Intelligence and Multi-Agent Systems",
      },
      "02455": { ects: 5, title: "Experiment in Cognitive Science" },
      "02456": { ects: 5, title: "Deep learning" },
      "02458": { ects: 5, title: "Cognitive Modelling" },
      "02460": { ects: 5, title: "Advanced Machine Learning" },
      "02471": { ects: 5, title: "Machine learning for signal processing" },
      "02504": { ects: 5, title: "Computer Vision" },
      "02506": { ects: 5, title: "Advanced Image Analysis" },
      "02516": {
        ects: 5,
        title: "Introduction to Deep Learning in Computer Vision",
      },
      "02805": { ects: 10, title: "Social graphs and interactions" },
      "02807": { ects: 5, title: "Computational Tools for Data Science" },
    },
  },

  "machine-learning-at-scale": {
    name: "Machine Learning at Scale",
    requiredEcts: 35,
    note: "Choose at least 35 ECTS among the recommended courses.",
    courses: {
      "02282": { ects: 7.5, title: "Algorithms for Massive Data Sets" },
      "02289": {
        ects: 5,
        title: "Algorithmic Techniques for Modern Data Models",
      },
      "02456": { ects: 5, title: "Deep learning" },
      "02460": { ects: 5, title: "Advanced Machine Learning" },
      "02471": { ects: 5, title: "Machine learning for signal processing" },
      "02476": { ects: 5, title: "Machine Learning Operations" },
      "02477": { ects: 5, title: "Bayesian machine learning" },
      "02582": { ects: 5, title: "Computational Data Analysis" },
      "02613": { ects: 5, title: "Python and High-Performance Computing" },
      "02614": { ects: 5, title: "High-Performance Computing" },
      "02830": {
        ects: 10,
        title: "Advanced Project in Digital Media Engineering",
      },
    },
  },

  "data-science": {
    name: "Data Science",
    requiredEcts: 35,
    note: "Choose at least 35 ECTS among the recommended courses.",
    courses: {
      "02266": { ects: 5, title: "User Experience Engineering" },
      "02282": { ects: 7.5, title: "Algorithms for Massive Data Sets" },
      "02456": { ects: 5, title: "Deep learning" },
      "02458": { ects: 5, title: "Cognitive Modelling" },
      "02476": { ects: 5, title: "Machine Learning Operations" },
      "02805": { ects: 10, title: "Social graphs and interactions" },
      "02806": { ects: 5, title: "Social data analysis and visualization" },
      "02807": { ects: 5, title: "Computational Tools for Data Science" },
      "02808": {
        ects: 10,
        title: "Personal Data Interaction for Mobile and Wearables",
      },
      "02830": {
        ects: 10,
        title: "Advanced Project in Digital Media Engineering",
      },
      38110: { ects: 5, title: "Staging co-creation and creativity" },
    },
  },

  "human-computer-interaction": {
    name: "Human-Computer Interaction",
    requiredEcts: 35,
    note: "Choose at least 35 ECTS among the recommended courses.",
    courses: {
      "02238": { ects: 5, title: "Biometric Systems" },
      "02266": { ects: 5, title: "User Experience Engineering" },
      "02455": { ects: 5, title: "Experiment in Cognitive Science" },
      "02458": { ects: 5, title: "Cognitive Modelling" },
      "02517": {
        ects: 5,
        title: "Responsible AI: Algorithmic fairness and explainability",
      },
      "02805": { ects: 10, title: "Social graphs and interactions" },
      "02807": { ects: 5, title: "Computational Tools for Data Science" },
      "02808": {
        ects: 10,
        title: "Personal Data Interaction for Mobile and Wearables",
      },
      "02830": {
        ects: 10,
        title: "Advanced Project in Digital Media Engineering",
      },
      38110: { ects: 5, title: "Staging co-creation and creativity" },
    },
  },

  "visual-computing": {
    name: "Visual Computing",
    requiredEcts: 35,
    note: "Choose at least 35 ECTS among the courses listed (incl. the additional vision/graphics recommendations on the page).",
    courses: {
      // Main list
      "02504": { ects: 5, title: "Computer Vision" },
      "02516": {
        ects: 5,
        title: "Introduction to Deep Learning in Computer Vision",
      },
      "02561": { ects: 5, title: "Computer Graphics" },
      "02562": { ects: 5, title: "Rendering - Introduction" },
      "02807": { ects: 5, title: "Computational Tools for Data Science" },
      "02830": {
        ects: 10,
        title: "Advanced Project in Digital Media Engineering",
      },

      // Additional (Computer Vision focus)
      "02501": { ects: 5, title: "Advanced Deep Learning in Computer Vision" },
      "02506": { ects: 5, title: "Advanced Image Analysis" },
      "02582": { ects: 5, title: "Computational Data Analysis" },
      "02613": { ects: 5, title: "Python and High-Performance Computing" },
      "02614": { ects: 5, title: "High-Performance Computing" },

      // Additional (Computer Graphics focus)
      "01237": {
        ects: 5,
        title: "Differential geometry and parametric design",
      },
      "02238": { ects: 5, title: "Biometric Systems" },
      "02563": { ects: 5, title: "Generative Methods for Computer Graphics" },
      "02566": { ects: 10, title: "Creating Digital Visual Experiences" },
      "02581": { ects: 5, title: "Geometric Data Analysis and Processing" },
      "02806": { ects: 5, title: "Social data analysis and visualization" },
      "02808": {
        ects: 10,
        title: "Personal Data Interaction for Mobile and Wearables",
      },
    },
  },

  "computer-games": {
    name: "Computer games",
    requiredEcts: 35,
    note: "Mandatory: 02840 + 02841 (30 ECTS). In addition, choose at least 5 ECTS among the recommended courses.",
    courses: {
      // Mandatory
      "02840": {
        ects: 15,
        title: "Computer Game Programming Fundamentals (DADIU)",
        mandatory: true,
      },
      "02841": {
        ects: 15,
        title: "Computer Game Programming in a Production (DADIU)",
        mandatory: true,
      },

      // Choose >= 5 ECTS among
      "02238": { ects: 5, title: "Biometric Systems" },
      "02266": { ects: 5, title: "User Experience Engineering" },
      "02282": { ects: 7.5, title: "Algorithms for Massive Data Sets" },
      "02285": {
        ects: 7.5,
        title: "Artificial Intelligence and Multi-Agent Systems",
      },
      "02561": { ects: 5, title: "Computer Graphics" },
      "02563": { ects: 5, title: "Generative Methods for Computer Graphics" },
      "02566": { ects: 10, title: "Creating Digital Visual Experiences" },
    },
  },
};
