import styled from "styled-components";
import type { Team } from "../types/Data";

type TeamCardProps = {
  team: Team;
};

const Card = styled.div`
  background-color: #111;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Name = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
`;

const Abbrev = styled.span`
  font-size: 0.9rem;
  color: #aaa;
  margin-bottom: 0.5rem;
`;

const PlayersList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
  color: #ccc;
`;

const PlayerItem = styled.li`
  margin: 0.2rem 0;
`;

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <Card>
      <Name>{team.name}</Name>
      <Abbrev>({team.abbrev})</Abbrev>
      <PlayersList>
        {team.players.map(player => (
          <PlayerItem key={player.id}>
            {player.name} ({player.role})
          </PlayerItem>
        ))}
      </PlayersList>
    </Card>
  );
}