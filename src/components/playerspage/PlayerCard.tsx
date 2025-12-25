import styled from "styled-components";
import type { Player, Team } from "../../types/Data";
import { useData } from "../../hooks/useData";
import { useState } from "react";

type SortState = "desc" | "asc" | "none";

const SortIndicator = ({ state }: { state: SortState }) => {
  if (state === "none") return null;
  return <span>{state === "asc" ? " ↑" : " ↓"}</span>;
};

const Container = styled.div`
  background: linear-gradient(135deg, #4e745eff 0%, #11251aff 100%);
  border-radius: 12px;
  padding: 1.1rem;
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const HeaderLeft = styled.div`
  color: white;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
`;

const HeaderRight = styled.div`
  display: flex;
  padding-right: 0.5rem;
`;

const HeaderSortButton = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: white;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
  
  &:hover {
    color: white;
  }
`;

const Card = styled.div`
  background: #0a0a0a;
  border-radius: 8px;
  padding: 0.7rem 1rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.2s ease;
  margin: 0.5rem 0;
  &:hover {
    background: #020e04ff;
    transform: scale(1.02);
  }
`;

const PlayerImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
`;

const PlayerInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 0;
`;

const PlayerName = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PlayerDetails = styled.div`
  display: flex;
  gap: 0.75rem;
  font-size: 0.9rem;
`;

const TeamAbbrev = styled.span`
  color: #888;
`;

const Role = styled.span`
  color: #666;
`;

const Rating = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #00a8ff;
`;

export default function PlayerCard() {
  const { data, loading, error } = useData();
  const [sortState, setSortState] = useState<SortState>("none");

  const handleSort = () => {
    if (sortState === "none") {
      setSortState("desc");
    } else if (sortState === "desc") {
      setSortState("asc");
    } else {
      setSortState("none");
    }
  };
  
  if (loading) return <Container>Loading...</Container>;
  if (error) return <Container>{error}</Container>;
  if (!data) return <Container>No data available</Container>;

  // Get all players from all competitions and events
  const allPlayers = data.competitions.flatMap((comp) =>
    comp.events.flatMap((event) =>
      event.teams.flatMap((team: Team) =>
        team.players.map((player: Player) => ({
          ...player,
          teamAbbrev: team.abbrev,
          teamLogo: team.logo,
        }))
      )
    )
  );

  // Calculate average rating for every player and keep original order
  const playersWithAverage = allPlayers.map((player, index) => {
    const ratings = player.ratings.length > 0 ? player.ratings : [0];
    const avg = ratings.reduce((sum, r) => sum + r, 0) / ratings.length;
    return { ...player, avgRating: avg, originalIndex: index };
  });

  // Sort players based on sortState
  const sortedPlayers = [...playersWithAverage].sort((a, b) => {
    if (sortState === "none") {
      return a.originalIndex - b.originalIndex;
    }
    
    if (sortState === "desc") {
      return b.avgRating - a.avgRating;
    }
    
    // asc
    return a.avgRating - b.avgRating;
  });

  return (
    <Container>
      <HeaderRow>
        <HeaderLeft>Players</HeaderLeft>
        <HeaderRight>
          <HeaderSortButton onClick={handleSort}>
            Rating
            <SortIndicator state={sortState} />
          </HeaderSortButton>
        </HeaderRight>
      </HeaderRow>

      {sortedPlayers.map((player) => (
        <Card key={player.id}>
          <PlayerImage
            src={player.teamLogo}
            alt={player.teamAbbrev}
            onError={(e) => {
              e.currentTarget.src =
                'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="50" height="50"%3E%3Crect width="50" height="50" fill="%23333"/%3E%3C/svg%3E';
            }}
          />
          <PlayerInfo>
            <PlayerName>{player.name}</PlayerName>
            <PlayerDetails>
              <TeamAbbrev>{player.teamAbbrev}</TeamAbbrev>
              <Role>{player.role}</Role>
            </PlayerDetails>
          </PlayerInfo>
          <Rating>{player.avgRating.toFixed(1)}</Rating>
        </Card>
      ))}
    </Container>
  );
}