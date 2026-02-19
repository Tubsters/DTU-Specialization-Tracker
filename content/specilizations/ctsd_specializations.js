// content/ctsd_specializations.js
// =========================
// DTU MSc in Communication Technologies and System Design (CTSD) specializations
// Source: DTU specialization pages
// =========================

globalThis.DTU_CTSD_SPECIALIZATIONS = {
  "high-speed-communication": {
    name: "High-speed Communication",
    requiredEcts: 35, // 20 ECTS core competence + 15 ECTS advanced
    note: "Core competence: 20 ECTS fixed. Advanced programme specific: choose 15 ECTS from the list.",
    courses: {
      // Core competence (must select these 20 ECTS)
      34130: {
        ects: 10,
        title: "Fundamentals of fibre-optic communication systems",
        mandatory: true,
      },
      34231: { ects: 5, title: "Digital communication 1", mandatory: true },
      34242: {
        ects: 5,
        title:
          "Machine learning techniques for design and optimization of communication systems",
        mandatory: true,
      },

      // Advanced programme specific (choose total 15 ECTS)
      34041: { ects: 5, title: "Waveguide optics" },
      34052: { ects: 10, title: "Nonlinear optics" },
      34153: { ects: 5, title: "Physical concepts in optical communication" },
      34156: { ects: 5, title: "Advanced Optical Communication Systems" },
      34343: { ects: 5, title: "Mobile backhaul networks" },
      34349: { ects: 10, title: "FPGA design for communication systems" },
      34351: { ects: 5, title: "Access networks and home networks" },
    },
  },

  "signal-processing-coding-and-visual-communication": {
    name: "Signal processing, Coding and Visual Communication",
    requiredEcts: 35, // 20 ECTS core competence + 15 ECTS advanced
    note: "Core competence: 20 ECTS where 34249 OR 34349 (10 ECTS) + 34231 + 34242. Advanced: choose 15 ECTS from the list.",
    courses: {
      // Core competence (20 ECTS)
      34231: { ects: 5, title: "Digital communication 1", mandatory: true },
      34242: {
        ects: 5,
        title:
          "Machine learning techniques for design and optimization of communication systems",
        mandatory: true,
      },
      34249: {
        ects: 10,
        title: "Synthesis Project for Communication Technologies",
        mandatory: true,
        alternativeGroup: "core10",
      },
      34349: {
        ects: 10,
        title: "FPGA design for communication systems",
        mandatory: true,
        alternativeGroup: "core10",
      },

      // Advanced programme specific (choose total 15 ECTS)
      "01405": { ects: 5, title: "Algebraic Error-Correcting Codes" },
      "02471": { ects: 5, title: "Machine learning for signal processing" },
      34240: {
        ects: 5,
        title: "Data Science, Compression and Image Communication",
      },
      34241: { ects: 5, title: "Digital video technology" },
      34250: { ects: 5, title: "Advanced image and video coding" },
      34251: {
        ects: 5,
        title: "Advanced forward error correction and iterative decoding",
      },
    },
  },

  "mobile-wireless-communication-and-internet-of-things": {
    name: "Mobile/wireless communication and Internet of Things",
    requiredEcts: 15,
    note: "Advanced programme specific: choose 15 ECTS from the list (DTU page also lists recommended combinations for Mobile vs IoT).",
    courses: {
      "02203": { ects: 5, title: "Design of Digital Systems" },
      30430: {
        ects: 10,
        title: "Advanced antenna techniques and measurements",
      },
      34343: { ects: 5, title: "Mobile backhaul networks" },
      34346: {
        ects: 5,
        title:
          "Networking technologies and application development for Internet of Things (IoT)",
      },
      34349: { ects: 10, title: "FPGA design for communication systems" },
      34351: { ects: 5, title: "Access networks and home networks" },
      34365: { ects: 5, title: "IoT Prototyping" },
      34371: { ects: 5, title: "Communication Network Security" },
      34373: {
        ects: 5,
        title:
          "Introduction to microcontroller development for IoT using embedded C",
      },
      34374: { ects: 5, title: "IoT Hardware and PCB Design" },
    },
  },

  "communication-hardware-design-and-programming": {
    name: "Communication Hardware Design and Programming",
    requiredEcts: 35, // 20 ECTS core competence + 15 ECTS advanced
    note: "Core competence: 20 ECTS fixed. Advanced programme specific: choose 15 ECTS from the list.",
    courses: {
      // Core competence (must select these 20 ECTS)
      34231: { ects: 5, title: "Digital communication 1", mandatory: true },
      34242: {
        ects: 5,
        title:
          "Machine learning techniques for design and optimization of communication systems",
        mandatory: true,
      },
      34349: {
        ects: 10,
        title: "FPGA design for communication systems",
        mandatory: true,
      },

      // Advanced programme specific (choose total 15 ECTS)
      "02203": { ects: 5, title: "Design of Digital Systems" },
      34249: {
        ects: 10,
        title: "Synthesis Project for Communication Technologies",
      },
      34251: {
        ects: 5,
        title: "Advanced forward error correction and iterative decoding",
      },
      34343: { ects: 5, title: "Mobile backhaul networks" },
      34346: {
        ects: 5,
        title:
          "Networking technologies and application development for Internet of Things (IoT)",
      },
      34359: { ects: 5, title: "SDN: software-defined networking" },
      34371: { ects: 5, title: "Communication Network Security" },
      34373: {
        ects: 5,
        title:
          "Introduction to microcontroller development for IoT using embedded C",
      },
      34374: { ects: 5, title: "IoT Hardware and PCB Design" },
    },
  },

  "cloud-and-cybersecurity": {
    name: "Cloud and Cybersecurity",
    requiredEcts: 15,
    note: "Advanced programme specific: DTU text implies 15 ECTS (it references “more than 15 ECTS”), and course 34370 is mandatory.",
    courses: {
      "02271": { ects: 5, title: "Advanced Cybersecurity" },
      34343: { ects: 5, title: "Mobile backhaul networks" },
      34359: { ects: 5, title: "SDN: software-defined networking" },
      34370: { ects: 5, title: "Cloud Networking", mandatory: true },
      34371: { ects: 5, title: "Communication Network Security" },
    },
  },
};
