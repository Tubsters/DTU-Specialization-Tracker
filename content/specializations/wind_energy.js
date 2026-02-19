// content/specializations/wind_energy.js
// MSc in Wind Energy — Specializations (DTU)
//
// Notes:
// - DTU describes these as recommended specializations; titles can be added to diploma if fulfilled.
// - We encode the course sets and "one of / choose" groups shown on the specialization pages.
// - "mandatory: true" drives your mandatory tag.
// - "alternativeGroup" drives your "alt:" tag (useful for "one of" / "choose N ECTS").
// - "recommended" courses are included with alternativeGroup = "recommended" so they can still count if taken.

globalThis.DTU_WIND_SPECIALIZATIONS = {
  "digitalization-in-wind-energy": {
    name: "Digitalization in Wind Energy",
    // Based on the page: 2 mandatory (10) + choose 2 of list (10) + choose >=20 => min 40 ECTS
    requiredEcts: 40,
    note: "Rules: 2 mandatory courses + choose 2 courses (10 ECTS) + choose at least 20 ECTS from the list.",
    courses: {
      // Mandatory
      46120: {
        ects: 5,
        title: "Scientific Programming for Wind Energy",
        mandatory: true,
      },
      46200: {
        ects: 5,
        title: "Planning and Development of Wind Farms",
        mandatory: true,
      },

      // Choose 2 (10 ECTS) among:
      "02180": {
        ects: 5,
        title: "Introduction to Artificial Intelligence",
        alternativeGroup: "Choose 10 ECTS (pick 2)",
      },
      "02418": {
        ects: 5,
        title: "Statistical modelling: Theory and practice",
        alternativeGroup: "Choose 10 ECTS (pick 2)",
      },
      "02451": {
        ects: 5,
        title: "Introduction to Machine Learning",
        alternativeGroup: "Choose 10 ECTS (pick 2)",
      },
      "02610": {
        ects: 5,
        title: "Optimization and Data Fitting",
        alternativeGroup: "Choose 10 ECTS (pick 2)",
      },
      "02612": {
        ects: 5,
        title: "Constrained Optimization",
        alternativeGroup: "Choose 10 ECTS (pick 2)",
      },
      "02807": {
        ects: 5,
        title: "Computational Tools for Data Science",
        alternativeGroup: "Choose 10 ECTS (pick 2)",
      },
      42112: {
        ects: 5,
        title: "Mathematical Programming Modelling",
        alternativeGroup: "Choose 10 ECTS (pick 2)",
      },
      42114: {
        ects: 5,
        title: "Integer Programming",
        alternativeGroup: "Choose 10 ECTS (pick 2)",
      },

      // Choose at least 20 ECTS among:
      "02417": {
        ects: 5,
        title: "Time Series Analysis",
        alternativeGroup: "Choose ≥20 ECTS",
      },
      "02435": {
        ects: 5,
        title: "Decision-Making Under Uncertainty",
        alternativeGroup: "Choose ≥20 ECTS",
      },
      46100: {
        ects: 5,
        title: "Introduction to Micrometeorology for Wind Energy",
        alternativeGroup: "Choose ≥20 ECTS",
      },
      46110: {
        ects: 5,
        title: "Fundamentals of Aerodynamics",
        alternativeGroup: "Choose ≥20 ECTS",
      },
      46211: {
        ects: 10,
        title: "Offshore Wind Energy",
        alternativeGroup: "Choose ≥20 ECTS",
      },
      46230: {
        ects: 5,
        title: "Power system balancing with large scale wind power",
        alternativeGroup: "Choose ≥20 ECTS",
      },
      46310: {
        ects: 10,
        title: "Wind Turbine Aeroelasticity",
        alternativeGroup: "Choose ≥20 ECTS",
      },
      46320: {
        ects: 10,
        title: "Loads, Aerodynamics and Control of Wind Turbines",
        alternativeGroup: "Choose ≥20 ECTS",
      },
      46400: {
        ects: 10,
        title: "Wind Turbine Measurement Technique",
        alternativeGroup: "Choose ≥20 ECTS",
      },
      46411: {
        ects: 5,
        title: "Design of large composite structures",
        alternativeGroup: "Choose ≥20 ECTS",
      },
      46500: {
        ects: 5,
        title: "Probabilistic Methods in Wind Energy",
        alternativeGroup: "Choose ≥20 ECTS",
      },
      46705: {
        ects: 5,
        title: "Power grid analysis",
        alternativeGroup: "Choose ≥20 ECTS",
      },
      46745: {
        ects: 5,
        title: "Integration of wind power in the power system",
        alternativeGroup: "Choose ≥20 ECTS",
      },
      46750: {
        ects: 5,
        title: "Optimization in modern power systems",
        alternativeGroup: "Choose ≥20 ECTS",
      },
      46755: {
        ects: 5,
        title: "Renewables in electricity markets",
        alternativeGroup: "Choose ≥20 ECTS",
      },
      46765: {
        ects: 5,
        title: "Machine learning for energy systems",
        alternativeGroup: "Choose ≥20 ECTS",
      },
      46910: {
        ects: 5,
        title: "Advanced Finite Element Simulations Using Abaqus",
        alternativeGroup: "Choose ≥20 ECTS",
      },
    },
  },

  "electrical-wind-turbine-systems": {
    name: "Electrical Wind Turbine Systems",
    requiredEcts: 35,
    note: "Programme-specific course path shown on DTU’s specialization page.",
    courses: {
      // Programme specific courses
      46700: {
        ects: 10,
        title: "Introduction to Electric Power Systems",
        mandatory: true,
      },
      46300: {
        ects: 10,
        title: "Wind Turbine Technology and Aerodynamics",
        mandatory: true,
      },
      46705: { ects: 5, title: "Power grid analysis", mandatory: true },
      46755: {
        ects: 5,
        title: "Renewables in electricity markets",
        mandatory: true,
      },
      46745: {
        ects: 5,
        title: "Integration of wind power in the power system",
        mandatory: true,
      },

      // Recommended on the page
      46550: {
        ects: 5,
        title:
          "Offshore wind grid connection and high-voltage DC (HVDC) transmission",
        alternativeGroup: "recommended",
      },
    },
  },

  "electrical-wind-turbine-technology": {
    name: "Electrical Wind Turbine Technology",
    requiredEcts: 35,
    note: "Programme-specific course path shown on DTU’s specialization page.",
    courses: {
      46700: {
        ects: 10,
        title: "Introduction to Electric Power Systems",
        mandatory: true,
      },
      46300: {
        ects: 10,
        title: "Wind Turbine Technology and Aerodynamics",
        mandatory: true,
      },
      46720: { ects: 10, title: "High voltage engineering", mandatory: true },
      46745: {
        ects: 5,
        title: "Integration of wind power in the power system",
        mandatory: true,
      },

      // Recommended on the page
      46550: {
        ects: 5,
        title:
          "Offshore wind grid connection and high-voltage DC (HVDC) transmission",
        alternativeGroup: "recommended",
      },
    },
  },

  "mechanics-and-aerodynamics": {
    name: "Mechanics and Aerodynamics",
    // Programme-specific course path on the page sums to 40 ECTS (excl. thesis)
    requiredEcts: 40,
    note: "Includes the programme-specific course path + recommended courses listed on the specialization page.",
    courses: {
      // Programme specific courses (path shown)
      46200: {
        ects: 5,
        title: "Planning and Development of Wind Farms",
        mandatory: true,
      },
      46300: {
        ects: 10,
        title: "Wind Turbine Technology and Aerodynamics",
        mandatory: true,
      },
      46310: {
        ects: 10,
        title: "Wind Turbine Aeroelasticity",
        mandatory: true,
      },
      46110: {
        ects: 5,
        title: "Fundamentals of Aerodynamics",
        mandatory: true,
      },
      46320: {
        ects: 10,
        title: "Loads, Aerodynamics and Control of Wind Turbines",
        mandatory: true,
      },

      // Recommended
      41237: {
        ects: 5,
        title: "Dynamics of structures: theory and analysis",
        alternativeGroup: "recommended",
      },
      41315: { ects: 5, title: "Applied CFD", alternativeGroup: "recommended" },
      41316: {
        ects: 5,
        title: "Advanced CFD",
        alternativeGroup: "recommended",
      },
      41317: {
        ects: 5,
        title: "Computational Fluid Dynamics",
        alternativeGroup: "recommended",
      },
      46115: {
        ects: 5,
        title: "Turbulence modeling",
        alternativeGroup: "recommended",
      },
      46415: {
        ects: 5,
        title: "Numerical design optimization of wind turbines",
        alternativeGroup: "recommended",
      },
      46600: {
        ects: 5,
        title: "Aeroacoustics",
        alternativeGroup: "recommended",
      },
    },
  },

  "mechanics-of-materials-and-structures": {
    name: "Mechanics of Materials and Structures",
    // Based on the programme-specific path shown on the page: 45 ECTS (excl. thesis)
    requiredEcts: 45,
    note: "Programme-specific path shown on DTU’s page. Page also says: pass at least one of (41525 / 46910).",
    courses: {
      // Programme specific courses (path shown)
      46300: {
        ects: 10,
        title: "Wind Turbine Technology and Aerodynamics",
        mandatory: true,
      },
      46420: {
        ects: 5,
        title: "Composite Materials and Fibres",
        mandatory: true,
      },
      41516: {
        ects: 5,
        title: "Anisotropy and fibre composites",
        mandatory: true,
      },
      46411: {
        ects: 5,
        title: "Design of large composite structures",
        mandatory: true,
      },
      46910: {
        ects: 5,
        title: "Advanced Finite Element Simulations Using Abaqus",
        mandatory: true,
      },
      41237: {
        ects: 5,
        title: "Dynamics of structures: theory and analysis",
        mandatory: true,
      },
      41525: { ects: 10, title: "Finite Element Methods", mandatory: true },

      // “One of the following two courses must be passed” (page text)
      // (Keeping as alt-group so it’s visible in UI even though the path includes both.)
      41525: {
        ects: 10,
        title: "Finite Element Methods (alt rule)",
        alternativeGroup: "One of (41525/46910)",
      },
      46910: {
        ects: 5,
        title: "Advanced Finite Element Simulations Using Abaqus (alt rule)",
        alternativeGroup: "One of (41525/46910)",
      },

      // Recommended
      41526: {
        ects: 5,
        title: "Fracture mechanics",
        alternativeGroup: "recommended",
      },
      41528: {
        ects: 5,
        title: "Advanced mechanics of materials",
        alternativeGroup: "recommended",
      },
      41750: {
        ects: 5,
        title: "Composites Manufacturing",
        alternativeGroup: "recommended",
      },
      46400: {
        ects: 10,
        title: "Wind Turbine Measurement Technique",
        alternativeGroup: "recommended",
      },
    },
  },

  "offshore-wind-energy": {
    name: "Offshore Wind Energy",
    // The programme-specific path shown sums to 60 ECTS (excl. thesis), but the page text
    // has a smaller "mandatory + one-of + one-of" core. To keep it consistent with your
    // tracker style (based on the specialization page course set), we track the core as 40:
    // 46300(10) + 46200(5) + 46211(10) + min(5/10) + 10 = min 40.
    requiredEcts: 40,
    note: "Core rule on DTU page: mandatory (46200, 46211) + one of (41107/46400) + one of (46310/46320). We also include 46300 since it appears in the specialization path table.",
    courses: {
      // Core (treated as mandatory / one-of)
      46300: {
        ects: 10,
        title: "Wind Turbine Technology and Aerodynamics",
        mandatory: true,
      },
      46200: {
        ects: 5,
        title: "Planning and Development of Wind Farms",
        mandatory: true,
      },
      46211: { ects: 10, title: "Offshore Wind Energy", mandatory: true },

      // One of:
      41107: {
        ects: 5,
        title: "Marine and ocean engineering",
        alternativeGroup: "One of (41107/46400)",
      },
      46400: {
        ects: 10,
        title: "Wind Turbine Measurement Technique",
        alternativeGroup: "One of (41107/46400)",
      },

      // One of:
      46310: {
        ects: 10,
        title: "Wind Turbine Aeroelasticity",
        alternativeGroup: "One of (46310/46320)",
      },
      46320: {
        ects: 10,
        title: "Loads, Aerodynamics and Control of Wind Turbines",
        alternativeGroup: "One of (46310/46320)",
      },

      // Recommended
      12421: {
        ects: 5,
        title: "Advanced Soil Mechanics",
        alternativeGroup: "recommended",
      },
      12422: {
        ects: 5,
        title: "Advanced Geotechnical Engineering",
        alternativeGroup: "recommended",
      },
      41222: {
        ects: 5,
        title: "Wave loads on ships and offshore structures",
        alternativeGroup: "recommended",
      },
      41226: {
        ects: 5,
        title: "Advanced Wave Hydrodynamics",
        alternativeGroup: "recommended",
      },
      41237: {
        ects: 5,
        title: "Dynamics of structures: theory and analysis",
        alternativeGroup: "recommended",
      },
      46550: {
        ects: 5,
        title:
          "Offshore wind grid connection and high-voltage DC (HVDC) transmission",
        alternativeGroup: "recommended",
      },
      46700: {
        ects: 10,
        title: "Introduction to Electric Power Systems",
        alternativeGroup: "recommended",
      },
    },
  },
};
