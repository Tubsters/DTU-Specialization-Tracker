// content/specializations/environmental_engineering.js
// MSc in Environmental Engineering — Specializations (DTU)
// Source: DTU specialization pages (incl. discontinued courses that still count)

globalThis.DTU_ENVENG_SPECIALIZATIONS = {
  "climate-change": {
    name: "Climate Change, Mitigation and Adaption",
    requiredEcts: 30,
    note: "",
    courses: {
      12122: { ects: 5, title: "Urban Drainage and Stormwater Management" },
      12145: { ects: 5, title: "Terrestrial Ecology for Engineers" },
      12227: { ects: 5, title: "Regional and global air pollution effects" },
      12228: { ects: 5, title: "Urban air pollution" },
      12345: {
        ects: 5,
        title:
          "Data analysis, prediction and data-driven modelling of environmental systems",
      },
      12856: { ects: 5, title: "Natural Hazards in the Arctic" },
      30574: {
        ects: 5,
        title: "Earth observations for monitoring changes (EO4Change)",
      },
      30755: { ects: 5, title: "Climate change - physics and observations" },
      30857: { ects: 5, title: "Extreme Climate and Physical Nature" },

      // Discontinued courses that still count
      12142: { ects: 5, title: "Industrial Ecology", terminated: true },
      12344: {
        ects: 5,
        title: "Remote Sensing of Terrestrial Ecohydrology",
        terminated: true,
      },
    },
  },

  "environmental-chemistry": {
    name: "Environmental Chemistry and Contamination",
    requiredEcts: 30,
    note: "Includes additional courses for students enrolled prior to September 2021.",
    courses: {
      12115: { ects: 10, title: "Wastewater treatment and valorization" },
      12228: { ects: 5, title: "Urban air pollution" },
      12231: { ects: 5, title: "Applied Analytical Environmental Chemistry" },
      12237: { ects: 10, title: "Chemicals in the environment" },
      12238: {
        ects: 5,
        title:
          "Priority Organic Pollutants - Transport, Distribution and Transformation",
      },
      12245: { ects: 5, title: "Water Pollution" },
      12330: { ects: 10, title: "Contaminated Sites" },
      12331: { ects: 5, title: "Field investigations of contaminated sites" },
      12336: { ects: 5, title: "Groundwater Quality" },
      12775: {
        ects: 5,
        title:
          "Life cycle impact assessment modelling in the context of planetary boundaries",
      },

      // Extra/legacy list (shown on DTU page for earlier cohorts)
      "02431": { ects: 5, title: "Risk Management", terminated: true },
      12226: {
        ects: 5,
        title: "Air Pollution and Environmental Effects",
        terminated: true,
      },
      12233: { ects: 10, title: "Surface Water Quality", terminated: true },
    },
  },

  "environmental-informatics": {
    name: "Environmental Informatics",
    requiredEcts: 30,
    note: "",
    courses: {
      "02409": { ects: 5, title: "Multivariate Statistics" },
      "02417": { ects: 5, title: "Time Series Analysis" },
      "02441": {
        ects: 5,
        title: "Applied Statistics and Statistical Software",
      },
      "02450": {
        ects: 5,
        title: "Introduction to Machine Learning and Data Mining",
      },
      "02582": { ects: 5, title: "Computational Data Analysis" },
      "02807": { ects: 5, title: "Computational Tools for Data Science" },
      12122: { ects: 5, title: "Urban Drainage and Stormwater Management" },
      12345: {
        ects: 5,
        title:
          "Data analysis, prediction and data-driven modelling of environmental systems",
      },
      12773: { ects: 5, title: "Advanced life cycle assessment methods" },
      30574: {
        ects: 5,
        title: "Earth observations for monitoring changes (EO4Change)",
      },
    },
  },

  "environmental-sustainability": {
    name: "Environmental Sustainability Assessment",
    requiredEcts: 30,
    note: "",
    courses: {
      12132: { ects: 5, title: "LCA Modelling of Waste Management Systems" },
      12145: { ects: 5, title: "Terrestrial Ecology for Engineers" },
      12237: { ects: 10, title: "Chemicals in the environment" },
      12238: {
        ects: 5,
        title:
          "Priority Organic Pollutants - Transport, Distribution and Transformation",
      },
      12772: {
        ects: 10,
        title: "Life Cycle Assessment of Products and Systems",
      },
      12773: { ects: 5, title: "Advanced life cycle assessment methods" },
      12775: {
        ects: 5,
        title:
          "Life cycle impact assessment modelling in the context of planetary boundaries",
      },
      41636: { ects: 5, title: "Design for Circular Economy" },
      42014: { ects: 5, title: "Environmental and Resource Economics" },

      // Discontinued courses that still count
      12142: { ects: 5, title: "Industrial Ecology", terminated: true },
      42274: {
        ects: 5,
        title:
          "Sustainable Development Indicators and Sustainable Urban Development",
        terminated: true,
      },
      42275: {
        ects: 5,
        title: "Sustainable Urban Development: a project oriented approach",
        terminated: true,
      },
      42349: {
        ects: 7.5,
        title: "Sustainability challenges I, Systems thinking",
        terminated: true,
      },
      42350: {
        ects: 7.5,
        title:
          "Sustainability challenges II, Specific systems and capstone project",
        terminated: true,
      },
      42375: {
        ects: 5,
        title: "Advanced life-cycle assessment",
        terminated: true,
      },
      42377: {
        ects: 5,
        title: "Life Cycle Management in industry",
        terminated: true,
      },
    },
  },

  waste_circularity: {
    name: "Waste and Circularity",
    requiredEcts: 30,
    note: "",
    courses: {
      12115: { ects: 10, title: "Wastewater treatment and valorization" },
      12130: { ects: 10, title: "Solid Waste Technology and Management" },
      12132: { ects: 5, title: "LCA Modelling of Waste Management Systems" },
      12227: { ects: 5, title: "Regional and global air pollution effects" },
      12228: { ects: 5, title: "Urban air pollution" },
      12238: {
        ects: 5,
        title:
          "Priority Organic Pollutants - Transport, Distribution and Transformation",
      },
      12330: { ects: 10, title: "Contaminated Sites" },
      12772: {
        ects: 10,
        title: "Life Cycle Assessment of Products and Systems",
      },
      12775: {
        ects: 5,
        title:
          "Life cycle impact assessment modelling in the context of planetary boundaries",
      },
      28871: { ects: 10, title: "Production of Biofuels" },

      // Discontinued courses that still count
      12135: {
        ects: 5,
        title: "Waste management at Roskilde Festival",
        terminated: true,
      },
      12136: { ects: 10, title: "Bioenergy Technologies", terminated: true },
      12144: { ects: 5, title: "Material Flow Analysis", terminated: true },
      12226: {
        ects: 5,
        title: "Air Pollution and Environmental Effects",
        terminated: true,
      },
    },
  },

  "water-technology-management": {
    name: "Water Technology and Management",
    requiredEcts: 30,
    note: "",
    courses: {
      12109: {
        ects: 5,
        title: "Physico-Chemical Water Treatment Technologies",
      },
      12115: { ects: 10, title: "Wastewater treatment and valorization" },
      12121: { ects: 10, title: "Water Supply" },
      12122: { ects: 5, title: "Urban Drainage and Stormwater Management" },
      12245: { ects: 5, title: "Water Pollution" },
      12336: { ects: 5, title: "Groundwater Quality" },
      12345: {
        ects: 5,
        title:
          "Data analysis, prediction and data-driven modelling of environmental systems",
      },
      30574: {
        ects: 5,
        title: "Earth observations for monitoring changes (EO4Change)",
      },
      30755: { ects: 5, title: "Climate change - physics and observations" },

      // Discontinued courses that still count
      12110: {
        ects: 5,
        title: "Wastewater Engineering: Treatment and Resource Recovery",
        terminated: true,
      },
      12140: {
        ects: 5,
        title: "Integrated Urban Water Quality Management",
        terminated: true,
      },
      12233: { ects: 10, title: "Surface Water Quality", terminated: true },
      12342: {
        ects: 5,
        title: "Data Driven Hydrological Modeling",
        terminated: true,
      },
    },
  },
};
