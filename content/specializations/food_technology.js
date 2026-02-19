// content/specializations/food_technology.js
// MSc in Food Technology — Specializations (DTU)
// Source: DTU specialization pages

globalThis.DTU_FOODTECH_SPECIALIZATIONS = {
  "food-innovation": {
    name: "Food Innovation",
    requiredEcts: 40, // 20 mandatory + at least 20 chosen
    note: "Mandatory programme-specific courses (20 ECTS) + choose at least 20 ECTS among the listed programme-specific courses.",
    courses: {
      // Mandatory
      23216: {
        ects: 10,
        title:
          "Producing new sustainable food ingredients - processes and utilizations",
        mandatory: true,
      },
      23564: {
        ects: 10,
        title: "Integrated product innovation in the food industry",
        mandatory: true,
      },

      // Choose at least 20 ECTS among:
      23206: {
        ects: 5,
        title:
          "Positive microbiology and biotechnology - application of microbes in food production",
      },
      23302: { ects: 5, title: "Food chemistry" },
      23360: {
        ects: 5,
        title: "Practical green extraction and processing technologies",
      },
      23511: { ects: 10, title: "Food production engineering basics" },
      23520: { ects: 10, title: "Food process design" },
      23521: { ects: 5, title: "Hygienic design in the food industry" },
    },
  },

  "food-safety": {
    name: "Food Safety",
    requiredEcts: 40, // minimum (with 28855). If 28857 is chosen, minimum becomes 42.5.
    note: "Mandatory courses + choose at least 20 ECTS among the listed programme-specific courses. Note: choosing 28857 (7.5 ECTS) instead of 28855 (5 ECTS) increases the minimum total to 42.5 ECTS.",
    courses: {
      // Mandatory
      23272: {
        ects: 10,
        title: "Risk analysis in food safety",
        mandatory: true,
      },
      23301: {
        ects: 5,
        title: "Practical chemical food analysis",
        mandatory: true,
      },

      // Mandatory: choose one of (GMP)
      28857: {
        ects: 7.5,
        title:
          "Good Manufacturing Practice (GMP) and quality in pharmaceutical, biotech and food industry - Practical version",
        mandatory: true,
        alternativeGroup: "GMP",
      },
      28855: {
        ects: 5,
        title:
          "Good Manufacturing Practice (GMP) and quality in pharmaceutical, biotech and food industry - Theoretical version",
        mandatory: true,
        alternativeGroup: "GMP",
      },

      // Choose at least 20 ECTS among:
      23210: {
        ects: 5,
        title: "Predictive food microbiology and preservation",
      },
      23302: { ects: 5, title: "Food chemistry" },
      23511: { ects: 10, title: "Food production engineering basics" },
      23521: { ects: 5, title: "Hygienic design in the food industry" },
      23532: { ects: 5, title: "Beer brewing and safe food production" },
      23662: {
        ects: 5,
        title: "Introduction to molecular and reproductive toxicology",
      },
    },
  },
};
