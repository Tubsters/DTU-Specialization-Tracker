// content/bioinformatics_specializations.js
// =========================
// DTU MSc in Bioinformatics specializations
// Sources: DTU specialization pages (Bioinformatics)
// =========================

globalThis.DTU_BIOINF_SPECIALIZATIONS = {
  "biomedical-bioinformatics": {
    name: "Biomedical Bioinformatics",
    requiredEcts: 40,
    note: "Bioinformatics programme rule: 55 ECTS programme-specific in total (10 ECTS mandatory + 5 ECTS innovation + 40 ECTS chosen from this list).",
    courses: {
      // Recommended
      22102: { ects: 5, title: "Applied Single Cell Bioinformatics" },
      22123: { ects: 5, title: "Computational Precision Medicine" },
      22145: { ects: 5, title: "Immunological Bioinformatics" },

      // Other programme-specific courses that may be included
      "02582": { ects: 5, title: "Computational Data Analysis" },
      "02586": { ects: 5, title: "Statistical Genetics" },
      22112: { ects: 5, title: "High Performance Computing in Life Science" },
      22115: { ects: 5, title: "Computational Molecular Evolution" },
      22117: { ects: 5, title: "Protein structure and computational biology" },
      22125: { ects: 5, title: "Algorithms in bioinformatics" },
      23257: {
        ects: 5,
        title: "Compositional data analysis with applications in genomics",
      },
      23262: { ects: 5, title: "Infectious disease bioinformatics" },
      27070: { ects: 5, title: "Immunology" },
      27422: { ects: 5, title: "Biosynthesis of natural products" },
    },
  },

  "infectious-disease-health-informatics": {
    name: "Infectious Disease Health Informatics",
    requiredEcts: 40,
    note: "Bioinformatics programme rule: 55 ECTS programme-specific in total (10 ECTS mandatory + 5 ECTS innovation + 40 ECTS chosen from this list).",
    courses: {
      // Recommended
      23205: { ects: 5, title: "Fighting infectious diseases" },
      23261: {
        ects: 5,
        title:
          "Epidemiological methods for surveillance of infectious diseases",
      },
      23262: { ects: 5, title: "Infectious disease bioinformatics" },

      // Other programme-specific courses that may be included
      "02450": {
        ects: 5,
        title: "Introduction to Machine Learning and Data Mining",
      },
      22145: { ects: 5, title: "Immunological Bioinformatics" },
      23257: {
        ects: 5,
        title: "Compositional data analysis with applications in genomics",
      },
      27230: { ects: 5, title: "Prokaryotic cell biology" },
    },
  },

  "biomedical-methods-in-life-science": {
    name: "Biomedical Methods in Life Science",
    requiredEcts: 40,
    note: "Bioinformatics programme rule: 55 ECTS programme-specific in total (10 ECTS mandatory + 5 ECTS innovation + 40 ECTS chosen from this list).",
    courses: {
      // Recommended
      "02450": {
        ects: 5,
        title: "Introduction to Machine Learning and Data Mining",
      },
      22125: { ects: 5, title: "Algorithms in bioinformatics" },

      // Other programme-specific courses that may be included
      "02456": { ects: 5, title: "Deep learning" },
      "02477": { ects: 5, title: "Bayesian machine learning" },
      "02582": { ects: 5, title: "Computational Data Analysis" },
      "02586": { ects: 5, title: "Statistical Genetics" },
      "02807": { ects: 5, title: "Computational Tools for Data Science" },
      22112: { ects: 5, title: "High Performance Computing in Life Science" },
      22115: { ects: 5, title: "Computational Molecular Evolution" },
      22117: { ects: 5, title: "Protein structure and computational biology" },
      22140: { ects: 5, title: "Introduction to Systems Biology, BSc" },
      22145: { ects: 5, title: "Immunological Bioinformatics" },
      23257: {
        ects: 5,
        title: "Compositional data analysis with applications in genomics",
      },
    },
  },
};
