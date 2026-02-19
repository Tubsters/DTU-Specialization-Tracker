// content/specializations/chbe.specializations.js
// Source: DTU MSc Chemical and Biochemical Engineering specialization pages (+ Biomanufacturing PDF plan)

globalThis.DTU_CHBE_SPECIALIZATIONS = {
  biomanufacturing: {
    name: "Biomanufacturing (Industry MSc, Kalundborg)",
    requiredEcts: 90,
    note: "Study plan includes an MSc Thesis (30 ECTS) in addition to the listed courses.",
    courses: {
      28745: {
        ects: 5,
        title: "Pharmaceutical Protein Production",
        mandatory: true,
      },
      28761: { ects: 5, title: "Industrial Cell Cultivation", mandatory: true },
      28720: { ects: 7.5, title: "Protein Science", mandatory: true },
      42500: {
        ects: 5,
        title: "Innovation in Engineering (Polytechnical Foundation)",
        mandatory: true,
      },
      28737: { ects: 10, title: "Industrial Biotechnology", mandatory: true },
      28730: {
        ects: 5,
        title: "Formulation and stability of biopharmaceuticals",
        mandatory: true,
      },
      28751: {
        ects: 5,
        title: "Downstream protein processing",
        mandatory: true,
      },
      28750: { ects: 7.5, title: "Pharmaceutical Analysis", mandatory: true },
      12100: {
        ects: 5,
        title:
          "Quantitative methods to assess sustainability (Polytechnical Foundation)",
        mandatory: true,
      },
      28747: {
        ects: 10,
        title: "Good Manufacturing Practice (GMP) and Quality Management",
        mandatory: true,
      },
      28725: { ects: 7.5, title: "Pilot Plant Course", mandatory: true },
      28755: {
        ects: 7.5,
        title:
          "Automation and digitalization in biotech and pharmaceutical manufacturing",
        mandatory: true,
      },
      28777: {
        ects: 10,
        title: "Advanced fermentation technology practicum",
        mandatory: true,
      },
    },
  },

  "chemical-and-biochemical-process-technology": {
    name: "Chemical and Biochemical Process Technology",
    requiredEcts: 67.5,
    note: "Includes mandatory courses (some alternatives) + min 20 ECTS from the additional list on the DTU page.",
    courses: {
      // Mandatory (with alternatives)
      12100: {
        ects: 5,
        title:
          "Quantitative methods to assess sustainability (Polytechnical Foundation)",
        mandatory: true,
      },
      12106: {
        ects: 5,
        title:
          "Quantitative methods to assess sustainability (Polytechnical Foundation)",
        mandatory: true,
      },
      12105: {
        ects: 5,
        title:
          "Quantitative methods to assess sustainability (Polytechnical Foundation)",
        mandatory: true,
      },
      12101: {
        ects: 5,
        title:
          "Quantitative methods to assess sustainability (Polytechnical Foundation)",
        mandatory: true,
      },

      26620: { ects: 5, title: "Chemistry and Innovation", mandatory: true },
      28485: {
        ects: 5,
        title: "Biobusiness and Process Innovation",
        mandatory: true,
      },

      28350: {
        ects: 10,
        title: "Process Design: Principles and Methods",
        mandatory: true,
      },
      28420: { ects: 7.5, title: "Separation Processes", mandatory: true },

      28443: {
        ects: 7.5,
        title: "Industrial Reaction Engineering",
        mandatory: true,
      },
      28345: {
        ects: 5,
        title: "Industrial BioReaction Engineering",
        mandatory: true,
      },

      28530: { ects: 10, title: "Transport Processes", mandatory: true },

      42500: {
        ects: 5,
        title: "Innovation in Engineering (Polytechnical Foundation)",
        mandatory: true,
      },
      42504: {
        ects: 5,
        title: "Innovation in Engineering (Polytechnical Foundation)",
        mandatory: true,
      },
      42501: {
        ects: 5,
        title: "Innovation in Engineering (Polytechnical Foundation)",
        mandatory: true,
      },

      // Min 20 ECTS list (counts, but not all mandatory)
      23521: { ects: 5, title: "Hygienic design in the food industry" },
      28233: {
        ects: 5,
        title: "Recovery and purification of biological products",
      },
      28244: { ects: 5, title: "Combustion and High Temperature Processes" },
      28346: { ects: 5, title: "Advanced fermentation technology practicum" },
      28361: { ects: 7.5, title: "Chemical engineering model analysis" },
      28423: { ects: 5, title: "Phase Equilibria for non-ideal mixtures" },
      28434: { ects: 5, title: "Membrane Technology" },
      28451: { ects: 7.5, title: "Optimising Plantwide Control" },
      28831: {
        ects: 5,
        title: "Computational Fluid Dynamics in Chemical Engineering",
      },
      28845: { ects: 5, title: "Chemical Reaction Engineering Laboratory" },
      28852: {
        ects: 5,
        title: "Risk Assessment in Chemical and Biochemical Industry",
      },
      28857: {
        ects: 7.5,
        title: "Good Manufacturing Practice (GMP) - Practical version",
      },
      28855: {
        ects: 5,
        title: "Good Manufacturing Practice (GMP) - Theoretical version",
      },
      28871: { ects: 10, title: "Production of Biofuels" },
    },
  },

  "fermentation-based-manufacturing": {
    name: "Fermentation Based Manufacturing (FBM)",
    requiredEcts: 57.5,
    note: "Mandatory elements include alternatives (OR).",
    courses: {
      12101: {
        ects: 5,
        title:
          "Quantitative methods to assess sustainability (Polytechnical Foundation)",
        mandatory: true,
      },
      12106: {
        ects: 5,
        title:
          "Quantitative methods to assess sustainability (Polytechnical Foundation)",
        mandatory: true,
      },
      12105: {
        ects: 5,
        title:
          "Quantitative methods to assess sustainability (Polytechnical Foundation)",
        mandatory: true,
      },
      12100: {
        ects: 5,
        title:
          "Quantitative methods to assess sustainability (Polytechnical Foundation)",
        mandatory: true,
      },

      27455: {
        ects: 5,
        title: "Microbial adaptation to industrial processes",
        mandatory: true,
      },
      28345: {
        ects: 5,
        title: "Industrial BioReaction Engineering",
        mandatory: true,
      },
      28350: {
        ects: 10,
        title: "Process Design: Principles and Methods",
        mandatory: true,
      },

      28361: {
        ects: 7.5,
        title: "Chemical engineering model analysis",
        mandatory: true,
      },
      28530: { ects: 10, title: "Transport Processes", mandatory: true },

      28420: { ects: 7.5, title: "Separation Processes", mandatory: true },
      28434: { ects: 5, title: "Membrane Technology", mandatory: true },

      28455: {
        ects: 5,
        title: "Process adaptation in Fermentation Based Biomanufacturing",
        mandatory: true,
      },
      28485: {
        ects: 5,
        title: "Biobusiness and Process Innovation",
        mandatory: true,
      },

      28857: {
        ects: 7.5,
        title: "Good Manufacturing Practice (GMP) - Practical version",
        mandatory: true,
      },
      28855: {
        ects: 5,
        title: "Good Manufacturing Practice (GMP) - Theoretical version",
        mandatory: true,
      },

      42500: {
        ects: 5,
        title: "Innovation in Engineering (Polytechnical Foundation)",
        mandatory: true,
      },
      42504: {
        ects: 5,
        title: "Innovation in Engineering (Polytechnical Foundation)",
        mandatory: true,
      },
      42501: {
        ects: 5,
        title: "Innovation in Engineering (Polytechnical Foundation)",
        mandatory: true,
      },
    },
  },

  "chemical-and-biochemical-product-engineering": {
    name: "Chemical and Biochemical Product Engineering",
    requiredEcts: 65,
    note: "Includes mandatory courses (some alternatives) + min 20 ECTS from the additional list on the DTU page.",
    courses: {
      // Mandatory (with alternatives)
      12101: {
        ects: 5,
        title:
          "Quantitative methods to assess sustainability (Polytechnical Foundation)",
        mandatory: true,
      },
      12106: {
        ects: 5,
        title:
          "Quantitative methods to assess sustainability (Polytechnical Foundation)",
        mandatory: true,
      },
      12105: {
        ects: 5,
        title:
          "Quantitative methods to assess sustainability (Polytechnical Foundation)",
        mandatory: true,
      },
      12100: {
        ects: 5,
        title:
          "Quantitative methods to assess sustainability (Polytechnical Foundation)",
        mandatory: true,
      },

      27246: {
        ects: 5,
        title: "Applied enzyme technology and kinetics",
        mandatory: true,
      },
      28242: {
        ects: 5,
        title: "Chemical Kinetics and Catalysis",
        mandatory: true,
      },

      28213: { ects: 5, title: "Polymer Technology", mandatory: true },
      28311: {
        ects: 5,
        title: "Chemical and Biochemical Product Design",
        mandatory: true,
      },
      28412: {
        ects: 5,
        title: "Advanced Chemical Product Design",
        mandatory: true,
      },
      28434: { ects: 5, title: "Membrane Technology", mandatory: true },
      28530: { ects: 10, title: "Transport Processes", mandatory: true },

      42500: {
        ects: 5,
        title: "Innovation in Engineering (Polytechnical Foundation)",
        mandatory: true,
      },
      42504: {
        ects: 5,
        title: "Innovation in Engineering (Polytechnical Foundation)",
        mandatory: true,
      },
      42501: {
        ects: 5,
        title: "Innovation in Engineering (Polytechnical Foundation)",
        mandatory: true,
      },

      // Min 20 ECTS list
      22281: { ects: 5, title: "Biomaterials" },
      23522: { ects: 5, title: "Rheology of food and biological materials" },
      26620: { ects: 5, title: "Chemistry and Innovation" },
      28214: { ects: 5, title: "Polymer synthesis and characterization" },
      28216: { ects: 5, title: "Organic Coatings Science and Technology" },
      28315: { ects: 5, title: "Applied Colloid and Surface Chemistry" },
      28811: { ects: 5, title: "Polymers in processes and products" },
      41737: { ects: 5, title: "Design of plastic products" },
    },
  },

  "energy-and-environmental-engineering": {
    name: "Energy and Environmental Engineering",
    requiredEcts: 65,
    note: "Includes mandatory courses (some alternatives) + min 20 ECTS from the additional list on the DTU page.",
    courses: {
      // Mandatory (with alternatives)
      12100: {
        ects: 5,
        title:
          "Quantitative methods to assess sustainability (Polytechnical Foundation)",
        mandatory: true,
      },
      12106: {
        ects: 5,
        title:
          "Quantitative methods to assess sustainability (Polytechnical Foundation)",
        mandatory: true,
      },
      12105: {
        ects: 5,
        title:
          "Quantitative methods to assess sustainability (Polytechnical Foundation)",
        mandatory: true,
      },
      12101: {
        ects: 5,
        title:
          "Quantitative methods to assess sustainability (Polytechnical Foundation)",
        mandatory: true,
      },

      26620: { ects: 5, title: "Chemistry and Innovation", mandatory: true },
      28485: {
        ects: 5,
        title: "Biobusiness and Process Innovation",
        mandatory: true,
      },

      27246: {
        ects: 5,
        title: "Applied enzyme technology and kinetics",
        mandatory: true,
      },
      28443: {
        ects: 7.5,
        title: "Industrial Reaction Engineering",
        mandatory: true,
      },
      28345: {
        ects: 5,
        title: "Industrial BioReaction Engineering",
        mandatory: true,
      },
      28242: {
        ects: 5,
        title: "Chemical Kinetics and Catalysis",
        mandatory: true,
      },

      28350: {
        ects: 10,
        title: "Process Design: Principles and Methods",
        mandatory: true,
      },

      28361: {
        ects: 7.5,
        title: "Chemical engineering model analysis",
        mandatory: true,
      },
      28530: { ects: 10, title: "Transport Processes", mandatory: true },

      28420: { ects: 7.5, title: "Separation Processes", mandatory: true },

      42500: {
        ects: 5,
        title: "Innovation in Engineering (Polytechnical Foundation)",
        mandatory: true,
      },
      42504: {
        ects: 5,
        title: "Innovation in Engineering (Polytechnical Foundation)",
        mandatory: true,
      },
      42501: {
        ects: 5,
        title: "Innovation in Engineering (Polytechnical Foundation)",
        mandatory: true,
      },

      // Min 20 ECTS list
      12109: {
        ects: 5,
        title: "Physico-Chemical Water Treatment Technologies",
      },
      26280: { ects: 5, title: "Chemistry and Physics in CO2 Storage" },
      26510: { ects: 10, title: "Catalysis and Sustainable Chemistry" },
      28244: { ects: 5, title: "Combustion and High Temperature Processes" },
      28315: { ects: 5, title: "Applied Colloid and Surface Chemistry" },
      28434: { ects: 5, title: "Membrane Technology" },
      28451: { ects: 7.5, title: "Optimising Plantwide Control" },
      28871: { ects: 10, title: "Production of Biofuels" },
      28872: { ects: 5, title: "Biorefinery" },
      47301: { ects: 5, title: "Hydrogen energy and fuel cells" },
      47334: { ects: 5, title: "Carbon capture, utilization, and storage" },
    },
  },
};
