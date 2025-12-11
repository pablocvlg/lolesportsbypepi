import styled from "styled-components";
import PlayerCard from "../components/PlayerCard";
import { usePlayers } from "../hooks/usePlayers";

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1rem;
`;

export default function Players() {
  const players = usePlayers();

  return (
    <Container>
      <Title>Players</Title>
      <CardsGrid>
        {players.map((p) => <PlayerCard key={p.id} player={p} />)}
      </CardsGrid>
    </Container>
  );
}