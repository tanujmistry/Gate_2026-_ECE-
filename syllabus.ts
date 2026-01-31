export interface SyllabusItem {
  id: string;
  name: string;
  topics: {
    id: string;
    name: string;
  }[];
}

export const syllabusData: SyllabusItem[] = [
  {
    id: "networks",
    name: "Network Theory",
    topics: [
      { id: "nt-kcl-kvl", name: "KCL & KVL" },
      { id: "nt-nodal", name: "Nodal & Mesh Analysis" },
      { id: "nt-thevenin", name: "Thevenin & Norton" },
      { id: "nt-transient", name: "Transient Analysis" },
      { id: "nt-ac", name: "AC Circuits" },
      { id: "nt-resonance", name: "Resonance" },
      { id: "nt-twoport", name: "Two-Port Networks" },
      { id: "nt-filters", name: "Filters" }
    ]
  },
  {
    id: "signals",
    name: "Signals & Systems",
    topics: [
      { id: "ss-basics", name: "Signal Properties" },
      { id: "ss-lti", name: "LTI Systems" },
      { id: "ss-ctft", name: "Continuous Time Fourier" },
      { id: "ss-dtft", name: "Discrete Time Fourier" },
      { id: "ss-laplace", name: "Laplace Transform" },
      { id: "ss-z", name: "Z-Transform" },
      { id: "ss-sampling", name: "Sampling Theorem" },
      { id: "ss-dft", name: "DFT & FFT" }
    ]
  },
  {
    id: "control",
    name: "Control Systems",
    topics: [
      { id: "cs-basics", name: "Basics & Block Diagrams" },
      { id: "cs-signalflow", name: "Signal Flow Graphs" },
      { id: "cs-time", name: "Time Domain Analysis" },
      { id: "cs-stability", name: "Stability (Routh-Hurwitz)" },
      { id: "cs-rootlocus", name: "Root Locus" },
      { id: "cs-bode", name: "Bode Plot" },
      { id: "cs-nyquist", name: "Nyquist Plot" },
      { id: "cs-pid", name: "PID Controllers" },
      { id: "cs-state", name: "State Space Analysis" }
    ]
  },
  {
    id: "edc",
    name: "Electronic Devices",
    topics: [
      { id: "ed-semiconductor", name: "Semiconductor Physics" },
      { id: "ed-junction", name: "PN Junction Diode" },
      { id: "ed-bjt", name: "BJT" },
      { id: "ed-mosfet", name: "MOSFET" },
      { id: "ed-jfet", name: "JFET" },
      { id: "ed-photodiode", name: "Optoelectronic Devices" },
      { id: "ed-special", name: "Special Diodes" }
    ]
  },
  {
    id: "analog",
    name: "Analog Circuits",
    topics: [
      { id: "ac-biasing", name: "BJT & FET Biasing" },
      { id: "ac-amplifiers", name: "Small Signal Amplifiers" },
      { id: "ac-opamp", name: "Op-Amp Basics" },
      { id: "ac-opamp-apps", name: "Op-Amp Applications" },
      { id: "ac-filters", name: "Active Filters" },
      { id: "ac-oscillators", name: "Oscillators" },
      { id: "ac-multivibrators", name: "Multivibrators" },
      { id: "ac-feedback", name: "Feedback Amplifiers" }
    ]
  },
  {
    id: "digital",
    name: "Digital Circuits",
    topics: [
      { id: "dc-number", name: "Number Systems" },
      { id: "dc-boolean", name: "Boolean Algebra" },
      { id: "dc-kmap", name: "K-Map" },
      { id: "dc-combinational", name: "Combinational Logic" },
      { id: "dc-sequential", name: "Sequential Logic" },
      { id: "dc-counters", name: "Counters" },
      { id: "dc-memories", name: "Memories" },
      { id: "dc-adc", name: "ADC & DAC" },
      { id: "dc-microprocessor", name: "Microprocessor 8085" }
    ]
  },
  {
    id: "emft",
    name: "Electromagnetics",
    topics: [
      { id: "em-coulomb", name: "Coulomb's Law" },
      { id: "em-gauss", name: "Gauss's Law" },
      { id: "em-potential", name: "Electric Potential" },
      { id: "em-biot", name: "Biot-Savart Law" },
      { id: "em-ampere", name: "Ampere's Law" },
      { id: "em-maxwell", name: "Maxwell's Equations" },
      { id: "em-waves", name: "EM Waves" },
      { id: "em-transmission", name: "Transmission Lines" },
      { id: "em-waveguides", name: "Waveguides" },
      { id: "em-antenna", name: "Antennas" }
    ]
  },
  {
    id: "communications",
    name: "Communications",
    topics: [
      { id: "com-modulation", name: "Analog Modulation (AM, FM, PM)" },
      { id: "com-digital", name: "Digital Modulation" },
      { id: "com-multiplexing", name: "Multiplexing (TDM, FDM)" },
      { id: "com-pcm", name: "PCM" },
      { id: "com-information", name: "Information Theory" },
      { id: "com-coding", name: "Channel Coding" },
      { id: "com-noise", name: "Noise in Communication" }
    ]
  },
  {
    id: "vlsi",
    name: "VLSI & Digital Design",
    topics: [
      { id: "vlsi-cmos", name: "CMOS Inverter" },
      { id: "vlsi-logic", name: "CMOS Logic Gates" },
      { id: "vlsi-timing", name: "Timing Analysis" },
      { id: "vlsi-verilog", name: "Verilog Basics" },
      { id: "vlsi-fsm", name: "FSM Design" },
      { id: "vlsi-memories", name: "Memory Design" },
      { id: "vlsi-io", name: "I/O Circuits" }
    ]
  },
  {
    id: "engg-maths",
    name: "Engineering Mathematics",
    topics: [
      { id: "math-calculus", name: "Calculus" },
      { id: "math-linear", name: "Linear Algebra" },
      { id: "math-probability", name: "Probability" },
      { id: "math-stats", name: "Statistics" },
      { id: "math-complex", name: "Complex Variables" },
      { id: "math-differential", name: "Differential Equations" },
      { id: "math-numerical", name: "Numerical Methods" },
      { id: "math-transform", name: "Transform Theory" }
    ]
  }
];