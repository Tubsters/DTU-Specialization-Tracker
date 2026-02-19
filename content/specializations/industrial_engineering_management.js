// content/specializations/industrial_engineering_management.js
// MSc in Industrial Engineering and Management — Specializations (DTU)
// Source: DTU specialization pages

globalThis.DTU_IEM_SPECIALIZATIONS = {
  "management-and-analysis-of-operations": {
    name: "Management and Analysis of Operations",
    // DTU page: 3 mandatory courses (15 ECTS) + choose remaining 15 ECTS from list
    requiredEcts: 30,
    note: "Mandatory 15 ECTS + choose at least 15 ECTS from the list (tagged as alt: Choose 15 ECTS). Note: both 42112 and 42114 must be completed.",
    courses: {
      // Mandatory
      42112: {
        ects: 5,
        title: "Mathematical Programming Modelling",
        mandatory: true,
      },
      42114: { ects: 5, title: "Integer Programming", mandatory: true },
      42403: {
        ects: 5,
        title:
          "Advanced Operations Management for Production and Service Systems",
        mandatory: true,
      },

      // Choose remaining 15 ECTS from:
      42115: {
        ects: 5,
        title: "Network Optimization",
        alternativeGroup: "Choose 15 ECTS",
      },
      42136: {
        ects: 5,
        title: "Large Scale Optimization using Decomposition",
        alternativeGroup: "Choose 15 ECTS",
      },
      42137: {
        ects: 5,
        title: "Optimization using metaheuristics",
        alternativeGroup: "Choose 15 ECTS",
      },
      42380: {
        ects: 5,
        title: "Supply Chain Analytics",
        alternativeGroup: "Choose 15 ECTS",
      },
    },
  },

  "production-and-project-management": {
    name: "Production and Project Management",
    // DTU page: 1 mandatory course (10 ECTS) + choose remaining 15 ECTS from list
    requiredEcts: 25,
    note: "Mandatory 10 ECTS + choose at least 15 ECTS from the list (tagged as alt: Choose 15 ECTS).",
    courses: {
      // Mandatory
      41637: {
        ects: 10,
        title: "Mass Customization - application of product configuration",
        mandatory: true,
      },

      // Choose remaining 15 ECTS from:
      "02431": {
        ects: 5,
        title: "Risk Management",
        alternativeGroup: "Choose 15 ECTS",
      },
      41073: {
        ects: 10,
        title: "Development and operation of product/service-systems",
        alternativeGroup: "Choose 15 ECTS",
      },
      41638: {
        ects: 5,
        title: "Complexity Management",
        alternativeGroup: "Choose 15 ECTS",
      },
      42403: {
        ects: 5,
        title:
          "Advanced Operations Management for Production and Service Systems",
        alternativeGroup: "Choose 15 ECTS",
      },
    },
  },

  "supply-chain-management-and-logistics": {
    name: "Supply Chain Management and Logistics",
    // DTU page: 2 mandatory courses (10 ECTS) + choose remaining 15 ECTS from list
    requiredEcts: 25,
    note: "Mandatory 10 ECTS + choose at least 15 ECTS from the list (tagged as alt: Choose 15 ECTS). DTU note: 42114 must be completed in the mandatory category instead of 42112.",
    courses: {
      // Mandatory (programme specific)
      42380: { ects: 5, title: "Supply Chain Analytics", mandatory: true },
      42403: {
        ects: 5,
        title:
          "Advanced Operations Management for Production and Service Systems",
        mandatory: true,
      },

      // DTU note: 42114 instead of 42112 (these are not in the “programme specific” list on the page,
      // but adding 42114 here helps the extension flag it for students).
      42114: {
        ects: 5,
        title: "Integer Programming (required instead of 42112)",
        mandatory: true,
        alternativeGroup: "Mandatory category note",
      },
      42112: {
        ects: 5,
        title:
          "Mathematical Programming Modelling (replaced by 42114 for this spec)",
        alternativeGroup: "Mandatory category note",
      },

      // Choose remaining 15 ECTS from:
      "02431": {
        ects: 5,
        title: "Risk Management",
        alternativeGroup: "Choose 15 ECTS",
      },
      42115: {
        ects: 5,
        title: "Network Optimization",
        alternativeGroup: "Choose 15 ECTS",
      },
      42404: {
        ects: 5,
        title: "Maritime Logistics and Management",
        alternativeGroup: "Choose 15 ECTS",
      },
      42879: {
        ects: 5,
        title: "Decision Support and Strategic Assessment",
        alternativeGroup: "Choose 15 ECTS",
      },
      63881: {
        ects: 5,
        title: "Railway transport and sustainable logistics",
        alternativeGroup: "Choose 15 ECTS",
      },
    },
  },
};
