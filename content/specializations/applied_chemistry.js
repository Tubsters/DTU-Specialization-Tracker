// content/applied_chemistry_specializations.js
// =========================
// DTU Applied Chemistry (MSc) specializations
// Sources: DTU specialization pages (see citations in README / docs)
// =========================

globalThis.DTU_APCHEM_SPECIALIZATIONS = {
  "catalysis-and-sustainable-chemistry": {
    name: "Catalysis and Sustainable Chemistry",
    // Mandatory (10 + 5) + choose >= 10 ECTS => min 25 ECTS
    requiredEcts: 25,
    note: "",
    courses: {
      26510: { ects: 10, title: "Catalysis and Sustainable Chemistry" },
      28242: { ects: 5, title: "Chemical Kinetics and Catalysis" },

      // Choose at least 10 ECTS among these
      10339: {
        ects: 5,
        title:
          "Concepts in heterogeneous catalysis and applications to energy conversion",
      },
      26130: { ects: 5, title: "Spectroscopic methods" },
      26438: { ects: 5, title: "NMR Spectroscopy" },
      28315: { ects: 5, title: "Applied Colloid and Surface Chemistry" },
      28443: { ects: 7.5, title: "Industrial Reaction Engineering" },
      47301: { ects: 5, title: "Hydrogen energy and fuel cells" },
      47333: { ects: 5, title: "Electron microscopy for materials science" },
      47336: {
        ects: 5,
        title:
          "Applications of X-ray and neutron scattering in biology, chemistry, and physics",
      },
      47342: { ects: 5, title: "Molten salt chemistry and technologies" },
    },
  },

  "computational-chemistry-and-atomic-scale-analysis": {
    name: "Computational Chemistry and Atomic-Scale Analysis",
    // Mandatory (5 + 5) + choose >= 25 ECTS => min 35 ECTS
    requiredEcts: 35,
    note: "",
    courses: {
      // Mandatory
      26231: { ects: 5, title: "Physical Chemistry 3" },
      47339: { ects: 5, title: "Solid state and structural chemistry" },

      // Choose 25 ECTS among these programme-specific courses
      "02452": { ects: 5, title: "Machine Learning" },
      26130: { ects: 5, title: "Spectroscopic methods" },
      26236: {
        ects: 5,
        title: "Statistical thermodynamics and reaction dynamics",
      },
      26255: { ects: 5, title: "Molecular dynamics and machine learning" },
      26263: { ects: 5, title: "Molecular electronic structure methods" },
      28315: { ects: 5, title: "Applied Colloid and Surface Chemistry" },
      47336: {
        ects: 5,
        title:
          "Applications of X-ray and neutron scattering in biology, chemistry, and physics",
      },
    },
  },

  "macromolecular-chemistry-and-materials": {
    name: "Macromolecular Chemistry and Materials",
    // Mandatory (5 + 5) + choose >= 25 ECTS => min 35 ECTS
    requiredEcts: 35,
    note: "",
    courses: {
      // Mandatory
      26317: { ects: 5, title: "Instrumental Chemical Analysis" },
      28212: { ects: 5, title: "Polymer Chemistry" },

      // Choose at least 25 ECTS among these
      "02452": { ects: 5, title: "Machine Learning" },
      22281: { ects: 5, title: "Biomaterials" },
      22508: {
        ects: 5,
        title:
          "Practical NMR spectroscopy: Making reactions in (bio)chemistry visible",
      },
      26241: {
        ects: 5,
        title: "Applied Pharmacokinetics and Pharmacodynamics",
      },
      26325: {
        ects: 5,
        title:
          "Chromatographic (HPLC) Purification of Biological Macromolecules",
      },
      26438: { ects: 5, title: "NMR Spectroscopy" },
      27325: {
        ects: 5,
        title: "Advanced protein structure engineering and analysis",
      },
      27666: {
        ects: 5,
        title: "AI-guided Protein Science: From Design to Engineering",
      },
      28213: { ects: 5, title: "Polymer Technology" },
      28214: { ects: 5, title: "Polymer synthesis and characterization" },
      28316: {
        ects: 5,
        title: "Laboratory Course in Colloid and Surface Chemistry",
      },

      // GMP (either theoretical 5 or practical 7.5)
      28855: {
        ects: 5,
        title:
          "Good Manufacturing Practice (GMP) and quality in pharmaceutical, biotech and food industry - Theoretical version",
      },
      28857: {
        ects: 7.5,
        title:
          "Good Manufacturing Practice (GMP) and quality in pharmaceutical, biotech and food industry - Practical version",
      },

      // Remaining listed options in the “choose at least 25 ECTS” list
      "02411": {
        ects: 5,
        title: "Statistical Design and Analysis of Experiments",
      },
      12772: {
        ects: 10,
        title: "Life Cycle Assessment of Products and Systems",
      },
      22117: { ects: 5, title: "Protein structure and computational biology" },
      22235: { ects: 5, title: "Drug delivery" },
      22237: { ects: 5, title: "Preclinical drug development" },
      23522: { ects: 5, title: "Rheology of food and biological materials" },
      27101: { ects: 5, title: "Assay Technology" },
      27246: { ects: 5, title: "Applied enzyme technology and kinetics" },
      27330: {
        ects: 5,
        title: "Quantitative analysis and modeling in protein science",
      },
      27423: { ects: 5, title: "Metabolomics and proteomics" },
      28216: { ects: 5, title: "Organic Coatings Science and Technology" },
      28434: { ects: 5, title: "Membrane Technology" },
      28530: { ects: 10, title: "Transport Processes" },
      28811: { ects: 5, title: "Polymers in processes and products" },
      41737: { ects: 5, title: "Design of plastic products" },
      41739: {
        ects: 5,
        title: "Experimental plastic and metal processing technology",
      },
      46420: { ects: 5, title: "Composite Materials and Fibres" },
    },
  },

  "synthesis-and-medicinal-chemistry": {
    name: "Synthesis and Medicinal Chemistry",
    // Mandatory (5 + 10 + 5) + choose >= 5 => min 25 ECTS
    requiredEcts: 25,
    note: "",
    courses: {
      // Mandatory
      26416: { ects: 5, title: "Laboratory Course in Organic Synthesis" },
      26444: { ects: 10, title: "Organic Chemistry 4" },
      26446: { ects: 5, title: "Advanced Medicinal Chemistry" },

      // Choose at least 5 ECTS among these
      22210: { ects: 5, title: "Immune System in Health and Disease" },
      26241: {
        ects: 5,
        title: "Applied Pharmacokinetics and Pharmacodynamics",
      },
      26438: { ects: 5, title: "NMR Spectroscopy" },
      26455: {
        ects: 5,
        title: "Organic Reaction Mechanisms and Supramolecular Chemistry",
      },
      27430: { ects: 5, title: "Eukaryotic cell biology" },
    },
  },
};
