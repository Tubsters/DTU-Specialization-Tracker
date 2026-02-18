// content/cse_specializations.js
// Expose specializations on globalThis so other content scripts can use it.
globalThis.DTU_CSE_SPECIALIZATIONS = {
  "software-engineering": {
    name: "Software Engineering",
    requiredEcts: 25,
    note: "",
    courses: {
      "02242": { ects: 7.5, title: "Program Analysis" },
      "02245": { ects: 7.5, title: "Program Verification" },
      "02262": { ects: 5, title: "Formal Aspects of Process Science" },
      "02266": { ects: 5, title: "User Experience Engineering" },
      "02267": { ects: 5, title: "Software Development of Web Services" },
      "02268": {
        ects: 5,
        title: "Process-oriented and Event-driven Software Systems",
      },
      "02269": { ects: 5, title: "Process Mining" },
      "02270": { ects: 5, title: "Cybersecurity Fundamentals" },
      "02291": { ects: 5, title: "System Integration" },
      "02221": {
        ects: 5,
        title: "Foundations of Distributed Systems",
        terminated: true,
      },
      "02239": { ects: 7.5, title: "Data Security", terminated: true },
      "02261": { ects: 5, title: "Software Startup Studio", terminated: true },
      "02263": {
        ects: 5,
        title: "Formal Aspects of Software Engineering",
        terminated: true,
      },
    },
  },

  "ai-and-algorithms": {
    name: "Artificial Intelligence and Algorithms",
    requiredEcts: 25,
    note: "",
    courses: {
      "02249": { ects: 7.5, title: "Computationally Hard Problems" },
      "02256": { ects: 5, title: "Automated Reasoning" },
      "02282": { ects: 7.5, title: "Algorithms for Massive Data Sets" },
      "02285": {
        ects: 7.5,
        title: "Artificial Intelligence and Multi-Agent Systems",
      },
      "02287": {
        ects: 5,
        title: "Logical Theories for Uncertainty and Learning",
      },
      "02289": {
        ects: 5,
        title: "Algorithmic Techniques for Modern Data Models",
      },
      "02291": { ects: 5, title: "System Integration" },
      "02221": {
        ects: 5,
        title: "Foundations of Distributed Systems",
        terminated: true,
      },
    },
  },

  cybersecurity: {
    name: "Cybersecurity",
    requiredEcts: 25,
    note: "",
    courses: {
      "02231": { ects: 5, title: "Cryptography Fundamentals" },
      "02232": { ects: 5, title: "Applied Cryptography" },
      "02234": { ects: 5, title: "Research Topics in Cybersecurity" },
      "02270": { ects: 5, title: "Cybersecurity Fundamentals" },
      "02271": { ects: 5, title: "Advanced Cybersecurity" },
      "02275": { ects: 5, title: "Ethical Hacking" },
      "02276": { ects: 5, title: "Usable Security and Privacy" },
      "02277": {
        ects: 5,
        title: "Cyber Risk Management and Incident Response",
      },
      "02278": { ects: 5, title: "Post-Quantum Cryptography" },
      "02291": { ects: 5, title: "System Integration" },
      "02221": {
        ects: 5,
        title: "Foundations of Distributed Systems",
        terminated: true,
      },
      "02233": { ects: 5, title: "Network Security", terminated: true },
      "02238": { ects: 5, title: "Biometric Systems", terminated: true },
      "02239": { ects: 7.5, title: "Data Security", terminated: true },
      "02255": { ects: 5, title: "Modern Cryptography", terminated: true },
    },
  },

  "computer-security": {
    name: "Computer Security",
    requiredEcts: 25,
    note: "Only for students accepted prior to September 2025.",
    courses: {
      "02231": { ects: 5, title: "Cryptography Fundamentals" },
      "02232": { ects: 5, title: "Applied Cryptography" },
      "02234": { ects: 5, title: "Research Topics in Cybersecurity" },
      "02242": { ects: 7.5, title: "Program Analysis" },
      "02244": { ects: 7.5, title: "Logic for Security" },
      "02270": { ects: 5, title: "Cybersecurity Fundamentals" },
      "02271": { ects: 5, title: "Advanced Cybersecurity" },
      "02278": { ects: 5, title: "Post-Quantum Cryptography" },
      "02291": { ects: 5, title: "System Integration" },
      "02221": {
        ects: 5,
        title: "Foundations of Distributed Systems",
        terminated: true,
      },
      "02233": { ects: 5, title: "Network Security", terminated: true },
      "02238": { ects: 5, title: "Biometric Systems", terminated: true },
      "02239": { ects: 7.5, title: "Data Security", terminated: true },
      "02255": { ects: 5, title: "Modern Cryptography", terminated: true },
    },
  },

  "digital-systems": {
    name: "Digital Systems",
    requiredEcts: 25,
    note: "",
    courses: {
      "02201": { ects: 5, title: "Agile Hardware Design" },
      "02203": { ects: 5, title: "Design of Digital Systems" },
      "02205": { ects: 5, title: "VLSI Design" },
      "02207": { ects: 5, title: "Verification of Digital Systems" },
      "02209": { ects: 5, title: "Test of Digital Systems" },
      "02211": { ects: 5, title: "Research Topics in Computer Architecture" },
      "02214": { ects: 5, title: "Hardware/Software Codesign" },
      "02225": { ects: 5, title: "Distributed Real-Time Systems" },
      "02291": { ects: 5, title: "System Integration" },
      "02204": {
        ects: 5,
        title: "Design of Asynchronous Circuits",
        terminated: true,
      },
      "02217": {
        ects: 5,
        title: "Design of Arithmetic Processors",
        terminated: true,
      },
      "02221": {
        ects: 5,
        title: "Foundations of Distributed Systems",
        terminated: true,
      },
      "02223": {
        ects: 7.5,
        title: "Model-Based Systems Engineering",
        terminated: true,
      },
    },
  },

  "embedded-and-distributed": {
    name: "Embedded and Distributed Systems",
    requiredEcts: 25,
    note: "",
    courses: {
      "02203": { ects: 5, title: "Design of Digital Systems" },
      "02211": { ects: 5, title: "Research Topics in Computer Architecture" },
      "02214": { ects: 5, title: "Hardware/Software Codesign" },
      "02225": { ects: 5, title: "Distributed Real-Time Systems" },
      "02226": { ects: 5, title: "Networked Embedded Systems" },
      "02249": { ects: 7.5, title: "Computationally Hard Problems" },
      "02258": { ects: 5, title: "Parallel Computer Systems" },
      "02291": { ects: 5, title: "System Integration" },
      "02221": {
        ects: 5,
        title: "Foundations of Distributed Systems",
        terminated: true,
      },
      "02223": {
        ects: 7.5,
        title: "Model-Based Systems Engineering",
        terminated: true,
      },
      "02224": {
        ects: 5,
        title: "Modelling and Analysis of Real-Time Systems",
        terminated: true,
      },
      "02229": { ects: 7.5, title: "Systems Optimization", terminated: true },
      "02257": {
        ects: 5,
        title: "Applied Functional Programming",
        terminated: true,
      },
    },
  },

  "safe-and-secure-by-design": {
    name: "Safe and Secure by Design",
    requiredEcts: 25,
    note: "",
    courses: {
      "02231": { ects: 5, title: "Cryptography Fundamentals" },
      "02232": { ects: 5, title: "Applied Cryptography" },
      "02242": { ects: 7.5, title: "Program Analysis" },
      "02244": { ects: 7.5, title: "Logic for Security" },
      "02245": { ects: 7.5, title: "Program Verification" },
      "02246": { ects: 7.5, title: "Model Checking" },
      "02247": { ects: 5, title: "Compiler Construction" },
      "02256": { ects: 5, title: "Automated Reasoning" },
      "02262": { ects: 5, title: "Formal Aspects of Process Science" },
      "02291": { ects: 5, title: "System Integration" },
      "02221": {
        ects: 5,
        title: "Foundations of Distributed Systems",
        terminated: true,
      },
      "02223": {
        ects: 7.5,
        title: "Model-Based Systems Engineering",
        terminated: true,
      },
      "02263": {
        ects: 5,
        title: "Formal Aspects of Software Engineering",
        terminated: true,
      },
    },
  },
};

// Optional: freeze to avoid accidental mutation
Object.freeze(globalThis.DTU_CSE_SPECIALIZATIONS);
