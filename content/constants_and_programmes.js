// content/constants_and_programmes.js
// Constants and programme registry

const STORAGE_PROGRAM_KEY = "dtuSpec.selectedProgrammeId";
const STORAGE_WIDGET_MIN_KEY = "dtuSpec.widgetMinimized";

const COURSE_CODE_RE = /^\d{5}$/;
const ROOT_CLASS = "dtuSpec-root";
const nfDa = new Intl.NumberFormat("da-DK", { maximumFractionDigits: 1 });

// Programmes + specialization sources (loaded via manifest order)
const PROGRAMMES = {
  cse: {
    name: "Computer Science and Engineering",
    specStorageKey: "dtuSpec.cse.selectedSpecId",
    defaultSpecId: "software-engineering",
    specializations: globalThis.DTU_CSE_SPECIALIZATIONS,
  },
  "applied-chemistry": {
    name: "Applied Chemistry",
    specStorageKey: "dtuSpec.apchem.selectedSpecId",
    defaultSpecId: "catalysis-and-sustainable-chemistry",
    specializations: globalThis.DTU_APCHEM_SPECIALIZATIONS,
  },
  "architectural-engineering": {
    name: "Architectural Engineering",
    specStorageKey: "dtuSpec.archeng.selectedSpecId",
    defaultSpecId: "indoor-environment",
    specializations: globalThis.DTU_ARCHENG_SPECIALIZATIONS,
  },
  bioinformatics: {
    name: "Bioinformatics",
    specStorageKey: "dtuSpec.bioinf.selectedSpecId",
    defaultSpecId: "biomedical-bioinformatics",
    specializations: globalThis.DTU_BIOINF_SPECIALIZATIONS,
  },
  biotechnology: {
    name: "Biotechnology",
    specStorageKey: "dtuSpec.biotech.selectedSpecId",
    defaultSpecId: "biosolutions",
    specializations: globalThis.DTU_BIOTECH_SPECIALIZATIONS,
  },
  "business-analytics": {
    name: "Business Analytics",
    specStorageKey: "dtuSpec.busan.selectedSpecId",
    defaultSpecId: "predictive-analytics",
    specializations: globalThis.DTU_BUSANALYTICS_SPECIALIZATIONS,
  },
  "chemical-and-biochemical-engineering": {
    name: "Chemical and Biochemical Engineering",
    specStorageKey: "dtuSpec.chbe.selectedSpecId",
    defaultSpecId: "chemical-and-biochemical-process-technology",
    specializations: globalThis.DTU_CHBE_SPECIALIZATIONS,
  },
  "civil-engineering": {
    name: "Civil Engineering",
    specStorageKey: "dtuSpec.civil.selectedSpecId",
    defaultSpecId: "bridges-pavements-and-large-structures",
    specializations: globalThis.DTU_CIVILENG_SPECIALIZATIONS,
  },
  "communication-technologies-and-system-design": {
    name: "Communication Technologies and System Design",
    specStorageKey: "dtuSpec.ctsd.selectedSpecId",
    defaultSpecId: "high-speed-communication",
    specializations: globalThis.DTU_CTSD_SPECIALIZATIONS,
  },
  "design-and-innovation": {
    name: "Design and Innovation",
    specStorageKey: "dtuSpec.desinnov.selectedSpecId",
    defaultSpecId: "design-of-complex-technical-systems",
    specializations: globalThis.DTU_DESIGNINNOV_SPECIALIZATIONS,
  },
  "earth-and-space-physics-and-engineering": {
    name: "Earth and Space Physics and Engineering",
    specStorageKey: "dtuSpec.espace.selectedSpecId",
    defaultSpecId: "earth-observation",
    specializations: globalThis.DTU_ESPACE_SPECIALIZATIONS,
  },
  "electrical-engineering": {
    name: "Electrical Engineering",
    specStorageKey: "dtuSpec.ee.selectedSpecId",
    defaultSpecId: "electronics",
    specializations: globalThis.DTU_EE_SPECIALIZATIONS,
  },
  "engineering-acoustics": {
    name: "Engineering Acoustics",
    specStorageKey: "dtuSpec.engac.selectedSpecId",
    defaultSpecId: "audio-and-transducer-technology",
    specializations: globalThis.DTU_ENGAC_SPECIALIZATIONS,
  },
  "engineering-light": {
    name: "Engineering Light",
    specStorageKey: "dtuSpec.englight.selectedSpecId",
    defaultSpecId: "instrumentations-and-applications",
    specializations: globalThis.DTU_ENGLIGHT_SPECIALIZATIONS,
  },
  "engineering-physics": {
    name: "Engineering Physics",
    specStorageKey: "dtuSpec.engphys.selectedSpecId",
    defaultSpecId: "energy-physics",
    specializations: globalThis.DTU_ENGPHYS_SPECIALIZATIONS,
  },
  "environmental-engineering": {
    name: "Environmental Engineering",
    specStorageKey: "dtuSpec.enveng.selectedSpecId",
    defaultSpecId: "climate-change",
    specializations: globalThis.DTU_ENVENG_SPECIALIZATIONS,
  },
  "food-technology": {
    name: "Food Technology",
    specStorageKey: "dtuSpec.foodtech.selectedSpecId",
    defaultSpecId: "food-innovation",
    specializations: globalThis.DTU_FOODTECH_SPECIALIZATIONS,
  },
  "human-centered-artificial-intelligence": {
    name: "Human-Centered Artificial Intelligence",
    specStorageKey: "dtuSpec.hcai.selectedSpecId",
    defaultSpecId: "ai-and-cognition",
    specializations: globalThis.DTU_HCAI_SPECIALIZATIONS,
  },
  "industrial-engineering-and-management": {
    name: "Industrial Engineering and Management",
    specStorageKey: "dtuSpec.iem.selectedSpecId",
    defaultSpecId: "management-and-analysis-of-operations",
    specializations: globalThis.DTU_IEM_SPECIALIZATIONS,
  },
  "materials-and-manufacturing-engineering": {
    name: "Materials and Manufacturing Engineering",
    specStorageKey: "dtuSpec.mme.selectedSpecId",
    defaultSpecId: "materials-engineering",
    specializations: globalThis.DTU_MME_SPECIALIZATIONS,
  },
  "mathematical-modelling-and-computation": {
    name: "Mathematical Modelling and Computation",
    specStorageKey: "dtuSpec.mmc.selectedSpecId",
    defaultSpecId: "applied-mathematical-analysis",
    specializations: globalThis.DTU_MMC_SPECIALIZATIONS,
  },
  "mechanical-engineering": {
    name: "Mechanical Engineering",
    specStorageKey: "dtuSpec.mecheng.selectedSpecId",
    defaultSpecId: "engineering-design-and-product-development",
    specializations: globalThis.DTU_MECHENG_SPECIALIZATIONS,
  },
  "ocean-engineering": {
    name: "Ocean Engineering",
    specStorageKey: "dtuSpec.oceaneng.selectedSpecId",
    defaultSpecId: "oceanography",
    specializations: globalThis.DTU_OCEANENG_SPECIALIZATIONS,
  },
  "sustainable-energy-systems": {
    name: "Sustainable Energy Systems",
    specStorageKey: "dtuSpec.ses.selectedSpecId",
    defaultSpecId: "digital-energy-systems",
    specializations: globalThis.DTU_SES_SPECIALIZATIONS,
  },
  "sustainable-energy-technologies": {
    name: "Sustainable Energy Technologies",
    specStorageKey: "dtuSpec.setech.selectedSpecId",
    defaultSpecId: "wind-energy",
    specializations: globalThis.DTU_SETECH_SPECIALIZATIONS,
  },
  "sustainable-fisheries-and-aquaculture": {
    name: "Sustainable Fisheries and Aquaculture",
    specStorageKey: "dtuSpec.sfa.selectedSpecId",
    defaultSpecId: "aquaculture",
    specializations: globalThis.DTU_SFA_SPECIALIZATIONS,
  },
  "wind-energy": {
    name: "Wind Energy",
    specStorageKey: "dtuSpec.wind.selectedSpecId",
    defaultSpecId: "digitalization-in-wind-energy",
    specializations: globalThis.DTU_WIND_SPECIALIZATIONS,
  },
};

