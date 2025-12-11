export interface MatchScore {
  teamA: number;
  teamB: number;
}

export interface Match {
  id: string;
  date: string;
  teamA: string;
  teamB: string;
  status: string;
  stage: string;
  score: MatchScore;
}

export interface MatchData {
  matches: Match[];
}