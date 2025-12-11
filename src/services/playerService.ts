import type { Player } from "../types/Player";
import players from "../data/players.json";

export function getPlayers(): Player[] {
  return players;
}