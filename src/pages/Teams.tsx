import styled from "styled-components";
import { useData } from "../hooks/useData";
import TeamCard from "../components/teamspage/TeamCard";
import type { Team } from "../types/Data";
import Loading from "../components/Loading";

const Container = styled.div`
  padding: 2rem 0rem 2rem 0rem;
  display: flex;
  flex-direction: column;
  max-width: 100rem;
  margin: 0 auto;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  gap: 2rem;
`;

export default function Teams() {
  const { data, loading, error } = useData();

  if (loading) return <Loading text="Gathering teams info..." />;
  if (error) return <Container>{error}</Container>;
  if (!data) return <Container>No data available</Container>;

  const teams: Team[] = data.competitions.flatMap((comp) =>
    comp.events.flatMap((event) => event.teams)
  );

  return (
    <Container>
      <CardsGrid>
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </CardsGrid>
    </Container>
  );
}