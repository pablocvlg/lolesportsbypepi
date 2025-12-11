import styled from "styled-components";
import { useData } from "../hooks/useData";
import MatchCard from "../components/MatchCard";
import type { Match, Team } from "../types/Data";

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

export default function Matches() {
  const { data, loading, error } = useData();

  if (loading) return <Container>Loading...</Container>;
  if (error) return <Container>{error}</Container>;
  if (!data) return <Container>No data available</Container>;

  const matchesWithTeams: { match: Match; teams: Team[] }[] = data.competitions.flatMap((comp) =>
    comp.events.flatMap((event) =>
      event.matches.map((match) => ({ match, teams: event.teams }))
    )
  );

  return (
    <Container>
      <SectionTitle>Matches</SectionTitle>
      <CardsGrid>
        {matchesWithTeams.map(({ match, teams }) => (
          <MatchCard key={match.id} match={match} teams={teams} />
        ))}
      </CardsGrid>
    </Container>
  );
}