import type { MatchData } from "../types/Match";
import matches from "../data/matches.json";

export function getMatches(): MatchData {
  return matches;
}