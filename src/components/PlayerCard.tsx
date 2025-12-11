import styled from "styled-components";
import type { Player } from "../types/Player";

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
  margin: 0.5rem 0;
`;

const Role = styled.span`
  font-size: 0.9rem;
  color: #aaa;
`;

const Rating = styled.span`
  font-size: 1rem;
  margin-top: 0.5rem;
  color: #00aaff;
`;

export default function PlayerCard({ player }: { player: Player }) {
  return (
    <Card>
      <Name>{player.name}</Name>
      <Role>{player.role}</Role>
      <Rating>Rating: {player.initial_rating.toFixed(1)}</Rating>
    </Card>
  );
}