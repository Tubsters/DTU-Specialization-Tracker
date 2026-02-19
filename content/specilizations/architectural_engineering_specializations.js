// content/architectural_engineering_specializations.js
// =========================
// DTU MSc in Architectural Engineering specializations
// =========================

globalThis.DTU_ARCHENG_SPECIALIZATIONS = {
  "indoor-environment": {
    name: "Indoor Environment",
    requiredEcts: 25,
    note: "",
    courses: {
      12360: { ects: 10, title: "Indoor Climate" },
      12361: { ects: 10, title: "Ventilation and Climatic Systems" },
      12362: { ects: 5, title: "Daylighting and Lighting" },
      12363: {
        ects: 5,
        title:
          "Simulation of indoor environment and energy consumption using IDA ICE",
      },
      12611: { ects: 5, title: "Heat and mass transfer in buildings" },
      34542: { ects: 5, title: "Artificial lighting, science and practice" },
      34844: { ects: 5, title: "Building acoustics" },
      34850: { ects: 10, title: "Architectural acoustics" },
      41462: { ects: 5, title: "Building Performance Simulation" },
      41465: { ects: 5, title: "Computational Fluid Dynamics for Buildings" },
      41466: { ects: 5, title: "Sustainable heating and cooling of buildings" },
    },
  },

  "energy-systems-design": {
    name: "Energy Systems Design",
    requiredEcts: 25,
    note: "",
    courses: {
      12361: { ects: 10, title: "Ventilation and Climatic Systems" },
      28870: { ects: 5, title: "Energy and Sustainability" },
      41461: { ects: 5, title: "Building Integrated Photovoltaics" },
      41462: { ects: 5, title: "Building Performance Simulation" },
      41463: { ects: 10, title: "High performance buildings" },
      41464: { ects: 10, title: "Solar Heating Systems" },
      41465: { ects: 5, title: "Computational Fluid Dynamics for Buildings" },
      41466: { ects: 5, title: "Sustainable heating and cooling of buildings" },
      41469: { ects: 5, title: "Solar resource assessment and forecasting" },
    },
  },

  "structural-design": {
    name: "Structural Design",
    requiredEcts: 25,
    note: "",
    courses: {
      12612: { ects: 5, title: "Concrete Technology" },
      41832: { ects: 5, title: "Experimental Structural Mechanics" },
      41933: { ects: 5, title: "Structural Fire Safety Design" },
      41935: { ects: 5, title: "Super-light structures" },
      41937: {
        ects: 5,
        title: "Structural design of precast concrete buildings",
      },
      41961: {
        ects: 5,
        title:
          "Computational Structural Modelling 2: Non-linear Finite Element Method",
      },
      41963: { ects: 5, title: "Advanced Concrete Structures" },
      41969: { ects: 5, title: "Probabilistic Modelling in Civil Engineering" },
      41972: { ects: 5, title: "Plated Steel Structures" },
    },
  },

  "digital-design-systems": {
    name: "Digital Design Systems",
    requiredEcts: 25,
    note: "",
    courses: {
      "02180": { ects: 5, title: "Introduction to Artificial Intelligence" },
      "02282": { ects: 7.5, title: "Algorithms for Massive Data Sets" },
      "02452": { ects: 5, title: "Machine Learning" },
      22150: { ects: 5, title: "Introduction to Systems Biology; MSc" },
      41083: { ects: 5, title: "Technology platforms and architectures" },
      41084: { ects: 5, title: "Biologically Inspired Design" },
      41934: { ects: 5, title: "Advanced Building Information Modeling (BIM)" },
      41938: { ects: 5, title: "Agile Prototyping" },
      41940: {
        ects: 5,
        title: "Advanced Digital Technologies in Construction Projects",
      },
    },
  },

  "arctic-and-extreme-environments": {
    name: "Arctic and Extreme Environments",
    requiredEcts: 25,
    note: "Arctic semester can replace compulsory course 41936 (Advanced Building Design).",
    courses: {
      12611: { ects: 5, title: "Heat and mass transfer in buildings" },
      12856: { ects: 5, title: "Natural Hazards in the Arctic" },
      30857: { ects: 5, title: "Extreme Climate and Physical Nature" },
      41462: { ects: 5, title: "Building Performance Simulation" },
      41463: { ects: 10, title: "High performance buildings" },
      41465: { ects: 5, title: "Computational Fluid Dynamics for Buildings" },
      41832: { ects: 5, title: "Experimental Structural Mechanics" },
      41881: {
        ects: 15,
        title: "Sustainable building in extreme environments",
      },
      41882: { ects: 5, title: "The Arctic Infrastructure and Society" },
    },
  },

  acoustics: {
    name: "Acoustics",
    requiredEcts: 25,
    note: "",
    courses: {
      22001: { ects: 5, title: "Acoustic signal processing" },
      22006: { ects: 5, title: "Acoustic Communication" },
      34844: { ects: 5, title: "Building acoustics" },
      34846: { ects: 5, title: "Environmental acoustics" },
      34850: { ects: 10, title: "Architectural acoustics" },
      34880: { ects: 10, title: "Structure-borne sound" },
      41465: { ects: 5, title: "Computational Fluid Dynamics for Buildings" },
    },
  },

  "sustainability-and-lca": {
    name: "Sustainability and LCA",
    requiredEcts: 25,
    note: "",
    courses: {
      12132: { ects: 5, title: "LCA Modelling of Waste Management Systems" },
      12614: { ects: 5, title: "Brick and masonry" },
      12615: {
        ects: 5,
        title: "System sustainability tools for the built environment",
      },
      12772: {
        ects: 10,
        title: "Life Cycle Assessment of Products and Systems",
      },
      12773: { ects: 5, title: "Advanced life cycle assessment methods" },
      28870: { ects: 5, title: "Energy and Sustainability" },
      41636: { ects: 5, title: "Design for Circular Economy" },
      42014: { ects: 5, title: "Environmental and Resource Economics" },
    },
  },
};
