import styled from "styled-components";
import type { Player } from "../types/Data";

type PlayerCardProps = {
  player: Player;
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

const RatingsList = styled.p`
  margin-top: 0.3rem;
  font-size: 0.9rem;
  color: #ccc;
`;

export default function PlayerCard({ player }: PlayerCardProps) {
  return (
    <Card>
      <Name>{player.name}</Name>
      <Role>{player.role}</Role>
      <Rating>Initial: {player.ratings[0]?.toFixed(1)}</Rating>
      {player.ratings.length > 1 && (
        <RatingsList>Ratings: {player.ratings.slice(1).map(r => r.toFixed(1)).join(", ")}</RatingsList>
      )}
    </Card>
  );
}