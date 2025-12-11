import { useState, useEffect } from "react";
import { getMatches } from "../services/matchService";
import type { MatchData } from "../types/Match";

export function useMatches() {
  const [data, setData] = useState<MatchData>({ matches: [] });

  useEffect(() => {
    setData(getMatches());
  }, []);

  return data;
}