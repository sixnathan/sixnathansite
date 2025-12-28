// =============================================
// ADD YOUR GAMES & PUZZLES HERE
// =============================================

export interface Puzzle {
  name: string;
  url?: string;
  rating?: number;
  played?: string; // YYYY-MM-DD
}

export const puzzles: Puzzle[] = [
  { name: "unconventional guns", url: "https://www.puzzlescript.net/play.html?p=f4959a4150da120e6117a8c4e7c1a69d", rating: 8, played: "2024-12-22" },
  { name: "coin counter", url: "https://www.puzzlescript.net/play.html?p=9ebe1e5ad44ac22259343de170a3b337", rating: 9, played: "2024-12-22" },
  { name: "some lines arent meant to be crossed", url: "https://www.puzzlescript.net/play.html?p=33eee323d8edfbdc20ee2d584cee2b4b", rating: 5, played: "2024-12-23" },
  { name: "2d whale word", url: "https://www.puzzlescript.net/play.html?p=6841165", rating: 3, played: "2024-12-23" },
  { name: "the observers paradox", url: "https://www.puzzlescript.net/play.html?p=42a7e74f578b9d0bdc9c66469d97b262", rating: 8, played: "2024-12-24" },
  { name: "pipe bind", url: "https://www.puzzlescript.net/play.html?p=8627569e70bdd911680d458ba6d0826a", rating: 9, played: "2024-12-24" },
  { name: "quantam rails", url: "https://www.puzzlescript.net/play.html?p=e614e414e570294e45533109426245d4", rating: 9, played: "2024-12-25" },
  { name: "spikes and stuff", url: "https://alan.draknek.org/games/puzzlescript/spikes-n-stuff.php", rating: 10, played: "2024-12-26" },
  { name: "train braining", url: "https://alan.draknek.org/games/puzzlescript/train.php", rating: 8, played: "2024-12-27" },
  { name: "marble shoot", url: "https://www.puzzlescript.net/play.html?p=81b9430a6c09b355f6379c0f63beb04c", rating: 8, played: "2024-12-28" },
];
