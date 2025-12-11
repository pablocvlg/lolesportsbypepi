import styled from "styled-components";
import { useData } from "../hooks/useData";

const Container = styled.div`
  padding: 1rem;
  background-color: #222;
  border-radius: 12px;
  color: #fff;
  max-width: 800px;
  margin: 0 auto;
`;

const TeamRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #444;
`;

const TeamName = styled.span``;
const Record = styled.span``;

export default function Standings({ eventId }: { eventId: string }) {
  const { data, loading, error } = useData();

  if (loading) return <Container>Loading...</Container>;
  if (error) return <Container>{error}</Container>;
  if (!data) return <Container>No data available</Container>;

  const event = data.competitions
    .flatMap(comp => comp.events)
    .find(ev => ev.id === eventId);

  if (!event) return <Container>Event not found</Container>;

  const teamRecord: Record<string, { wins: number; losses: number }> = {};
  event.teams.forEach(team => (teamRecord[team.id] = { wins: 0, losses: 0 }));

  event.matches.forEach(match => {
    if (match.score.teamA > match.score.teamB) {
      teamRecord[match.teamA].wins += 1;
      teamRecord[match.teamB].losses += 1;
    } else if (match.score.teamB > match.score.teamA) {
      teamRecord[match.teamB].wins += 1;
      teamRecord[match.teamA].losses += 1;
    }
  });

  const sortedTeams = [...event.teams].sort(
    (a, b) => teamRecord[b.id].wins - teamRecord[a.id].wins
  );

  return (
    <Container>
      {sortedTeams.map(team => (
        <TeamRow key={team.id}>
          <TeamName>{team.name}</TeamName>
          <Record>
            {teamRecord[team.id].wins} W - {teamRecord[team.id].losses} D
          </Record>
        </TeamRow>
      ))}
    </Container>
  );
}