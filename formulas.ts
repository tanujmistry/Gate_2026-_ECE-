export interface FormulaItem {
  formula: string;
  context: string;
}

export interface FormulaSubject {
  subject: string;
  items: FormulaItem[];
}

export const formulasData: FormulaSubject[] = [
  {
    subject: "Network Theory",
    items: [
      { formula: "KCL: ΣI = 0 at any node", context: "Kirchhoff's Current Law - sum of currents entering a node equals sum leaving" },
      { formula: "KVL: ΣV = 0 in any closed loop", context: "Kirchhoff's Voltage Law - sum of voltage drops around any closed loop is zero" },
      { formula: "Vth = VOC, Rth = Vth/ISC", context: "Thevenin's theorem - any linear network can be replaced by voltage source and series resistance" },
      { formula: "Z = R + j(XL - XC)", context: "Impedance in AC circuits with resistance, inductive and capacitive reactance" },
      { formula: "Q = ω₀L/R = 1/(ω₀CR)", context: "Quality factor at resonance - measure of selectivity" },
      { formula: "fr = 1/(2π√LC)", context: "Resonant frequency of LC circuit" },
      { formula: "α = R/(2L), ω₀ = 1/√LC", context: "Damping factor and natural frequency in RLC circuits" },
      { formula: "i(t) = I₀e^(-t/τ)", context: "Current decay in RL circuit, τ = L/R" },
      { formula: "v(t) = V₀e^(-t/τ)", context: "Voltage decay in RC circuit, τ = RC" }
    ]
  },
  {
    subject: "Signals & Systems",
    items: [
      { formula: "X(ω) = ∫x(t)e^(-jωt)dt", context: "Continuous-time Fourier Transform" },
      { formula: "X(z) = Σx[n]z^(-n)", context: "Z-Transform definition" },
      { formula: "X(s) = ∫x(t)e^(-st)dt", context: "Laplace Transform definition" },
      { formula: "y(t) = x(t) * h(t)", context: "Convolution integral for LTI systems" },
      { formula: "Y(z) = X(z)H(z)", context: "Output in Z-domain for LTI systems" },
      { formula: "fs ≥ 2fm", context: "Nyquist sampling theorem - minimum sampling rate" },
      { formula: "e^(-at)u(t) ↔ 1/(s+a)", context: "Laplace transform pair for exponential function" },
      { formula: "δ(t) ↔ 1", context: "Fourier transform of impulse function" },
      { formula: "u(t) ↔ πδ(ω) + 1/(jω)", context: "Fourier transform of unit step" },
      { formula: "cos(ω₀t) ↔ π[δ(ω-ω₀) + δ(ω+ω₀)]", context: "Fourier transform of cosine" }
    ]
  },
  {
    subject: "Control Systems",
    items: [
      { formula: "T(s) = G(s)/(1 + G(s)H(s))", context: "Closed-loop transfer function with feedback" },
      { formula: "ζ = α/ωn", context: "Damping ratio - second order system parameter" },
      { formula: "ωn = √(K/J)", context: "Natural frequency - second order system" },
      { formula: "PM = 180° + ∠G(jωgc)", context: "Phase margin at gain crossover frequency" },
      { formula: "GM = -20log|G(jωpc)|", context: "Gain margin at phase crossover frequency" },
      { formula: "Ess = 1/Kp (step input)", context: "Steady-state error for type 0 system with step input" },
      { formula: "Ess = 1/Kv (ramp input)", context: "Steady-state error for type 1 system with ramp input" },
      { formula: "Ess = 1/Ka (parabolic input)", context: "Steady-state error for type 2 system with parabolic input" },
      { formula: "ζ = 1/√2 for MP = 4.33%", context: "Optimal damping for maximum phase margin" }
    ]
  },
  {
    subject: "Electronic Devices",
    items: [
      { formula: "I = IS(e^(V/ηVT) - 1)", context: "Shockley diode equation" },
      { formula: "VT = kT/q ≈ 26mV at 300K", context: "Thermal voltage" },
      { formula: "ID = IDS[1 - VDS/VDSAT]²", context: "MOSFET saturation region equation" },
      { formula: "gm = 2ID/|VGS - Vth|", context: "MOSFET transconductance in saturation" },
      { formula: "ro = 1/(λID)", context: "MOSFET output resistance due to channel length modulation" },
      { formula: "IC = IS(e^(VBE/VT) - 1)", context: "BJT collector current equation" },
      { formula: "β = IC/IB", context: "BJT current gain" },
      { formula: "α = IC/IE = β/(1+β)", context: "BJT common base current gain" },
      { formula: "VCE(sat) ≈ 0.2V", context: "BJT saturation voltage" }
    ]
  },
  {
    subject: "Analog Circuits",
    items: [
      { formula: "Av = -gmRC", context: "Common emitter voltage gain" },
      { formula: "Av = gmRD", context: "Common source voltage gain" },
      { formula: "CMRR = Ad/Ac", context: "Common mode rejection ratio" },
      { formula: "Slew Rate = dV/dt|max", context: "Maximum rate of change of output voltage" },
      { formula: "GBP = Av × BW", context: "Gain bandwidth product (constant for op-amps)" },
      { formula: "Vout = -(Rf/R1)Vin", context: "Inverting amplifier gain" },
      { formula: "Vout = (1 + Rf/R1)Vin", context: "Non-inverting amplifier gain" },
      { formula: "fc = 1/(2πRC)", context: "Cut-off frequency for RC filter" },
      { formula: "Q = f₀/BW", context: "Quality factor for bandpass filter" }
    ]
  },
  {
    subject: "Digital Circuits",
    items: [
      { formula: "N flip-flops → 2^N states", context: "Maximum states in a counter" },
      { formula: "Propagation Delay = tPLH + tPHL", context: "Total propagation delay" },
      { formula: "Setup Time: data before clock", context: "Minimum time data must be stable before clock edge" },
      { formula: "Hold Time: data after clock", context: "Minimum time data must be stable after clock edge" },
      { formula: "Resolution = Vref/2^N", context: "ADC resolution for N-bit converter" },
      { formula: "fmax = 1/(tpd × N)", context: "Maximum frequency for N-bit ripple counter" },
      { formula: "Fan-out = IOL(max)/IIL(max)", context: "Maximum number of gates a driver can feed" },
      { formula: "Noise Margin = VOH(min) - VIH(min)", context: "High level noise margin" }
    ]
  },
  {
    subject: "Electromagnetics",
    items: [
      { formula: "E = -∇V", context: "Electric field is negative gradient of potential" },
      { formula: "∇·D = ρv", context: "Gauss's law in differential form" },
      { formula: "∇×E = -∂B/∂t", context: "Faraday's law" },
      { formula: "∇×H = J + ∂D/∂t", context: "Ampere's law with displacement current" },
      { formula: "Z₀ = √(L/C)", context: "Characteristic impedance of lossless transmission line" },
      { formula: "v = 1/√(LC)", context: "Velocity of propagation on transmission line" },
      { formula: "Γ = (ZL - Z₀)/(ZL + Z₀)", context: "Reflection coefficient" },
      { formula: "VSWR = (1 + |Γ|)/(1 - |Γ|)", context: "Voltage standing wave ratio" },
      { formula: "η = √(μ/ε)", context: "Intrinsic impedance of medium" },
      { formula: "c = 1/√(μ₀ε₀) ≈ 3×10⁸ m/s", context: "Speed of light in free space" }
    ]
  },
  {
    subject: "Communications",
    items: [
      { formula: "SNR(dB) = 10log₁₀(S/N)", context: "Signal to noise ratio in dB" },
      { formula: "C = B log₂(1 + SNR)", context: "Shannon-Hartley channel capacity" },
      { formula: "BW = 2fm (AM)", context: "Bandwidth of AM signal" },
      { formula: "BW = 2(1 + β)fm (FM)", context: "Bandwidth of FM signal (Carson's rule)" },
      { formula: "SQNR ≈ 6.02N + 1.76 dB", context: "Signal to quantization noise ratio for PCM" },
      { formula: "H(X) = -Σp(x)log₂p(x)", context: "Entropy of a discrete source" },
      { formula: "I(X;Y) = H(X) - H(X|Y)", context: "Mutual information" },
      { formula: "Pe = Q(√(2Eb/N₀))", context: "BER for BPSK in AWGN" },
      { formula: "η = (sideband power)/(total power)", context: "Modulation efficiency" }
    ]
  },
  {
    subject: "VLSI",
    items: [
      { formula: "tp = 0.69RC", context: "Propagation delay for CMOS inverter" },
      { formula: "P = CV²f", context: "Dynamic power consumption" },
      { formula: "Ids = (W/L)μCox(Vgs - Vth)²", context: "MOSFET drain current in saturation" },
      { formula: "Vth = Vth₀ + γ(√(2φf + Vsb) - √(2φf))", context: "Body effect on threshold voltage" },
      { formula: "Noise Margin = VIL - VOL", context: "Low level noise margin" },
      { formula: "Pstatic = IDDQ × VDD", context: "Static power consumption" },
      { formula: "βn/βp = (Wn/Ln)/(Wp/Lp)", context: "Transconductance ratio for symmetric switching" },
      { formula: "fmax = 1/(2tp)", context: "Maximum operating frequency" }
    ]
  },
  {
    subject: "Engineering Mathematics",
    items: [
      { formula: "∫e^(ax)dx = e^(ax)/a", context: "Integration of exponential function" },
      { formula: "L{f(t)} = ∫f(t)e^(-st)dt", context: "Laplace transform definition" },
      { formula: "d/dx[uv] = u(dv/dx) + v(du/dx)", context: "Product rule for differentiation" },
      { formula: "∫udv = uv - ∫vdu", context: "Integration by parts" },
      { formula: "E[X] = Σx·p(x)", context: "Expected value of discrete random variable" },
      { formula: "Var(X) = E[X²] - (E[X])²", context: "Variance of random variable" },
      { formula: "det(A - λI) = 0", context: "Characteristic equation for eigenvalues" },
      { formula: "e^(jθ) = cosθ + j sinθ", context: "Euler's formula" },
      { formula: "∇²V = 0", context: "Laplace's equation" }
    ]
  }
];