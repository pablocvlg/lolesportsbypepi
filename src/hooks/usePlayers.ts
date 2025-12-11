import { useState, useEffect } from "react";
import { getPlayers } from "../services/playerService";
import type { Player } from "../types/Player";

export function usePlayers() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    setPlayers(getPlayers());
  }, []);

  return players;
}