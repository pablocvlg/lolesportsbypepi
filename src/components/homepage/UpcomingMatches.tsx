import styled from "styled-components";
import { useData } from "../../hooks/useData";
import UpcomingMatchCard from "../homepage/UpcomingMatchCard";
import type { Match, Team } from "../../types/Data";

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  margin: 0rem 0rem 1rem 0rem;
`;

const MatchesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const NoMatches = styled.div`
  color: #9ca3af;
  font-size: 0.9rem;
  padding: 1rem;
  text-align: center;
`;

const formatTime = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  return `${day}/${month}`;
};

export default function UpcomingMatches() {
  const { data, loading, error } = useData();

  if (loading) return <Container>Loading...</Container>;
  if (error) return <Container>{error}</Container>;
  if (!data) return <Container>No data available</Container>;

  const matches: Match[] = data.competitions.flatMap((comp) =>
    comp.events.flatMap((event) => event.matches)
  );

  const teams: Team[] = data.competitions.flatMap((comp) =>
    comp.events.flatMap((event) => event.teams)
  );

  const getTeam = (teamId: string) => {
    return teams.find((t) => t.id === teamId);
  };

  const upcomingMatches = matches
    .filter((match) => match.score.teamA === 0 && match.score.teamB === 0)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 6);

  if (upcomingMatches.length === 0) {
    return (
      <Container>
        <Title>Upcoming Matches</Title>
        <NoMatches>No upcoming matches scheduled.</NoMatches>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Upcoming Matches</Title>
      <MatchesList>
        {upcomingMatches.map((match) => {
          const teamA = getTeam(match.teamA);
          const teamB = getTeam(match.teamB);
          const time = formatTime(match.date);
          const date = formatDate(match.date);

          return (
            <UpcomingMatchCard
              key={match.id}
              match={match}
              teamA={teamA}
              teamB={teamB}
              time={time}
              date={date}
            />
          );
        })}
      </MatchesList>
    </Container>
  );
}