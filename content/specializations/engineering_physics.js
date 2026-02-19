// content/specializations/engineering-physics.js
// Source: DTU Engineering Physics specialization pages (programme specific courses)

globalThis.DTU_ENGPHYS_SPECIALIZATIONS = {
  "energy-physics": {
    name: "Energy Physics",
    requiredEcts: 50,
    note: "Rules from DTU page: choose at least 5 ECTS in each core group (Experimental, Digital, Theoretical). Total programme-specific courses must reach at least 50 ECTS together with Innovation course II.",
    courses: {
      // Innovation course II (shown in recommended plans)
      10750: {
        ects: 5,
        title: "Innovation Projects at the Physics Department",
        mandatory: true,
      },

      // Core groups (choose >= 5 ECTS per group)
      10304: {
        ects: 10,
        title: "Experimental Surface Physics",
        alternativeGroup: "Experimental",
      },
      34553: {
        ects: 5,
        title: "Applied photovoltaics",
        alternativeGroup: "Experimental",
      },

      10302: {
        ects: 10,
        title:
          "Electronic Structure Methods in Material Physics, Chemistry and Biology",
        alternativeGroup: "Digital",
      },
      10316: {
        ects: 5,
        title:
          "Materials design with machine learning and artificial intelligence",
        alternativeGroup: "Digital",
      },

      10122: {
        ects: 5,
        title: "Statistical Physics",
        alternativeGroup: "Theoretical",
      },
      10319: {
        ects: 5,
        title: "Advanced solid state physics",
        alternativeGroup: "Theoretical",
      },

      // Other programme specific courses (eligible)
      10333: { ects: 5, title: "Physics of Sustainable Energy" },
      10339: {
        ects: 5,
        title:
          "Concepts in heterogeneous catalysis and applications to energy conversion",
      },
      10400: { ects: 5, title: "Plasma Physics" },
      10401: { ects: 5, title: "Experimental plasma physics" },
      10411: { ects: 5, title: "Nuclear reactor physics" },
      10414: {
        ects: 5,
        title: "Neutronics Monte-Carlo simulation of nuclear reactors",
      },
      10871: {
        ects: 5,
        title: "Advanced design and simulation of solar cells",
      },
      34540: {
        ects: 5,
        title:
          "Light emitting diodes and photovoltaics for energy applications",
      },
      34551: { ects: 5, title: "Thin film photovoltaics" },
      34552: { ects: 5, title: "Photovoltaic systems" },
      47310: {
        ects: 5,
        title:
          "Battery materials and chemistries: from fundamental mechanisms to battery cells",
      },
      47319: { ects: 5, title: "Functional materials" },
      47330: { ects: 5, title: "Energy storage and conversion" },
      47333: { ects: 5, title: "Electron microscopy for materials science" },
    },
  },

  "lifescience-physics": {
    name: "Lifescience Physics",
    requiredEcts: 50,
    note: "Rules from DTU page: choose at least 5 ECTS in each core group (Experimental, Digital, Theoretical). Total programme-specific courses must reach at least 50 ECTS together with Innovation course II.",
    courses: {
      10750: {
        ects: 5,
        title: "Innovation Projects at the Physics Department",
        mandatory: true,
      },

      // Core
      10862: {
        ects: 5,
        title: "Polymer micro fabrication",
        alternativeGroup: "Experimental",
      },
      22603: {
        ects: 5,
        title: "Light microscopy for life science",
        alternativeGroup: "Experimental",
      },

      10350: {
        ects: 5,
        title: "Numerical studies in physics",
        alternativeGroup: "Digital",
      },
      22112: {
        ects: 5,
        title: "High Performance Computing in Life Science",
        alternativeGroup: "Digital",
      },

      10122: {
        ects: 5,
        title: "Statistical Physics",
        alternativeGroup: "Theoretical",
      },
      10346: {
        ects: 5,
        title: "Advanced Continuum Physics",
        alternativeGroup: "Theoretical",
      },

      // Other
      10255: { ects: 5, title: "Advanced 3D X-ray imaging" },
      10337: { ects: 5, title: "Theoretical microfluidics" },

      // cleanroom course appears as "or" June/January
      10852: {
        ects: 5,
        title: "Introduction to cleanroom-based microfabrication",
        alternativeGroup: "Cleanroom intro",
      },
      10851: {
        ects: 5,
        title: "Introduction to cleanroom-based microfabrication",
        alternativeGroup: "Cleanroom intro",
      },

      22117: { ects: 5, title: "Protein structure and computational biology" },
      22203: {
        ects: 10,
        title: "Conceive, Design, Implement, and Operate a Healthcare Product",
      },
      22283: {
        ects: 10,
        title: "Molecular thermodynamics, transport, and analytics",
      },
      22485: { ects: 10, title: "Medical imaging systems" },
      22506: { ects: 5, title: "Medical magnetic resonance imaging" },
      22507: { ects: 5, title: "Advanced magnetic resonance imaging" },
      22508: {
        ects: 5,
        title:
          "Practical NMR spectroscopy: Making reactions in (bio)chemistry visible",
      },
      22511: { ects: 5, title: "Biomedical optics" },
      22530: { ects: 5, title: "Computational radiation dosimetry" },
      22610: { ects: 5, title: "Physics in Health Technology" },
      27510: { ects: 5, title: "Biosensors and bioanalysis" },
      27665: { ects: 5, title: "LabChip: Design of Lab-on-a-chip systems" },
      34430: { ects: 5, title: "Introduction to biophotonics" },
    },
  },

  "materials-physics": {
    name: "Materials Physics",
    requiredEcts: 50,
    note: "Rules from DTU page: choose at least 5 ECTS in each core group (Experimental, Digital, Theoretical). Total programme-specific courses must reach at least 50 ECTS together with Innovation course II.",
    courses: {
      10750: {
        ects: 5,
        title: "Innovation Projects at the Physics Department",
        mandatory: true,
      },

      // Core
      10304: {
        ects: 10,
        title: "Experimental Surface Physics",
        alternativeGroup: "Experimental",
      },
      47333: {
        ects: 5,
        title: "Electron microscopy for materials science",
        alternativeGroup: "Experimental",
      },

      10302: {
        ects: 10,
        title:
          "Electronic Structure Methods in Material Physics, Chemistry and Biology",
        alternativeGroup: "Digital",
      },
      10316: {
        ects: 5,
        title:
          "Materials design with machine learning and artificial intelligence",
        alternativeGroup: "Digital",
      },

      10112: {
        ects: 10,
        title: "Advanced Quantum Mechanics",
        alternativeGroup: "Theoretical",
      },
      10319: {
        ects: 5,
        title: "Advanced solid state physics",
        alternativeGroup: "Theoretical",
      },

      // Other
      10200: {
        ects: 5,
        title:
          "The structure and dynamics of materials studied with X-rays and neutrons",
      },
      10255: { ects: 5, title: "Advanced 3D X-ray imaging" },
      10306: {
        ects: 5,
        title: "Theory of 2D materials and Strong Light-Matter Interaction",
      },
      10314: { ects: 5, title: "Magnetism and Magnetic Materials" },
      10315: {
        ects: 10,
        title: "Magnetism and Magnetic Materials - with project",
      },
      10321: { ects: 10, title: "Nanosystems engineering" },
      10325: {
        ects: 5,
        title: "Quantum mechanical modelling of nanoelectronics",
      },
      10339: {
        ects: 5,
        title:
          "Concepts in heterogeneous catalysis and applications to energy conversion",
      },
      10346: { ects: 5, title: "Advanced Continuum Physics" },
      10413: { ects: 5, title: "Defects in solids" },
      10521: {
        ects: 10,
        title: "Physics and technology of two-dimensional materials",
      },
      10871: {
        ects: 5,
        title: "Advanced design and simulation of solar cells",
      },
      34032: { ects: 5, title: "Optical properties of solids" },
      34051: { ects: 10, title: "Nanophotonics" },
      34052: { ects: 10, title: "Nonlinear optics" },
      34551: { ects: 5, title: "Thin film photovoltaics" },
      47319: { ects: 5, title: "Functional materials" },
      47336: {
        ects: 5,
        title:
          "Applications of X-ray and neutron scattering in biology, chemistry, and physics",
      },
    },
  },

  "nanosystems-engineering": {
    name: "Nanosystems Engineering",
    requiredEcts: 50,
    note: "Rules from DTU page: choose at least 5 ECTS in each core group (Experimental, Digital, Theoretical). Total programme-specific courses must reach at least 50 ECTS together with Innovation course II.",
    courses: {
      10750: {
        ects: 5,
        title: "Innovation Projects at the Physics Department",
        mandatory: true,
      },

      // Core
      10855: {
        ects: 10,
        title: "Advanced fabrication of micro- and nanostructures",
        alternativeGroup: "Experimental",
      },

      10350: {
        ects: 5,
        title: "Numerical studies in physics",
        alternativeGroup: "Digital",
      },
      34053: {
        ects: 5,
        title: "Numerical methods in photonics",
        alternativeGroup: "Digital",
      },

      10319: {
        ects: 5,
        title: "Advanced solid state physics",
        alternativeGroup: "Theoretical",
      },
      34051: {
        ects: 10,
        title: "Nanophotonics",
        alternativeGroup: "Theoretical",
      },

      // Other
      10321: { ects: 10, title: "Nanosystems engineering" },
      10337: { ects: 5, title: "Theoretical microfluidics" },
      10346: { ects: 5, title: "Advanced Continuum Physics" },
      10521: {
        ects: 10,
        title: "Physics and technology of two-dimensional materials",
      },
      10850: {
        ects: 5,
        title: "Micro- and nanofabrication for quantum engineering",
      },

      10852: {
        ects: 5,
        title: "Introduction to cleanroom-based microfabrication",
        alternativeGroup: "Cleanroom intro",
      },
      10851: {
        ects: 5,
        title: "Introduction to cleanroom-based microfabrication",
        alternativeGroup: "Cleanroom intro",
      },

      10862: { ects: 5, title: "Polymer micro fabrication" },
      10871: {
        ects: 5,
        title: "Advanced design and simulation of solar cells",
      },
      27510: { ects: 5, title: "Biosensors and bioanalysis" },
      27665: { ects: 5, title: "LabChip: Design of Lab-on-a-chip systems" },
      34539: {
        ects: 5,
        title:
          "Design, fabrication and characterization of optical planar waveguide components",
      },
      34540: {
        ects: 5,
        title:
          "Light emitting diodes and photovoltaics for energy applications",
      },
      34551: { ects: 5, title: "Thin film photovoltaics" },
      47333: { ects: 5, title: "Electron microscopy for materials science" },
    },
  },

  "quantum-engineering": {
    name: "Quantum Engineering",
    requiredEcts: 50,
    note: "Rules from DTU page: choose at least 5 ECTS in each core group (Experimental, Digital, Theoretical). Total programme-specific courses must reach at least 50 ECTS together with Innovation course II.",
    courses: {
      10750: {
        ects: 5,
        title: "Innovation Projects at the Physics Department",
        mandatory: true,
      },

      // Core
      10386: {
        ects: 5,
        title: "Experimental Techniques in Quantum Technology",
        alternativeGroup: "Experimental",
      },
      10855: {
        ects: 10,
        title: "Advanced fabrication of micro- and nanostructures",
        alternativeGroup: "Experimental",
      },

      10325: {
        ects: 5,
        title: "Quantum mechanical modelling of nanoelectronics",
        alternativeGroup: "Digital",
      },
      10387: {
        ects: 5,
        title: "Scientific computing in quantum information science",
        alternativeGroup: "Digital",
      },

      10112: {
        ects: 10,
        title: "Advanced Quantum Mechanics",
        alternativeGroup: "Theoretical",
      },
      10380: {
        ects: 10,
        title: "Quantum Optics",
        alternativeGroup: "Theoretical",
      },

      // Other
      10122: { ects: 5, title: "Statistical Physics" },
      10319: { ects: 5, title: "Advanced solid state physics" },
      10384: { ects: 5, title: "Quantum information" },
      10385: { ects: 5, title: "Quantum Information Technology" },
      10521: {
        ects: 10,
        title: "Physics and technology of two-dimensional materials",
      },
      10850: {
        ects: 5,
        title: "Micro- and nanofabrication for quantum engineering",
      },
      34032: { ects: 5, title: "Optical properties of solids" },
      34042: { ects: 5, title: "Quantum photonic communication" },
      34051: { ects: 10, title: "Nanophotonics" },
      34153: { ects: 5, title: "Physical concepts in optical communication" },
    },
  },

  "solid-state-optics": {
    name: "Solid-state Optics",
    requiredEcts: 50,
    note: "Rules from DTU page: choose at least 5 ECTS in each core group (Experimental, Digital, Theoretical). Total programme-specific courses must reach at least 50 ECTS.",
    courses: {
      10750: {
        ects: 5,
        title: "Innovation Projects at the Physics Department",
        mandatory: true,
      },

      // Core
      10855: {
        ects: 10,
        title: "Advanced fabrication of micro- and nanostructures",
        alternativeGroup: "Experimental",
      },
      34046: {
        ects: 5,
        title: "Experimental methods in photonics",
        alternativeGroup: "Experimental",
      },

      10350: {
        ects: 5,
        title: "Numerical studies in physics",
        alternativeGroup: "Digital",
      },
      34053: {
        ects: 5,
        title: "Numerical methods in photonics",
        alternativeGroup: "Digital",
      },

      34032: {
        ects: 5,
        title: "Optical properties of solids",
        alternativeGroup: "Theoretical",
      },
      34051: {
        ects: 10,
        title: "Nanophotonics",
        alternativeGroup: "Theoretical",
      },

      // Other
      10319: { ects: 5, title: "Advanced solid state physics" },
      10380: { ects: 10, title: "Quantum Optics" },
      10871: {
        ects: 5,
        title: "Advanced design and simulation of solar cells",
      },
      22511: { ects: 5, title: "Biomedical optics" },
      34034: { ects: 5, title: "Lasers and photonic systems" },
      34041: { ects: 5, title: "Waveguide optics" },
      34042: { ects: 5, title: "Quantum photonic communication" },
      34052: { ects: 10, title: "Nonlinear optics" },
      34060: {
        ects: 5,
        title: "Ultrafast optics: fundamentals and applications",
      },
      34061: {
        ects: 5,
        title: "Optical measurement methods and signal analysis",
      },
      34153: { ects: 5, title: "Physical concepts in optical communication" },
      34269: { ects: 5, title: "Computational imaging and spectroscopy" },
      34430: { ects: 5, title: "Introduction to biophotonics" },
      34440: { ects: 5, title: "Novel optical fibers in life sciences" },
      34451: { ects: 5, title: "Nonlinear mathematical physics" },
      34539: {
        ects: 5,
        title:
          "Design, fabrication and characterization of optical planar waveguide components",
      },
      34540: {
        ects: 5,
        title:
          "Light emitting diodes and photovoltaics for energy applications",
      },
      34551: { ects: 5, title: "Thin film photovoltaics" },
      34552: { ects: 5, title: "Photovoltaic systems" },
      34553: { ects: 5, title: "Applied photovoltaics" },
    },
  },
};
