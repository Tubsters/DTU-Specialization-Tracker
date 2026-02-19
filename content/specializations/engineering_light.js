// content/engineering_light_specializations.js
// =========================
// DTU MSc in Engineering Light – specializations
// Source: DTU specialization pages
// =========================

globalThis.DTU_ENGLIGHT_SPECIALIZATIONS = {
  "instrumentations-and-applications": {
    name: "Instrumentations and Applications",
    requiredEcts: 30, // 10 mandatory + min 20 additional
    note: "Mandatory 10 ECTS + pick at least 20 ECTS from the programme-specific list.",
    courses: {
      // Mandatory
      34041: { ects: 5, title: "Waveguide optics", mandatory: true },
      34061: {
        ects: 5,
        title: "Optical measurement methods and signal analysis",
        mandatory: true,
      },

      // Pick at least 20 ECTS from this list
      22603: { ects: 5, title: "Light microscopy for life science" },
      34032: { ects: 5, title: "Optical properties of solids" },
      34042: { ects: 5, title: "Quantum photonic communication" },
      34052: { ects: 10, title: "Nonlinear optics" },
      34060: {
        ects: 5,
        title: "Ultrafast optics: fundamentals and applications",
      },
      34130: {
        ects: 10,
        title: "Fundamentals of fibre-optic communication systems",
      },
      34153: { ects: 5, title: "Physical concepts in optical communication" },
      34156: { ects: 5, title: "Advanced Optical Communication Systems" },
      34430: { ects: 5, title: "Introduction to biophotonics" },
      34431: { ects: 5, title: "Optical biosensors" },
      34440: { ects: 5, title: "Novel optical fibers in life sciences" },
      34540: {
        ects: 5,
        title:
          "Light emitting diodes and photovoltaics for energy applications",
      },
      34542: { ects: 5, title: "Artificial lighting, science and practice" },
    },
  },

  "materials-and-components": {
    name: "Materials and Components",
    requiredEcts: 30, // 20 mandatory + min 10 additional
    note: "Mandatory 20 ECTS + pick at least 10 ECTS from the programme-specific list.",
    courses: {
      // Mandatory (DTU page lists both under “mandatory”)
      10855: {
        ects: 10,
        title: "Advanced fabrication of micro- and nanostructures",
        mandatory: true,
      },
      34062: {
        ects: 10,
        title: "Photonic integrated circuits",
        mandatory: true,
      },

      // Pick at least 10 ECTS from this list
      10380: { ects: 10, title: "Quantum Optics" },
      34032: { ects: 5, title: "Optical properties of solids" },
      34041: { ects: 5, title: "Waveguide optics" },
      34051: { ects: 10, title: "Nanophotonics" },
      34052: { ects: 10, title: "Nonlinear optics" },
      34053: { ects: 5, title: "Numerical methods in photonics" },
      34060: {
        ects: 5,
        title: "Ultrafast optics: fundamentals and applications",
      },
      34130: {
        ects: 10,
        title: "Fundamentals of fibre-optic communication systems",
      },
      34153: { ects: 5, title: "Physical concepts in optical communication" },
      34156: { ects: 5, title: "Advanced Optical Communication Systems" },
      34430: { ects: 5, title: "Introduction to biophotonics" },
      34539: {
        ects: 5,
        title:
          "Design, fabrication and characterization of optical planar waveguide components",
      },
    },
  },

  "quantum-photonics": {
    name: "Quantum Photonics",
    requiredEcts: 30, // 10 mandatory + min 20 additional
    note: "Mandatory 10 ECTS + pick at least 20 ECTS from the programme-specific list.",
    courses: {
      // Mandatory
      34051: { ects: 10, title: "Nanophotonics", mandatory: true },

      // Pick at least 20 ECTS from this list
      10380: { ects: 10, title: "Quantum Optics" },
      10855: {
        ects: 10,
        title: "Advanced fabrication of micro- and nanostructures",
      },
      34032: { ects: 5, title: "Optical properties of solids" },
      34041: { ects: 5, title: "Waveguide optics" },
      34042: { ects: 5, title: "Quantum photonic communication" },
      34052: { ects: 10, title: "Nonlinear optics" },
      34053: { ects: 5, title: "Numerical methods in photonics" },
      34062: { ects: 10, title: "Photonic integrated circuits" },
      34153: { ects: 5, title: "Physical concepts in optical communication" },
    },
  },
};
