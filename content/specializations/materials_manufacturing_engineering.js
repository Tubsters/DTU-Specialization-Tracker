// content/specializations/materials_manufacturing_engineering.js
// MSc in Materials and Manufacturing Engineering — Specializations (DTU)
// Source: DTU curriculum page (programme-specific course groups)

globalThis.DTU_MME_SPECIALIZATIONS = {
  "materials-engineering": {
    name: "Materials Engineering",
    requiredEcts: 10,
    note: "DTU rule: Choose 25 ECTS from the Materials/Manufacturing lists, with at least 10 ECTS in each area. This view tracks the Materials area minimum (10 ECTS).",
    courses: {
      41653: { ects: 10, title: "Corrosion (theory and engineering)" },
      41658: {
        ects: 5,
        title: "Methods for experimental materials characterization",
      },
      41661: { ects: 5, title: "Metals technology" },
      41667: { ects: 5, title: "Project course in materials engineering" },
      41668: { ects: 5, title: "Computational Materials Science" },
      41669: { ects: 5, title: "Advanced surface engineering" },
      47304: { ects: 10, title: "Ceramic science and engineering" },
    },
  },

  "manufacturing-engineering": {
    name: "Manufacturing Engineering",
    requiredEcts: 10,
    note: "DTU rule: Choose 25 ECTS from the Materials/Manufacturing lists, with at least 10 ECTS in each area. This view tracks the Manufacturing area minimum (10 ECTS).",
    courses: {
      41730: { ects: 5, title: "Industrial forming of metals" },
      41733: {
        ects: 5,
        title: "Metallurgy, design and manufacturing of cast components",
      },
      41734: { ects: 5, title: "Geometrical metrology and machine testing" },
      41735: {
        ects: 5,
        title: "Experimental methods in 3D printing (additive manufacturing)",
      },
      41737: { ects: 5, title: "Design of plastic products" },
      41739: {
        ects: 5,
        title: "Experimental plastic and metal processing technology",
      },
      41743: {
        ects: 5,
        title: "Micro product design, development and production",
      },
      41749: { ects: 5, title: "Precision Machining" },
      41750: { ects: 5, title: "Composites Manufacturing" },
    },
  },
};
