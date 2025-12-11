import { useState, useEffect } from "react";
import { getTeams } from "../services/teamService";
import type { Team } from "../types/Team";

export function useTeams() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    setTeams(getTeams());
  }, []);

  return teams;
}