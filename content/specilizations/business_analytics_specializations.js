// content/business_analytics_specializations.js
// =========================
// DTU MSc in Business Analytics specializations
// Sources: DTU specialization pages
// =========================

globalThis.DTU_BUSANALYTICS_SPECIALIZATIONS = {
  "predictive-analytics": {
    name: "Predictive Analytics",
    requiredEcts: 20, // 2 mandatory (10) + at least 2 optional (10)
    note: "Requirement (core competence selection): take BOTH mandatory courses below, and at least TWO from the optional list.",
    courses: {
      // Mandatory (both)
      "02456": { ects: 5, title: "Deep learning", mandatory: true },
      42186: {
        ects: 5,
        title: "Model-based machine learning",
        mandatory: true,
      },

      // Optional (choose at least 2)
      "02417": { ects: 5, title: "Time Series Analysis" },
      "02443": { ects: 5, title: "Stochastic Simulation" },
      "02807": { ects: 5, title: "Computational Tools for Data Science" },
      42180: { ects: 5, title: "Quantitative modelling of behaviour" },
      42417: { ects: 5, title: "Simulation in Operations Management" },
    },
  },

  "prescriptive-analytics": {
    name: "Prescriptive Analytics",
    requiredEcts: 25, // 3 courses (15) + at least 2 optional (10)
    note: "Requirement (core competence selection): take the complementary optimization courses so you end up having ALL THREE listed below, and at least TWO from the optional list.",
    courses: {
      // Complementary set (so you have all three)
      42112: {
        ects: 5,
        title: "Mathematical Programming Modelling",
        mandatory: true,
      },
      42114: { ects: 5, title: "Integer Programming", mandatory: true },
      42137: {
        ects: 5,
        title: "Optimization using metaheuristics",
        mandatory: true,
      },

      // Optional (choose at least 2)
      "02435": { ects: 5, title: "Decision-Making Under Uncertainty" },
      42115: { ects: 5, title: "Network Optimization" },
      42136: { ects: 5, title: "Large Scale Optimization using Decomposition" },
      42417: { ects: 5, title: "Simulation in Operations Management" },
    },
  },
};