function getProgrammeOrFallback(id) {
  return PROGRAMMES[id] ? id : "cse";
}

function getProgrammeConfig(id) {
  return PROGRAMMES[getProgrammeOrFallback(id)];
}

function warnIfMissingData() {
  if (!PROGRAMMES.cse.specializations) {
    console.error(
      "DTU_CSE_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["applied-chemistry"].specializations) {
    console.error(
      "DTU_APCHEM_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["architectural-engineering"].specializations) {
    console.error(
      "DTU_ARCHENG_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES.bioinformatics.specializations) {
    console.error(
      "DTU_BIOINF_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES.biotechnology.specializations) {
    console.error(
      "DTU_BIOTECH_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["business-analytics"].specializations) {
    console.error(
      "DTU_BUSANALYTICS_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["chemical-and-biochemical-engineering"].specializations) {
    console.error(
      "DTU_CHBE_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["civil-engineering"].specializations) {
    console.error(
      "DTU_CIVILENG_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (
    !PROGRAMMES["communication-technologies-and-system-design"].specializations
  ) {
    console.error(
      "DTU_CTSD_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["design-and-innovation"].specializations) {
    console.error(
      "DTU_DESIGNINNOV_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["earth-and-space-physics-and-engineering"].specializations) {
    console.error(
      "DTU_ESPACE_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["electrical-engineering"].specializations) {
    console.error("DTU_EE_SPECIALIZATIONS not found. Check manifest.js order.");
  }
  if (!PROGRAMMES["engineering-acoustics"].specializations) {
    console.error(
      "DTU_ENGAC_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["engineering-light"].specializations) {
    console.error(
      "DTU_ENGLIGHT_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["engineering-physics"].specializations) {
    console.error(
      "DTU_ENGPHYS_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["environmental-engineering"].specializations) {
    console.error(
      "DTU_ENVENG_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["food-technology"].specializations) {
    console.error(
      "DTU_FOODTECH_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["human-centered-artificial-intelligence"].specializations) {
    console.error(
      "DTU_HCAI_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["industrial-engineering-and-management"].specializations) {
    console.error(
      "DTU_IEM_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["materials-and-manufacturing-engineering"].specializations) {
    console.error(
      "DTU_MME_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["mathematical-modelling-and-computation"].specializations) {
    console.error(
      "DTU_MMC_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["mechanical-engineering"].specializations) {
    console.error(
      "DTU_MECHENG_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["ocean-engineering"].specializations) {
    console.error(
      "DTU_OCEANENG_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["sustainable-energy-systems"].specializations) {
    console.error(
      "DTU_SES_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["sustainable-energy-technologies"].specializations) {
    console.error(
      "DTU_SETECH_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["sustainable-fisheries-and-aquaculture"].specializations) {
    console.error(
      "DTU_SFA_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
  if (!PROGRAMMES["wind-energy"].specializations) {
    console.error(
      "DTU_WIND_SPECIALIZATIONS not found. Check manifest.js order.",
    );
  }
}
