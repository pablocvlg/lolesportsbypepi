import styled from "styled-components";
import { useData } from "../hooks/useData";
import PlayerCard from "../components/PlayerCard";
import type { Player } from "../types/Data";

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #white;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1rem;
`;

export default function Players() {
  const { data, loading, error } = useData();

  if (loading) return <Container>Loading...</Container>;
  if (error) return <Container>{error}</Container>;
  if (!data) return <Container>No data available</Container>;

  const players: Player[] = data.competitions.flatMap((comp) =>
    comp.events.flatMap((event) =>
      event.teams.flatMap((team) => team.players)
    )
  );

  return (
    <Container>
      <SectionTitle>Players</SectionTitle>
      <CardsGrid>
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </CardsGrid>
    </Container>
  );
}