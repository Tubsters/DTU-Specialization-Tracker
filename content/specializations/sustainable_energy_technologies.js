// content/specializations/sustainable_energy_technologies.js
// MSc in Sustainable Energy Technologies — Specializations (DTU)
// Source: DTU specialization pages (programme specific course structure)

globalThis.DTU_SETECH_SPECIALIZATIONS = {
  "bio-based-fuels": {
    name: "Bio-based Fuels",
    requiredEcts: 50,
    note: "Programme Specific courses: Innovation Course II (5 ECTS) + Core competence (30 ECTS) + Choose 15 ECTS among the rest.",
    courses: {
      // Innovation course II - mandatory (5 ECTS)
      28485: {
        ects: 5,
        title: "Biobusiness and Process Innovation",
        mandatory: true,
      },

      // Core competence courses - mandatory (30 ECTS)
      28345: {
        ects: 5,
        title: "Industrial BioReaction Engineering",
        mandatory: true,
      },
      28870: { ects: 5, title: "Energy and Sustainability", mandatory: true },
      28872: { ects: 5, title: "Biorefinery", mandatory: true },
      41418: { ects: 5, title: "Green fuels and power-to-x", mandatory: true },
      42015: { ects: 5, title: "Energy Economics", mandatory: true },
      46205: {
        ects: 5,
        title: "Feasibility studies of energy projects",
        mandatory: true,
      },

      // Choose 15 ECTS among the rest of the programme specific courses
      10339: {
        ects: 5,
        title:
          "Concepts in heterogeneous catalysis and applications to energy conversion",
        alternativeGroup: "Choose 15 ECTS",
      },
      26510: {
        ects: 10,
        title: "Catalysis and Sustainable Chemistry",
        alternativeGroup: "Choose 15 ECTS",
      },
      28242: {
        ects: 5,
        title: "Chemical Kinetics and Catalysis",
        alternativeGroup: "Choose 15 ECTS",
      },
      28244: {
        ects: 5,
        title: "Combustion and High Temperature Processes",
        alternativeGroup: "Choose 15 ECTS",
      },
      28271: {
        ects: 5,
        title: "Thermal gasification, pyrolysis and sustainability",
        alternativeGroup: "Choose 15 ECTS",
      },
      // 28345 also appears in the “Choose 15 ECTS” list on DTU’s page; it’s already mandatory above.
      28350: {
        ects: 10,
        title: "Process Design: Principles and Methods",
        alternativeGroup: "Choose 15 ECTS",
      },
      28871: {
        ects: 10,
        title: "Production of Biofuels",
        alternativeGroup: "Choose 15 ECTS",
      },
    },
  },

  "chemical-energy-conversion-and-storage": {
    name: "Chemical Energy Conversion and Storage",
    requiredEcts: 50,
    note: "Programme Specific courses: Innovation Course II (choose 5 ECTS) + Core competence (30 ECTS) + Choose 15 ECTS among the rest.",
    courses: {
      // Innovation course II - choose 5 ECTS
      38102: {
        ects: 5,
        title: "Technology Entrepreneurship",
        alternativeGroup: "Innovation Course II (choose 5 ECTS)",
      },

      // Core competence courses - mandatory (30 ECTS)
      28870: { ects: 5, title: "Energy and Sustainability", mandatory: true },
      42015: { ects: 5, title: "Energy Economics", mandatory: true },
      46205: {
        ects: 5,
        title: "Feasibility studies of energy projects",
        mandatory: true,
      },
      47305: { ects: 5, title: "Electrochemistry", mandatory: true },
      47319: { ects: 5, title: "Functional materials", mandatory: true },
      47330: {
        ects: 5,
        title: "Energy storage and conversion",
        mandatory: true,
      },

      // Choose 15 ECTS among the rest of the programme specific courses
      10304: {
        ects: 10,
        title: "Experimental Surface Physics",
        alternativeGroup: "Choose 15 ECTS",
      },
      10333: {
        ects: 5,
        title: "Physics of Sustainable Energy",
        alternativeGroup: "Choose 15 ECTS",
      },
      26510: {
        ects: 10,
        title: "Catalysis and Sustainable Chemistry",
        alternativeGroup: "Choose 15 ECTS",
      },
      41418: {
        ects: 5,
        title: "Green fuels and power-to-x",
        alternativeGroup: "Choose 15 ECTS",
      },
      47301: {
        ects: 5,
        title: "Hydrogen energy and fuel cells",
        alternativeGroup: "Choose 15 ECTS",
      },
      47302: {
        ects: 5,
        title: "Hydrogen and fuel cell chemistry - experimental course",
        alternativeGroup: "Choose 15 ECTS",
      },
      47310: {
        ects: 5,
        title:
          "Battery materials and chemistries: from fundamental mechanisms to battery cells",
        alternativeGroup: "Choose 15 ECTS",
      },
      47317: {
        ects: 5,
        title: "Exergy analysis",
        alternativeGroup: "Choose 15 ECTS",
      },
      47332: {
        ects: 5,
        title: "AI-orchestrated self-driving labs",
        alternativeGroup: "Choose 15 ECTS",
      },
      47333: {
        ects: 5,
        title: "Electron microscopy for materials science",
        alternativeGroup: "Choose 15 ECTS",
      },
      47335: {
        ects: 5,
        title: "Atomic-scale modelling of energy materials (online)",
        alternativeGroup: "Choose 15 ECTS",
      },
      47336: {
        ects: 5,
        title:
          "Applications of X-ray and neutron scattering in biology, chemistry, and physics",
        alternativeGroup: "Choose 15 ECTS",
      },
      47338: {
        ects: 5,
        title: "Organic energy materials",
        alternativeGroup: "Choose 15 ECTS",
      },
      47341: {
        ects: 10,
        title:
          "AI4Materials: Artificial Intelligence for Accelerated Materials Design and Discovery",
        alternativeGroup: "Choose 15 ECTS",
      },
      47514: {
        ects: 5,
        title: "PhD course in advanced electrochemistry",
        alternativeGroup: "Choose 15 ECTS",
      },
    },
  },

  "solar-energy": {
    name: "Solar Energy",
    requiredEcts: 50,
    note: "Programme Specific courses: Innovation Course II (5 ECTS) + Core competence (30 ECTS) + Choose 15 ECTS among the rest.",
    courses: {
      // Innovation course II - mandatory (5 ECTS)
      34541: {
        ects: 5,
        title: "Entrepreneurship in photonics and communications",
        mandatory: true,
      },

      // Core competence courses - mandatory (30 ECTS)
      28870: { ects: 5, title: "Energy and Sustainability", mandatory: true },
      34552: { ects: 5, title: "Photovoltaic systems", mandatory: true },
      41464: { ects: 10, title: "Solar Heating Systems", mandatory: true },
      42015: { ects: 5, title: "Energy Economics", mandatory: true },
      46205: {
        ects: 5,
        title: "Feasibility studies of energy projects",
        mandatory: true,
      },

      // Choose 15 ECTS among the rest of the programme specific courses
      10850: {
        ects: 5,
        title: "Micro- and nanofabrication for quantum engineering",
        alternativeGroup: "Choose 15 ECTS",
      },
      10871: {
        ects: 5,
        title: "Advanced design and simulation of solar cells",
        alternativeGroup: "Choose 15 ECTS",
      },
      34540: {
        ects: 5,
        title:
          "Light emitting diodes and photovoltaics for energy applications",
        alternativeGroup: "Choose 15 ECTS",
      },
      34551: {
        ects: 5,
        title: "Thin film photovoltaics",
        alternativeGroup: "Choose 15 ECTS",
      },
      34553: {
        ects: 5,
        title: "Applied photovoltaics",
        alternativeGroup: "Choose 15 ECTS",
      },
      34554: {
        ects: 5,
        title: "Design of Ground Mounted Photovoltaic Power Plants",
        alternativeGroup: "Choose 15 ECTS",
      },
      34620: {
        ects: 5,
        title: "Basic power electronics in energy systems",
        alternativeGroup: "Choose 15 ECTS",
      },
      41461: {
        ects: 5,
        title: "Building Integrated Photovoltaics",
        alternativeGroup: "Choose 15 ECTS",
      },
      41469: {
        ects: 5,
        title: "Solar resource assessment and forecasting",
        alternativeGroup: "Choose 15 ECTS",
      },
      46700: {
        ects: 10,
        title: "Introduction to Electric Power Systems",
        alternativeGroup: "Choose 15 ECTS",
      },
      46740: {
        ects: 5,
        title: "Distributed energy technologies, modelling and control",
        alternativeGroup: "Choose 15 ECTS",
      },
      46755: {
        ects: 5,
        title: "Renewables in electricity markets",
        alternativeGroup: "Choose 15 ECTS",
      },
      47330: {
        ects: 5,
        title: "Energy storage and conversion",
        alternativeGroup: "Choose 15 ECTS",
      },
      47338: {
        ects: 5,
        title: "Organic energy materials",
        alternativeGroup: "Choose 15 ECTS",
      },
    },
  },

  "thermal-energy-conversion-and-storage": {
    name: "Thermal Energy Conversion and Storage",
    requiredEcts: 50,
    note: "Programme Specific courses: Innovation Course II (5 ECTS) + Core competence (30 ECTS) + Choose 15 ECTS among the rest.",
    courses: {
      // Innovation course II - mandatory (5 ECTS)
      41636: { ects: 5, title: "Design for Circular Economy", mandatory: true },

      // Core competence courses - mandatory (30 ECTS)
      28870: { ects: 5, title: "Energy and Sustainability", mandatory: true },
      41416: {
        ects: 10,
        title: "Energy systems - analysis, design and optimization",
        mandatory: true,
      },
      41417: {
        ects: 5,
        title:
          "Digitalization of Thermal Energy Technologies – Modelling and Simulation Methods",
        mandatory: true,
      },
      42015: { ects: 5, title: "Energy Economics", mandatory: true },
      46205: {
        ects: 5,
        title: "Feasibility studies of energy projects",
        mandatory: true,
      },

      // Choose 15 ECTS among the rest of the programme specific courses
      28271: {
        ects: 5,
        title: "Thermal gasification, pyrolysis and sustainability",
        alternativeGroup: "Choose 15 ECTS",
      },
      41317: {
        ects: 5,
        title: "Computational Fluid Dynamics",
        alternativeGroup: "Choose 15 ECTS",
      },
      41320: {
        ects: 5,
        title: "Advanced fluid mechanics",
        alternativeGroup: "Choose 15 ECTS",
      },
      41343: {
        ects: 5,
        title: "Fuels and emissions from current and future transportation",
        alternativeGroup: "Choose 15 ECTS",
      },
      41346: {
        ects: 5,
        title:
          "Internal combustion engines - experimental methods and data processing",
        alternativeGroup: "Choose 15 ECTS",
      },
      41418: {
        ects: 5,
        title: "Green fuels and power-to-x",
        alternativeGroup: "Choose 15 ECTS",
      },
      41419: {
        ects: 5,
        title: "Advanced Industrial Thermal energy Storage",
        alternativeGroup: "Choose 15 ECTS",
      },
      41420: {
        ects: 10,
        title: "Refrigeration and Heat Pump Technology",
        alternativeGroup: "Choose 15 ECTS",
      },
      41464: {
        ects: 10,
        title: "Solar Heating Systems",
        alternativeGroup: "Choose 15 ECTS",
      },
      41468: {
        ects: 5,
        title: "Sustainable District Heating",
        alternativeGroup: "Choose 15 ECTS",
      },
    },
  },

  "wind-energy": {
    name: "Wind Energy",
    requiredEcts: 50,
    note: "Programme Specific courses: Innovation Course II (5 ECTS) + Core competence (30 ECTS) + Choose 15 ECTS among the rest.",
    courses: {
      // Innovation course II - mandatory (5 ECTS)
      41636: { ects: 5, title: "Design for Circular Economy", mandatory: true },

      // Core competence courses - mandatory (30 ECTS)
      28870: { ects: 5, title: "Energy and Sustainability", mandatory: true },
      42015: { ects: 5, title: "Energy Economics", mandatory: true },
      46200: {
        ects: 5,
        title: "Planning and Development of Wind Farms",
        mandatory: true,
      },
      46205: {
        ects: 5,
        title: "Feasibility studies of energy projects",
        mandatory: true,
      },
      46300: {
        ects: 10,
        title: "Wind Turbine Technology and Aerodynamics",
        mandatory: true,
      },

      // Choose 15 ECTS among the rest of the programme specific courses
      46100: {
        ects: 5,
        title: "Introduction to Micrometeorology for Wind Energy",
        alternativeGroup: "Choose 15 ECTS",
      },
      46120: {
        ects: 5,
        title: "Scientific Programming for Wind Energy",
        alternativeGroup: "Choose 15 ECTS",
      },
      46211: {
        ects: 10,
        title: "Offshore Wind Energy",
        alternativeGroup: "Choose 15 ECTS",
      },
      46215: {
        ects: 5,
        title: "Socio-technical dimensions of Renewable Energy",
        alternativeGroup: "Choose 15 ECTS",
      },
      46230: {
        ects: 5,
        title: "Power system balancing with large scale wind power",
        alternativeGroup: "Choose 15 ECTS",
      },
      46310: {
        ects: 10,
        title: "Wind Turbine Aeroelasticity",
        alternativeGroup: "Choose 15 ECTS",
      },
      46320: {
        ects: 10,
        title: "Loads, Aerodynamics and Control of Wind Turbines",
        alternativeGroup: "Choose 15 ECTS",
      },
      46400: {
        ects: 10,
        title: "Wind Turbine Measurement Technique",
        alternativeGroup: "Choose 15 ECTS",
      },
      46500: {
        ects: 5,
        title: "Probabilistic Methods in Wind Energy",
        alternativeGroup: "Choose 15 ECTS",
      },
      46550: {
        ects: 5,
        title:
          "Offshore wind grid connection and high-voltage DC (HVDC) transmission",
        alternativeGroup: "Choose 15 ECTS",
      },
      46600: {
        ects: 5,
        title: "Aeroacoustics",
        alternativeGroup: "Choose 15 ECTS",
      },
      46700: {
        ects: 10,
        title: "Introduction to Electric Power Systems",
        alternativeGroup: "Choose 15 ECTS",
      },
      46725: {
        ects: 5,
        title: "Electrical machines",
        alternativeGroup: "Choose 15 ECTS",
      },
      46735: {
        ects: 10,
        title: "Wind, solar and energy storage electrical drive trains",
        alternativeGroup: "Choose 15 ECTS",
      },
      46740: {
        ects: 5,
        title: "Distributed energy technologies, modelling and control",
        alternativeGroup: "Choose 15 ECTS",
      },
      46745: {
        ects: 5,
        title: "Integration of wind power in the power system",
        alternativeGroup: "Choose 15 ECTS",
      },
      46755: {
        ects: 5,
        title: "Renewables in electricity markets",
        alternativeGroup: "Choose 15 ECTS",
      },
    },
  },
};
