// content/electrical_engineering_specializations.js
// =========================
// DTU MSc in Electrical Engineering specializations
// Source: DTU specialization pages
// =========================

globalThis.DTU_EE_SPECIALIZATIONS = {
  acoustics: {
    name: "Acoustics",
    requiredEcts: 50,
    note: "Structure on DTU page: CORE1 (15 ECTS mandatory), INNO (choose 5), CORE2 (choose 20), AVANC (choose 10).",
    courses: {
      // CORE1 (mandatory 15)
      34840: {
        ects: 5,
        title: "Fundamentals of acoustics and noise control",
        mandatory: true,
      },
      34870: {
        ects: 10,
        title: "Electroacoustic transducers and systems",
        mandatory: true,
      },

      // INNO (choose 5)
      34847: { ects: 5, title: "Sound Tech Summer School - Innovation Camp" },
      34848: { ects: 5, title: "Challenges in Acoustic Microsystems" },

      // CORE2 (choose 20)
      34846: { ects: 5, title: "Environmental acoustics" },
      34850: { ects: 10, title: "Architectural acoustics" },
      34860: { ects: 10, title: "Advanced acoustics" },
      34865: { ects: 5, title: "Numerical acoustics" },
      34871: { ects: 5, title: "Nonlinear transducers" },
      34880: { ects: 10, title: "Structure-borne sound" },

      // AVANC (choose 10) – additional courses listed on page
      22001: { ects: 5, title: "Acoustic signal processing" },
      22003: { ects: 10, title: "Auditory signal processing and perception" },
      30415: { ects: 10, title: "RF communication circuits" },
      30421: {
        ects: 10,
        title: "Advanced Microwave Techniques and High Speed Electronics",
      },
      34652: { ects: 10, title: "Power Electronics 1" },
    },
  },

  "automation-and-robot-technology": {
    name: "Automation and Robot Technology",
    requiredEcts: 50,
    note: "Structure on DTU page: CORE1 (10 mandatory), INNO (5 mandatory), CORE2 (choose 20), AVANC (choose 15).",
    courses: {
      // CORE1 (mandatory)
      34745: { ects: 10, title: "Linear control design 2", mandatory: true },

      // INNO (mandatory)
      34755: {
        ects: 5,
        title: "Building dependable robot systems",
        mandatory: true,
      },

      // CORE2 (choose 20)
      30330: { ects: 10, title: "Image Analysis with Microcomputer" },
      34366: { ects: 5, title: "Intelligent systems" },
      34367: { ects: 5, title: "Project in Intelligent Systems" },
      34746: { ects: 10, title: "Robust and fault-tolerant control" },

      // AVANC (choose 15) – additional courses listed on page
      "02203": { ects: 5, title: "Design of Digital Systems" },
      "02205": { ects: 5, title: "VLSI Design" },
      "02209": { ects: 5, title: "Test of Digital Systems" },
      "02421": { ects: 5, title: "Stochastic Adaptive Control" },
      34748: {
        ects: 5,
        title: "Modelling for operation of complex industrial plants",
      },
      34752: { ects: 5, title: "Bio-inspired control for robots" },
      34753: { ects: 5, title: "Robotics" },
      34760: {
        ects: 5,
        title: "Safety and Reliability in Robotic and Automation Systems",
      },
    },
  },

  "electric-energy-systems": {
    name: "Electric Energy Systems",
    requiredEcts: 50,
    note: "Structure on DTU page: INNO (5 mandatory), CORE1 (10 mandatory), CORE2 (choose 20), AVANC (choose 15).",
    courses: {
      // INNO (mandatory)
      46745: {
        ects: 5,
        title: "Integration of wind power in the power system",
        mandatory: true,
      },

      // CORE1 (mandatory)
      46700: {
        ects: 10,
        title: "Introduction to Electric Power Systems",
        mandatory: true,
      },

      // CORE2 (choose 20)
      46705: { ects: 5, title: "Power grid analysis" },
      46711: {
        ects: 5,
        title: "Stability and control in electric power systems",
      },
      46720: { ects: 10, title: "High voltage engineering" },
      46740: {
        ects: 5,
        title: "Distributed energy technologies, modelling and control",
      },
      46755: { ects: 5, title: "Renewables in electricity markets" },

      // AVANC (choose 15)
      34652: { ects: 10, title: "Power Electronics 1" },
      46550: {
        ects: 5,
        title:
          "Offshore wind grid connection and high-voltage DC (HVDC) transmission",
      },
      46715: { ects: 5, title: "Transients in power systems" },
      46725: { ects: 5, title: "Electrical machines" },
      46735: {
        ects: 10,
        title: "Wind, solar and energy storage electrical drive trains",
      },
      46750: { ects: 5, title: "Optimization in modern power systems" },
      46765: { ects: 5, title: "Machine learning for energy systems" },
      46770: { ects: 5, title: "Integrated energy grids" },
      46775: {
        ects: 5,
        title:
          "Real-time electro-magnetic transient simulation and protection testing in power systems",
      },
    },
  },

  electronics: {
    name: "Electronics",
    requiredEcts: 50,
    note: "Structure on DTU page: CORE1 (10 mandatory), INNO (5 mandatory), CORE2 (choose 20), AVANC (choose 15).",
    courses: {
      // CORE1 (mandatory)
      34652: { ects: 10, title: "Power Electronics 1", mandatory: true },

      // INNO (mandatory)
      34658: {
        ects: 5,
        title: "Research immersion 1 - Power electronics and IC design",
        mandatory: true,
      },

      // CORE2 (choose 20)
      34653: { ects: 5, title: "Power Electronics 2. Laboratory course" },
      34654: { ects: 5, title: "Circuit technology and EMC" },
      34655: { ects: 5, title: "Integrated analog electronics 2" },
      34656: {
        ects: 5,
        title: "Design and layout of integrated CMOS circuits",
      },
      34657: { ects: 10, title: "System level integrated circuit design" },
      34659: {
        ects: 10,
        title: "Research immersion 2 - Power electronics and IC design",
      },

      // AVANC (choose 15) – additional courses listed on page
      "02203": { ects: 5, title: "Design of Digital Systems" },
      "02205": { ects: 5, title: "VLSI Design" },
      30021: { ects: 5, title: "Digital Instrumentation" },
      30415: { ects: 10, title: "RF communication circuits" },
      30421: {
        ects: 10,
        title: "Advanced Microwave Techniques and High Speed Electronics",
      },
      34349: { ects: 10, title: "FPGA design for communication systems" },
      34365: { ects: 5, title: "IoT Prototyping" },
      34373: {
        ects: 5,
        title:
          "Introduction to microcontroller development for IoT using embedded C",
      },
      34374: { ects: 5, title: "IoT Hardware and PCB Design" },
      34540: {
        ects: 5,
        title:
          "Light emitting diodes and photovoltaics for energy applications",
      },
    },
  },

  "space-technology": {
    name: "Space Technology",
    requiredEcts: 50,
    note: "Structure on DTU page: CORE1 (10 mandatory), INNO (5 mandatory), CORE2 (choose 20), AVANC (choose 15).",
    courses: {
      // CORE1 (mandatory)
      30300: {
        ects: 10,
        title: "Introduction to Satellite Systems",
        mandatory: true,
      },

      // INNO (mandatory)
      30310: { ects: 5, title: "Space Systems Engineering", mandatory: true },

      // CORE2 (choose 20)
      30320: { ects: 10, title: "Spacecraft Instrumentation Systems" },
      30330: { ects: 10, title: "Image Analysis with Microcomputer" },
      30350: { ects: 10, title: "Remote Sensing" },

      // AVANC (choose 15)
      "02203": { ects: 5, title: "Design of Digital Systems" },
      30021: { ects: 5, title: "Digital Instrumentation" },
      30340: { ects: 10, title: "Radar and Radiometer Systems" },
      30421: {
        ects: 10,
        title: "Advanced Microwave Techniques and High Speed Electronics",
      },
    },
  },

  "wireless-engineering": {
    name: "Wireless Engineering",
    requiredEcts: 50,
    note: "Structure on DTU page: CORE1 (20 mandatory), INNO (5 mandatory), CORE2 (choose 20), AVANC (choose 5).",
    courses: {
      // CORE1 (mandatory 20)
      30421: {
        ects: 10,
        title: "Advanced Microwave Techniques and High Speed Electronics",
        mandatory: true,
      },
      30430: {
        ects: 10,
        title: "Advanced antenna techniques and measurements",
        mandatory: true,
      },

      // INNO (mandatory)
      30428: { ects: 5, title: "Advanced electromagnetics", mandatory: true },

      // CORE2 (choose 20)
      30350: { ects: 10, title: "Remote Sensing" },
      30410: { ects: 10, title: "Antenna and microwave techniques" },
      30415: { ects: 10, title: "RF communication circuits" },

      // AVANC (choose 5) – additional courses listed on page
      30340: { ects: 10, title: "Radar and Radiometer Systems" },
      30970: {
        ects: 10,
        title: "Advanced microwave and high-speed integrated circuits",
      },
    },
  },
};
