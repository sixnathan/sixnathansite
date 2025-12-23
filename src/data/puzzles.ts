// =============================================
// ADD YOUR GAMES & PUZZLES HERE
// =============================================

export interface Puzzle {
  name: string;
  url?: string;
}

export const puzzles: Puzzle[] = [
  { name: "unconventional guns", url: "https://www.puzzlescript.net/play.html?p=f4959a4150da120e6117a8c4e7c1a69d" },
  { name: "coin counter", url: "https://www.puzzlescript.net/play.html?p=9ebe1e5ad44ac22259343de170a3b337" },
  { name: "some lines arent meant to be crossed", url: "https://www.puzzlescript.net/play.html?p=33eee323d8edfbdc20ee2d584cee2b4b" },
];
