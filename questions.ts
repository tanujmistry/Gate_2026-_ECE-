export interface Question {
  id: number;
  topic: string;
  difficulty: "Easy" | "Medium" | "Hard";
  question: string;
  options: string[];
  correctOption: number;
  explanation: string;
}

export const questionsData: Question[] = [
  {
    id: 1,
    topic: "Network Theory",
    difficulty: "Medium",
    question: "In a series RLC circuit at resonance, the impedance is:",
    options: [
      "Minimum and purely resistive",
      "Maximum and purely resistive",
      "Minimum and purely reactive",
      "Maximum and purely reactive"
    ],
    correctOption: 0,
    explanation: "At resonance, XL = XC, so they cancel out. The impedance is minimum and equals the resistance R (purely resistive)."
  },
  {
    id: 2,
    topic: "Signals & Systems",
    difficulty: "Easy",
    question: "The Fourier transform of a real even signal is:",
    options: [
      "Real and even",
      "Real and odd",
      "Imaginary and even",
      "Imaginary and odd"
    ],
    correctOption: 0,
    explanation: "For a real even signal x(t), its Fourier transform X(ω) is also real and even."
  },
  {
    id: 3,
    topic: "Control Systems",
    difficulty: "Medium",
    question: "For a stable system, all poles must lie in:",
    options: [
      "Right half of s-plane",
      "Left half of s-plane",
      "On the imaginary axis",
      "At the origin"
    ],
    correctOption: 1,
    explanation: "For a system to be stable, all poles must have negative real parts, meaning they lie in the left half of the s-plane."
  },
  {
    id: 4,
    topic: "Electronic Devices",
    difficulty: "Easy",
    question: "The depletion region width in a PN junction diode under reverse bias:",
    options: [
      "Decreases",
      "Increases",
      "Remains constant",
      "Becomes zero"
    ],
    correctOption: 1,
    explanation: "Under reverse bias, the depletion region widens as majority carriers are pulled away from the junction."
  },
  {
    id: 5,
    topic: "Analog Circuits",
    difficulty: "Medium",
    question: "The slew rate of an ideal op-amp is:",
    options: [
      "Zero",
      "Infinite",
      "Finite and positive",
      "Finite and negative"
    ],
    correctOption: 1,
    explanation: "An ideal op-amp has infinite slew rate, meaning it can respond to changes instantaneously."
  },
  {
    id: 6,
    topic: "Digital Circuits",
    difficulty: "Easy",
    question: "The number of flip-flops required to construct a mod-10 counter is:",
    options: ["3", "4", "5", "10"],
    correctOption: 1,
    explanation: "A mod-10 counter needs to count from 0 to 9, requiring 4 flip-flops (2^4 = 16 ≥ 10)."
  },
  {
    id: 7,
    topic: "Electromagnetics",
    difficulty: "Hard",
    question: "The characteristic impedance of a lossless transmission line is:",
    options: [
      "√(L/C)",
      "√(C/L)",
      "L/C",
      "C/L"
    ],
    correctOption: 0,
    explanation: "For a lossless transmission line, Z₀ = √(L/C), where L is inductance per unit length and C is capacitance per unit length."
  },
  {
    id: 8,
    topic: "Communications",
    difficulty: "Medium",
    question: "In PCM, the signal-to-quantization noise ratio improves by:",
    options: [
      "3 dB per bit",
      "6 dB per bit",
      "10 dB per bit",
      "20 dB per bit"
    ],
    correctOption: 1,
    explanation: "In PCM, SQNR improves by approximately 6 dB for each additional bit used in quantization."
  },
  {
    id: 9,
    topic: "VLSI",
    difficulty: "Medium",
    question: "The propagation delay of a CMOS inverter is primarily determined by:",
    options: [
      "Supply voltage only",
      "Load capacitance and transistor dimensions",
      "Temperature only",
      "Threshold voltage only"
    ],
    correctOption: 1,
    explanation: "Propagation delay depends on the RC time constant, where R is determined by transistor dimensions and C is the load capacitance."
  },
  {
    id: 10,
    topic: "Engineering Mathematics",
    difficulty: "Easy",
    question: "The Laplace transform of unit impulse function δ(t) is:",
    options: ["1", "1/s", "s", "1/s²"],
    correctOption: 0,
    explanation: "L{δ(t)} = ∫δ(t)e^(-st)dt = e^(-s×0) = 1, by the sifting property of the delta function."
  },
  {
    id: 11,
    topic: "Network Theory",
    difficulty: "Hard",
    question: "A two-port network is reciprocal if:",
    options: [
      "z₁₂ = z₂₁",
      "z₁₁ = z₂₂",
      "z₁₂ = -z₂₁",
      "z₁₁ = -z₂₂"
    ],
    correctOption: 0,
    explanation: "A reciprocal two-port network satisfies z₁₂ = z₂₁, which means the transfer impedance is symmetric."
  },
  {
    id: 12,
    topic: "Signals & Systems",
    difficulty: "Medium",
    question: "The region of convergence (ROC) of a causal LTI system's transfer function is:",
    options: [
      "Right of the rightmost pole",
      "Left of the leftmost pole",
      "Between two poles",
      "Entire z-plane"
    ],
    correctOption: 0,
    explanation: "For a causal system, the ROC is the region to the right of the rightmost pole in the s-plane."
  },
  {
    id: 13,
    topic: "Control Systems",
    difficulty: "Hard",
    question: "The phase margin of a system is defined at:",
    options: [
      "Gain crossover frequency",
      "Phase crossover frequency",
      "Resonant frequency",
      "Natural frequency"
    ],
    correctOption: 0,
    explanation: "Phase margin is measured at the gain crossover frequency where the magnitude is 0 dB (unity gain)."
  },
  {
    id: 14,
    topic: "Electronic Devices",
    difficulty: "Medium",
    question: "The channel length modulation parameter λ in MOSFET affects:",
    options: [
      "Threshold voltage",
      "Output resistance",
      "Transconductance",
      "Gate capacitance"
    ],
    correctOption: 1,
    explanation: "Channel length modulation causes the output resistance to decrease as VDS increases, modeled as ro = 1/(λID)."
  },
  {
    id: 15,
    topic: "Analog Circuits",
    difficulty: "Hard",
    question: "In a differential amplifier, the common-mode rejection ratio (CMRR) is the ratio of:",
    options: [
      "Ad/Ac",
      "Ac/Ad",
      "Ad + Ac",
      "Ad - Ac"
    ],
    correctOption: 0,
    explanation: "CMRR = Ad/Ac, where Ad is differential gain and Ac is common-mode gain. Higher CMRR means better rejection of common-mode signals."
  }
];