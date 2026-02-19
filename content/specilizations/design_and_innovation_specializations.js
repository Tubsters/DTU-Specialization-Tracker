// content/design_and_innovation_specializations.js
// =========================
// DTU MSc in Design and Innovation specializations
// Requirement on DTU pages: at least 10 ECTS from each of two course groups (20 ECTS total).
// =========================

globalThis.DTU_DESIGNINNOV_SPECIALIZATIONS = {
  "design-for-circularity-and-sustainability": {
    name: "Design for Circularity & Sustainability",
    requiredEcts: 20,
    note: "Requirement: take at least 10 ECTS from each of the two course groups (20 ECTS total).",
    courses: {
      // Course Group 1: Systematic Design (min 10 ECTS)
      41073: {
        ects: 10,
        title: "Development and operation of product/service-systems",
      },
      41084: { ects: 5, title: "Biologically Inspired Design" },
      63851: { ects: 5, title: "Project Management" },

      // Course Group 2: Design for Technology & People (min 10 ECTS)
      12240: {
        ects: 5,
        title: "Environmental Management, innovation and Ethics",
      },
      12250: {
        ects: 5,
        title: "Next Generation [] Action - Sustainable by Design",
      },
      12772: {
        ects: 10,
        title: "Life Cycle Assessment of Products and Systems",
      },
      41636: { ects: 5, title: "Design for Circular Economy" },
    },
  },

  "design-of-complex-technical-systems": {
    name: "Design of Complex Technical Systems (Systems Engineering)",
    requiredEcts: 20,
    note: "Requirement: take at least 10 ECTS from each of the two course groups (20 ECTS total). (Group 2 includes an OR choice.)",
    courses: {
      // Course Group 1: Systematic Design (min 10 ECTS)
      41083: { ects: 5, title: "Technology platforms and architectures" },
      41635: { ects: 5, title: "Robust design of products and mechanisms" },
      41637: {
        ects: 10,
        title: "Mass Customization - application of product configuration",
      },
      41638: { ects: 5, title: "Complexity Management" },

      // Course Group 2: Design for People & Society (min 10 ECTS)
      38103: {
        ects: 10,
        title: "X-Tech Entrepreneurship",
        alternativeGroup: "entrepreneurship",
      },
      38102: {
        ects: 5,
        title: "Technology Entrepreneurship",
        alternativeGroup: "entrepreneurship",
      },
      38108: { ects: 5, title: "Technology and Innovation Management" },
    },
  },

  "design-of-smart-products-and-systems": {
    name: "Design of Smart Products & Systems",
    requiredEcts: 20,
    note: "Requirement: take at least 10 ECTS from each of the two course groups (20 ECTS total).",
    courses: {
      // Course Group 1: Systematic Design (min 10 ECTS)
      "02830": {
        ects: 10,
        title: "Advanced Project in Digital Media Engineering",
      },
      34365: { ects: 5, title: "IoT Prototyping" },
      34366: { ects: 5, title: "Intelligent systems" },
      34367: { ects: 5, title: "Project in Intelligent Systems" },
      38113: { ects: 5, title: "Applied AI for Entrepreneurs" },

      // Course Group 2: Design for People & Society (min 10 ECTS)
      "02266": { ects: 5, title: "User Experience Engineering" },
      "02806": { ects: 5, title: "Social data analysis and visualization" },
      "02808": {
        ects: 10,
        title: "Personal Data Interaction for Mobile and Wearables",
      },
    },
  },
};
