// =============================================
// EDIT YOUR DATA HERE
// =============================================

export const clusters: Record<string, string[]> = {
  ML: [],
  Neuro: [],
  Thoughts: [],
};

export type PaperStatus = "will read" | "reading" | "read";

export interface Paper {
  title: string;
  status: PaperStatus;
}

export const papers: Paper[] = [
  { title: "The Universal Weight Subspace Hypothesis", status: "will read" },
  { title: "Delving into LLM-assisted writing in biomedical publications through excess vocabulary", status: "will read" },
  { title: "Neuronal Attention Circuit (NAC) for Representation Learning", status: "will read" },
  { title: "Asynchronous Reasoning: Training-Free Interactive Thinking LLMs", status: "will read" },
  { title: "Small Language Models are the Future of Agentic AI", status: "will read" },
  { title: "A Lightweight Approach to Detection of AI-Generated Texts Using Stylometric Features", status: "will read" },
  { title: "StyloAI: Distinguishing AI-Generated Content with Stylometric Analysis", status: "will read" },
  { title: "Detecting Stylistic Fingerprints of Large Language Models", status: "will read" },
  { title: "Better artificial intelligence does not mean better models of biology", status: "will read" },
  { title: "The Art of Scaling Reinforcement Learning Compute for LLMs", status: "will read" },
  { title: "Structure and robustness of Sao Paulo public transport network", status: "will read" },
];
