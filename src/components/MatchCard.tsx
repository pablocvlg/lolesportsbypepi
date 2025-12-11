import styled from "styled-components";
import type { Match } from "../types/Match";

const Card = styled.div`
  background-color: #111;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Teams = styled.h2`
  font-size: 1.1rem;
  margin: 0.5rem 0;
`;

const DateText = styled.span`
  font-size: 0.9rem;
  color: #aaa;
`;

const Score = styled.span`
  font-size: 1rem;
  margin-top: 0.5rem;
  color: #00ff99;
`;

export default function MatchCard({ match }: { match: Match }) {
  return (
    <Card>
      <Teams>{match.teamA} vs {match.teamB}</Teams>
      <DateText>{new Date(match.date).toLocaleString()}</DateText>
      <Score>{match.score.teamA} - {match.score.teamB}</Score>
    </Card>
  );
}