import styled from "styled-components";
import TeamCard from "../components/TeamCard";
import { useTeams } from "../hooks/useTeams";

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

export default function Teams() {
  const teams = useTeams();

  return (
    <Container>
      <Title>Teams</Title>
      <CardsGrid>
        {teams.map((t) => <TeamCard key={t.id} team={t} />)}
      </CardsGrid>
    </Container>
  );
}