// =============================================
// ADD YOUR GAMES & PUZZLES HERE
// =============================================

export interface Puzzle {
  name: string;
  url?: string;
  rating?: number;
}

export const puzzles: Puzzle[] = [
  { name: "unconventional guns", url: "https://www.puzzlescript.net/play.html?p=f4959a4150da120e6117a8c4e7c1a69d", rating: 8 },
  { name: "coin counter", url: "https://www.puzzlescript.net/play.html?p=9ebe1e5ad44ac22259343de170a3b337", rating: 9 },
  { name: "some lines arent meant to be crossed", url: "https://www.puzzlescript.net/play.html?p=33eee323d8edfbdc20ee2d584cee2b4b", rating: 5 },
  { name: "2d whale word", url: "https://www.puzzlescript.net/play.html?p=6841165", rating: 3 },
];
