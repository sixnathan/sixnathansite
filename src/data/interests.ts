// =============================================
// EDIT YOUR DATA HERE
// =============================================

export const clusters: Record<string, string[]> = {
  ml: [],
  mind: [],
  games: [],
};

export interface Paper {
  title: string;
  read: boolean;
  added: string; // YYYY-MM-DD for ordering (not displayed)
  favorite?: boolean;
}

export const papers: Paper[] = [
  { title: "Constitutional AI: Harmlessness from AI Feedback", read: false, added: "2024-12-16" },
  { title: "Toy Models of Superposition", read: false, added: "2024-12-16" },
  { title: "Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet", read: false, added: "2024-12-16" },
  { title: "Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training", read: false, added: "2024-12-16" },
  { title: "Alignment Faking in Large Language Models", read: false, added: "2024-12-16" },
  { title: "Pruning Increases Orderedness in Recurrent Computation", read: false, added: "2024-12-15" },
  { title: "Training Compute-Optimal Large Language Models", read: false, added: "2024-12-15", favorite: true },
  { title: "The Universal Weight Subspace Hypothesis", read: true, added: "2024-12-15", favorite: true },
  { title: "Neuronal Attention Circuit (NAC) for Representation Learning", read: false, added: "2024-12-13" },
  { title: "Asynchronous Reasoning: Training-Free Interactive Thinking LLMs", read: false, added: "2024-12-13" },
  { title: "Small Language Models are the Future of Agentic AI", read: true, added: "2024-12-12" },
  { title: "A Lightweight Approach to Detection of AI-Generated Texts Using Stylometric Features", read: true, added: "2024-12-10" },
  { title: "StyloAI: Distinguishing AI-Generated Content with Stylometric Analysis", read: true, added: "2024-12-10" },
  { title: "Detecting Stylistic Fingerprints of Large Language Models", read: true, added: "2024-12-10" },
  { title: "Better artificial intelligence does not mean better models of biology", read: false, added: "2024-12-09", favorite: true },
  { title: "The Art of Scaling Reinforcement Learning Compute for LLMs", read: false, added: "2024-12-06", favorite: true },
  { title: "Delving into LLM-assisted writing in biomedical publications through excess vocabulary", read: true, added: "2024-12-14" },
  { title: "Structure and robustness of Sao Paulo public transport network", read: true, added: "2024-11-15" },
];
