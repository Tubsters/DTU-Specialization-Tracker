// content/specializations/sustainable_fisheries_aquaculture.js
// MSc in Sustainable Fisheries and Aquaculture — Specializations (DTU)
//
// DTU specialization overview says: specialization = 30 ECTS of pre-defined courses.
// The specialization subpages list 25 ECTS worth of specialization-specific courses,
// so we include the programme's mandatory Innovation Course II (25352, 5 ECTS)
// to reach 30 ECTS total for the specialization tracker.
//
// Sources:
// - Specializations overview + subpages (Aquaculture / Fisheries...): DTU.dk
// - Curriculum shows Innovation course II mandatory: 25352 Blue Bioeconomy Innovation

globalThis.DTU_SFA_SPECIALIZATIONS = {
  "fisheries-biodiversity-and-resource-management": {
    name: "Fisheries, Biodiversity and Resource Management",
    requiredEcts: 30,
    note: "Tracker uses DTU’s 30 ECTS specialization rule: includes Innovation course II (25352, 5 ECTS) + specialization courses below (25 ECTS total: 10 mandatory + choose 15).",
    courses: {
      // Programme Innovation Course II (included to match DTU's 30 ECTS specialization statement)
      25352: { ects: 5, title: "Blue Bioeconomy Innovation", mandatory: true },

      // Mandatory (10 ECTS)
      25318: {
        ects: 5,
        title:
          "Management, biodiversity, and conservation of aquatic ecosystems",
        mandatory: true,
      },
      25349: {
        ects: 5,
        title: "Applied Fisheries Ecology",
        mandatory: true,
      },

      // Choose 15 ECTS among:
      25312: {
        ects: 5,
        title: "Fisheries systems – management and modelling",
        alternativeGroup: "Choose 15 ECTS",
      },
      25313: {
        ects: 5,
        title:
          "Genetic methods in fisheries and aquatic biodiversity conservation",
        alternativeGroup: "Choose 15 ECTS",
      },
      25335: {
        ects: 5,
        title: "Sustainability of Fish Capture Methods",
        alternativeGroup: "Choose 15 ECTS",
      },
      25336: {
        ects: 5,
        title: "Fish Capture Technology",
        alternativeGroup: "Choose 15 ECTS",
      },
      25342: {
        ects: 5,
        title: "Evidence Based Advice for Aquatic Management",
        alternativeGroup: "Choose 15 ECTS",
      },
      25343: {
        ects: 5,
        title: "Quantitative Modelling of Natural Resources",
        alternativeGroup: "Choose 15 ECTS",
      },
      25353: {
        ects: 5,
        title:
          "Recreation fisheries; Biological impacts; management and human dimensions",
        alternativeGroup: "Choose 15 ECTS",
      },
    },
  },

  aquaculture: {
    name: "Aquaculture",
    requiredEcts: 30,
    note: "Tracker uses DTU’s 30 ECTS specialization rule: includes Innovation course II (25352, 5 ECTS) + specialization courses below (25 ECTS total: 15 mandatory + choose 10).",
    courses: {
      // Programme Innovation Course II (included to match DTU's 30 ECTS specialization statement)
      25352: { ects: 5, title: "Blue Bioeconomy Innovation", mandatory: true },

      // Mandatory (15 ECTS)
      25316: {
        ects: 5,
        title: "Recirculating aquaculture systems",
        mandatory: true,
      },
      25346: {
        ects: 5,
        title: "Water quality in aquaculture",
        mandatory: true,
      },
      25348: {
        ects: 5,
        title: "Low Trophic Aquaculture: shellfish, micro- and macroalgae",
        mandatory: true,
      },

      // Choose 10 ECTS among:
      25315: {
        ects: 5,
        title: "Genetic methods in aquaculture",
        alternativeGroup: "Choose 10 ECTS",
      },
      25317: {
        ects: 5,
        title: "Health management and disease control in aquaculture",
        alternativeGroup: "Choose 10 ECTS",
      },
      25321: {
        ects: 5,
        title: "Fish nutrition and bioenergetics",
        alternativeGroup: "Choose 10 ECTS",
      },
      25322: {
        ects: 5,
        title:
          "Advanced course in recirculating aquaculture systems: Design and application",
        alternativeGroup: "Choose 10 ECTS",
      },
      25326: {
        ects: 5,
        title: "Fish physiology and welfare",
        alternativeGroup: "Choose 10 ECTS",
      },
    },
  },
};
