// content/biotechnology_specializations.js
// =========================
// DTU MSc in Biotechnology specializations
// Source: DTU specialization pages (Biotechnology)
// =========================

globalThis.DTU_BIOTECH_SPECIALIZATIONS = {
  biosolutions: {
    name: "Biosolutions (BS)",
    requiredEcts: 30,
    note: "Choose 30 ECTS among the courses listed below.",
    courses: {
      "02411": {
        ects: 5,
        title: "Statistical Design and Analysis of Experiments",
      },
      23216: {
        ects: 10,
        title:
          "Producing new sustainable food ingredients - processes and utilizations",
      },
      27666: {
        ects: 5,
        title: "AI-guided Protein Science: From Design to Engineering",
      },
      28233: {
        ects: 5,
        title: "Recovery and purification of biological products",
      },
      28455: {
        ects: 5,
        title: "Process adaptation in Fermentation Based Biomanufacturing",
      },
      28871: { ects: 10, title: "Production of Biofuels" },
      28872: { ects: 5, title: "Biorefinery" },
      41636: { ects: 5, title: "Design for Circular Economy" },
      42014: { ects: 5, title: "Environmental and Resource Economics" },
      42015: { ects: 5, title: "Energy Economics" },
    },
  },

  "cell-factory-engineering": {
    name: "Cell Factory Engineering (CFE)",
    requiredEcts: 30,
    note: "Choose 30 ECTS among the courses listed below.",
    courses: {
      22117: { ects: 5, title: "Protein structure and computational biology" },
      27220: { ects: 5, title: "Advanced prokaryotic biotechnology" },
      27255: {
        ects: 5,
        title:
          "Advanced experimental prokaryotic molecular biology and ecology",
      },
      27325: {
        ects: 5,
        title: "Advanced protein structure engineering and analysis",
      },
      27330: {
        ects: 5,
        title: "Quantitative analysis and modeling in protein science",
      },
      27419: { ects: 5, title: "Filamentous Fungi: Biology and Biotechnology" },
      27422: { ects: 5, title: "Biosynthesis of natural products" },
      27432: { ects: 5, title: "Experimental molecular biology of eukaryotes" },
      27455: { ects: 5, title: "Microbial adaptation to industrial processes" },
      27666: {
        ects: 5,
        title: "AI-guided Protein Science: From Design to Engineering",
      },
    },
  },

  "microbiome-engineering": {
    name: "Microbiome Engineering (BE)",
    requiredEcts: 30,
    note: "Choose 30 ECTS among the courses listed below.",
    courses: {
      "02443": { ects: 5, title: "Stochastic Simulation" },
      22210: { ects: 5, title: "Immune System in Health and Disease" },
      23205: { ects: 5, title: "Fighting infectious diseases" },
      23260: { ects: 5, title: "Applied methods in metagenomics" },
      23262: { ects: 5, title: "Infectious disease bioinformatics" },
      27220: { ects: 5, title: "Advanced prokaryotic biotechnology" },
      27255: {
        ects: 5,
        title:
          "Advanced experimental prokaryotic molecular biology and ecology",
      },
      27419: { ects: 5, title: "Filamentous Fungi: Biology and Biotechnology" },
      27422: { ects: 5, title: "Biosynthesis of natural products" },
      27432: { ects: 5, title: "Experimental molecular biology of eukaryotes" },
      27510: { ects: 5, title: "Biosensors and bioanalysis" },
    },
  },

  "protein-engineering": {
    name: "Protein Engineering (PE)",
    requiredEcts: 35,
    note: "Choose 35 ECTS among the courses listed below.",
    courses: {
      22117: { ects: 5, title: "Protein structure and computational biology" },
      26325: {
        ects: 5,
        title:
          "Chromatographic (HPLC) Purification of Biological Macromolecules",
      },
      27101: { ects: 5, title: "Assay Technology" },
      27246: { ects: 5, title: "Applied enzyme technology and kinetics" },
      27247: { ects: 5, title: "Experimental enzyme technology" },
      27325: {
        ects: 5,
        title: "Advanced protein structure engineering and analysis",
      },
      27330: {
        ects: 5,
        title: "Quantitative analysis and modeling in protein science",
      },
      27666: {
        ects: 5,
        title: "AI-guided Protein Science: From Design to Engineering",
      },
    },
  },

  "fermentation-based-biomanufacturing": {
    name: "Fermentation Based Biomanufacturing (FBM)",
    requiredEcts: 35,
    note: "Includes mandatory courses + an additional choice list. GMP is either 28855 (5 ECTS) OR 28857 (7.5 ECTS).",
    courses: {
      // Mandatory specialization-specific courses (incl. GMP alternative)
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
      28455: {
        ects: 5,
        title: "Process adaptation in Fermentation Based Biomanufacturing",
        mandatory: true,
      },
      28855: {
        ects: 5,
        title:
          "Good Manufacturing Practice (GMP) and quality in pharmaceutical, biotech and food industry - Theoretical version",
        mandatory: true,
        alternativeGroup: "GMP",
      },
      28857: {
        ects: 7.5,
        title:
          "Good Manufacturing Practice (GMP) and quality in pharmaceutical, biotech and food industry - Practical version",
        mandatory: true,
        alternativeGroup: "GMP",
      },

      // Choose 15 ECTS among:
      27062: {
        ects: 5,
        title:
          "Methods in protein science: Structure, interactions and molecular properties",
      },
      27422: { ects: 5, title: "Biosynthesis of natural products" },
      27470: {
        ects: 5,
        title: "Mammalian cell technology for manufacturing of biologics",
      },
      28233: {
        ects: 5,
        title: "Recovery and purification of biological products",
      },
    },
  },
};
