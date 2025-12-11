import type { Team } from "../types/Team";
import teams from "../data/teams.json";

export function getTeams(): Team[] {
  return teams;
}