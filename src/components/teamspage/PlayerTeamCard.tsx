import styled from "styled-components";
import type { Player } from "../../types/Data";

type PlayerTeamCardProps = {
  player: Player;
};

const Card = styled.div`
  background: #0a0a0a;
  border-radius: 8px;
  padding: 0.7rem 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.2s ease;
  &:hover {
    background: #020e04ff;
    transform: scale(1.02);
  }
`;

const PlayerInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const PlayerName = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Role = styled.span`
  font-size: 0.9rem;
  color: #666;
`;

const Rating = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #00a8ff;
`;

export default function PlayerTeamCard({ player }: PlayerTeamCardProps) {
  // Calculate average rating
  const ratings = player.ratings.length > 0 ? player.ratings : [0];
  const avgRating = ratings.reduce((sum, r) => sum + r, 0) / ratings.length;

  return (
    <Card>
      <PlayerInfo>
        <PlayerName>{player.name}</PlayerName>
        <Role>({player.role})</Role>
      </PlayerInfo>
      <Rating>{avgRating.toFixed(1)}</Rating>
    </Card>
  );
}