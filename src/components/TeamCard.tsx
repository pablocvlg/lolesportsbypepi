import styled from "styled-components";
import type { Team } from "../types/Team";

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

const Name = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Abbrev = styled.span`
  font-size: 0.9rem;
  color: #aaa;
`;

export default function TeamCard({ team }: { team: Team }) {
  return (
    <Card>
      <Name>{team.name}</Name>
      <Abbrev>{team.abbrev}</Abbrev>
    </Card>
  );
}