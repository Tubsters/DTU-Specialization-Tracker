// content/earth_space_physics_specializations.js
// =========================
// DTU MSc in Earth and Space Physics and Engineering specializations
// Source: DTU specialization pages (requirements + programme-specific course lists)
// =========================

globalThis.DTU_ESPACE_SPECIALIZATIONS = {
  "earth-observation": {
    name: "Earth Observation",
    requiredEcts: 20,
    note: "Requirement: ≥15 ECTS in Measurement Technology (30350 is mandatory + choose ≥5 ECTS) AND ≥5 ECTS in Physical Large Scale Structures and Processes.",
    courses: {
      // Measurement Technology (15 ECTS total, 30350 mandatory)
      30350: { ects: 10, title: "Remote Sensing", mandatory: true },
      "02456": { ects: 5, title: "Deep learning" },
      "02506": { ects: 5, title: "Advanced Image Analysis" },
      30340: { ects: 10, title: "Radar and Radiometer Systems" },
      30540: { ects: 5, title: "Mapping from Aerial and Satellite Images" },
      30555: { ects: 5, title: "Microwave remote sensing models and data" },
      30574: {
        ects: 5,
        title: "Earth observations for monitoring changes (EO4Change)",
      },

      // Physical Large Scale Structures and Processes (≥5 ECTS)
      25302: { ects: 5, title: "Physical oceanography" },
      30552: { ects: 5, title: "Satellite Geodesy" },
      30745: { ects: 5, title: "Earth and Planetary Magnetism" },
      30752: { ects: 5, title: "Cryosphere physics and observation" },
      30755: { ects: 5, title: "Climate change - physics and observations" },
    },
  },

  "earth-and-planetary-physics": {
    name: "Earth and Planetary Physics",
    requiredEcts: 30,
    note: "Requirement: ≥15 ECTS in Measurement Technology AND ≥15 ECTS in Physical Large Scale Structures and Processes.",
    courses: {
      // Measurement Technology (≥15 ECTS)
      "02456": { ects: 5, title: "Deep learning" },
      30300: { ects: 10, title: "Introduction to Satellite Systems" },
      30310: { ects: 5, title: "Space Systems Engineering" },
      30545: {
        ects: 5,
        title: "Analysis of spatial and temporal data within geoscience",
      },
      30554: { ects: 5, title: "Global Navigation Satellite Systems" },
      30760: {
        ects: 5,
        title:
          "Inverse Problems and Machine Learning in Earth and Space Physics",
      },

      // Physical Large Scale Structures and Processes (≥15 ECTS)
      25302: { ects: 5, title: "Physical oceanography" },
      30552: { ects: 5, title: "Satellite Geodesy" },
      30561: { ects: 5, title: "Physical Geodesy" },
      30720: {
        ects: 5,
        title: "Space Physics - Physics of the space environment",
      },
      30742: { ects: 5, title: "Exoplanets" },
      30745: { ects: 5, title: "Earth and Planetary Magnetism" },
      30752: { ects: 5, title: "Cryosphere physics and observation" },
    },
  },

  "mapping-and-navigation": {
    name: "Mapping and Navigation",
    requiredEcts: 25,
    note: "Requirement: mandatory 30540 (5 ECTS) + ≥10 ECTS in Measurement Technology list + mandatory 30552 + 30561 (10 ECTS). (30752 is recommended by head of specialization.)",
    courses: {
      // Mandatory measurement technology
      30540: {
        ects: 5,
        title: "Mapping from Aerial and Satellite Images",
        mandatory: true,
      },

      // Measurement Technology (≥10 ECTS from list)
      30350: { ects: 10, title: "Remote Sensing" },
      30510: { ects: 5, title: "GPS, GIS and Surveying" },
      30554: { ects: 5, title: "Global Navigation Satellite Systems" },
      30574: {
        ects: 5,
        title: "Earth observations for monitoring changes (EO4Change)",
      },

      // Mandatory physical large scale
      30552: { ects: 5, title: "Satellite Geodesy", mandatory: true },
      30561: { ects: 5, title: "Physical Geodesy", mandatory: true },

      // Recommended (still relevant)
      30752: { ects: 5, title: "Cryosphere physics and observation" },
    },
  },

  "space-research": {
    name: "Space Research",
    requiredEcts: 25,
    note: "Requirement: ≥20 ECTS in Measurement Technology list AND ≥5 ECTS in Physical Large Scale Structures and Processes.",
    courses: {
      // Measurement Technology (≥20 ECTS)
      30320: { ects: 10, title: "Spacecraft Instrumentation Systems" },
      30330: { ects: 10, title: "Image Analysis with Microcomputer" },
      30784: {
        ects: 5,
        title: "X-ray and gamma-ray detectors for space instrumentation",
      },
      30785: {
        ects: 5,
        title: "Scientific instrumentation for Astronomical telescopes",
      },
      30794: { ects: 5, title: "Astrophysical Data Analyses" },

      // Physical Large Scale Structures and Processes (≥5 ECTS)
      10405: { ects: 5, title: "Theory of Relativity" },
      30428: { ects: 5, title: "Advanced electromagnetics" },
      30720: {
        ects: 5,
        title: "Space Physics - Physics of the space environment",
      },
      30742: { ects: 5, title: "Exoplanets" },
      30791: { ects: 5, title: "Physical processes in astronomy" },
    },
  },

  "space-systems-engineering": {
    name: "Space Systems Engineering",
    requiredEcts: 30,
    note: "Requirement: mandatory 30300 + 30310 (15 ECTS) + ≥10 ECTS in Measurement Technology list + ≥5 ECTS in Physical Large Scale Structures and Processes.",
    courses: {
      // Mandatory measurement technology
      30300: {
        ects: 10,
        title: "Introduction to Satellite Systems",
        mandatory: true,
      },
      30310: { ects: 5, title: "Space Systems Engineering", mandatory: true },

      // Measurement Technology (≥10 ECTS from list)
      30021: { ects: 5, title: "Digital Instrumentation" },
      30320: { ects: 10, title: "Spacecraft Instrumentation Systems" },
      30330: { ects: 10, title: "Image Analysis with Microcomputer" },
      30340: { ects: 10, title: "Radar and Radiometer Systems" },

      // Physical Large Scale Structures and Processes (≥5 ECTS)
      30720: {
        ects: 5,
        title: "Space Physics - Physics of the space environment",
      },
      30745: { ects: 5, title: "Earth and Planetary Magnetism" },
      30752: { ects: 5, title: "Cryosphere physics and observation" },
      30791: { ects: 5, title: "Physical processes in astronomy" },
    },
  },

  "space-tech-entrepreneurship": {
    name: "SpaceTech Entrepreneurship",
    requiredEcts: 45,
    note: "Requirement: mandatory 30300 + 30310 (15 ECTS) + ≥10 ECTS in Measurement Technology list + ≥5 ECTS in Physical Large-Scale Structures and Processes + mandatory entrepreneurship courses (38103 + 38301 = 15 ECTS).",
    courses: {
      // Mandatory measurement technology
      30300: {
        ects: 10,
        title: "Introduction to Satellite Systems",
        mandatory: true,
      },
      30310: { ects: 5, title: "Space Systems Engineering", mandatory: true },

      // Measurement Technology (≥10 ECTS from list)
      "02456": { ects: 5, title: "Deep learning" },
      "02506": { ects: 5, title: "Advanced Image Analysis" },
      30021: { ects: 5, title: "Digital Instrumentation" },
      30320: { ects: 10, title: "Spacecraft Instrumentation Systems" },
      30330: { ects: 10, title: "Image Analysis with Microcomputer" },
      30340: { ects: 10, title: "Radar and Radiometer Systems" },
      30350: { ects: 10, title: "Remote Sensing" },
      30510: { ects: 5, title: "GPS, GIS and Surveying" },
      30540: { ects: 5, title: "Mapping from Aerial and Satellite Images" },
      30545: {
        ects: 5,
        title: "Analysis of spatial and temporal data within geoscience",
      },
      30554: { ects: 5, title: "Global Navigation Satellite Systems" },
      30555: { ects: 5, title: "Microwave remote sensing models and data" },
      30574: {
        ects: 5,
        title: "Earth observations for monitoring changes (EO4Change)",
      },
      34269: { ects: 5, title: "Computational imaging and spectroscopy" },

      // Physical Large-Scale Structures and Processes (≥5 ECTS)
      25302: { ects: 5, title: "Physical oceanography" },
      30428: { ects: 5, title: "Advanced electromagnetics" },
      30552: { ects: 5, title: "Satellite Geodesy" },
      30745: { ects: 5, title: "Earth and Planetary Magnetism" },
      30752: { ects: 5, title: "Cryosphere physics and observation" },
      30755: { ects: 5, title: "Climate change - physics and observations" },

      // Mandatory entrepreneurship
      38103: { ects: 10, title: "X-Tech Entrepreneurship", mandatory: true },
      38301: {
        ects: 5,
        title: "Module 1: Start-up Exploration",
        mandatory: true,
      },
    },
  },
};
