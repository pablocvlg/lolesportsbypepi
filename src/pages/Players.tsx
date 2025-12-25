import styled from "styled-components";
import { useData } from "../hooks/useData";
import PlayerCard from "../components/playerspage/PlayerCard";
import Loading from "../components/Loading";

const Container = styled.div`
  padding: 2rem 0rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 50rem;
  margin: 0 auto;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1rem;
`;

export default function Players() {
  const { data, loading, error } = useData();

  if (loading) return <Loading text="Crunching player data…" />;
  if (error) return <Container>{error}</Container>;
  if (!data) return <Container>No data available</Container>;

  return (
    <Container>
      <CardsGrid>
          <PlayerCard />
      </CardsGrid>
    </Container>
  );
}