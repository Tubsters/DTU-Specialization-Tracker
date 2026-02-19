// content/engineering_acoustics_specializations.js
// =========================
// DTU MSc in Engineering Acoustics – specializations/focus areas
// Source: DTU specialization pages
// =========================

globalThis.DTU_ENGAC_SPECIALIZATIONS = {
  "audio-and-transducer-technology": {
    name: "Audio and Transducer Technology",
    requiredEcts: 25, // 15 mandatory + min 10 optional
    note: "Mandatory 15 ECTS + select a minimum of 10 ECTS from the optional list.",
    courses: {
      // Mandatory (15 ECTS)
      22007: {
        ects: 5,
        title: "Audiology and hearing devices",
        mandatory: true,
      },
      34870: {
        ects: 10,
        title: "Electroacoustic transducers and systems",
        mandatory: true,
      },

      // Optional (min 10 ECTS)
      34848: { ects: 5, title: "Challenges in Acoustic Microsystems" },
      34850: { ects: 10, title: "Architectural acoustics" },
      34860: { ects: 10, title: "Advanced acoustics" },
      34865: { ects: 5, title: "Numerical acoustics" },
      34867: { ects: 5, title: "Acoustic conditions at the Roskilde Festival" },
      34871: { ects: 5, title: "Nonlinear transducers" },
    },
  },

  "hearing-science-and-perception": {
    name: "Hearing Science and Perception",
    requiredEcts: 25, // 15 mandatory + min 10 optional
    note: "Mandatory 15 ECTS + select a minimum of 10 ECTS from the optional list.",
    courses: {
      // Mandatory (15 ECTS)
      22003: {
        ects: 10,
        title: "Auditory signal processing and perception",
        mandatory: true,
      },
      22007: {
        ects: 5,
        title: "Audiology and hearing devices",
        mandatory: true,
      },

      // Optional (min 10 ECTS) (DTU page repeats 22003; kept once as mandatory here)
      "02458": { ects: 5, title: "Cognitive Modelling" },
      22002: { ects: 5, title: "Experimental hearing science" },
      34846: { ects: 5, title: "Environmental acoustics" },
      34850: { ects: 10, title: "Architectural acoustics" },
    },
  },

  "architectural-acoustics-and-environment": {
    name: "Architectural Acoustics and Environment",
    requiredEcts: 25, // 15 mandatory + min 10 optional
    note: "Mandatory 15 ECTS + select a minimum of 10 ECTS from the optional list.",
    courses: {
      // Mandatory (15 ECTS)
      34846: { ects: 5, title: "Environmental acoustics", mandatory: true },
      34850: { ects: 10, title: "Architectural acoustics", mandatory: true },

      // Optional (min 10 ECTS)
      34860: { ects: 10, title: "Advanced acoustics" },
      34865: { ects: 5, title: "Numerical acoustics" },
      34867: { ects: 5, title: "Acoustic conditions at the Roskilde Festival" },
      34880: { ects: 10, title: "Structure-borne sound" },
      46600: { ects: 5, title: "Aeroacoustics" },
    },
  },

  "vibration-structures-and-sound": {
    name: "Vibration, Structures and Sound",
    requiredEcts: 25, // 15 mandatory + min 10 optional
    note: "Mandatory 15 ECTS + select a minimum of 10 ECTS from the optional list.",
    courses: {
      // Mandatory (15 ECTS)
      34880: { ects: 10, title: "Structure-borne sound", mandatory: true },
      41813: {
        ects: 5,
        title: "Finite Element Methods for sound and vibrations",
        mandatory: true,
      },

      // Optional (min 10 ECTS)
      34848: { ects: 5, title: "Challenges in Acoustic Microsystems" },
      34850: { ects: 10, title: "Architectural acoustics" },
      34860: { ects: 10, title: "Advanced acoustics" },
      34865: { ects: 5, title: "Numerical acoustics" },
      34870: { ects: 10, title: "Electroacoustic transducers and systems" },
      41525: { ects: 10, title: "Finite Element Methods" },
    },
  },

  "signal-processing-and-machine-learning": {
    name: "Signal Processing and Machine Learning",
    requiredEcts: 25,
    note: "Mandatory 5 ECTS (02471) + you must select ≥10 ECTS from Group A (22003/34860) + select ≥10 ECTS from Group B list.",
    courses: {
      // Mandatory (5 ECTS)
      "02471": {
        ects: 5,
        title: "Machine learning for signal processing",
        mandatory: true,
      },

      // Group A (must pick ≥10 ECTS)
      22003: {
        ects: 10,
        title: "Auditory signal processing and perception",
        alternativeGroup: "Group A (min 10 ECTS)",
      },
      34860: {
        ects: 10,
        title: "Advanced acoustics",
        alternativeGroup: "Group A (min 10 ECTS)",
      },

      // Group B (min 10 ECTS)
      "02451": { ects: 5, title: "Introduction to Machine Learning" },
      "02456": { ects: 5, title: "Deep learning" },
      34865: { ects: 5, title: "Numerical acoustics" },
      34867: { ects: 5, title: "Acoustic conditions at the Roskilde Festival" },
      34870: { ects: 10, title: "Electroacoustic transducers and systems" },
      34880: { ects: 10, title: "Structure-borne sound" },
    },
  },
};
