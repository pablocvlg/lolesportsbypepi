import styled from "styled-components";
import MatchCard from "../components/MatchCard";
import PlayerCard from "../components/PlayerCard";
import TeamCard from "../components/TeamCard";
import { useMatches } from "../hooks/useMatches";
import { usePlayers } from "../hooks/usePlayers";
import { useTeams } from "../hooks/useTeams";

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const Section = styled.section<{ bgColor: string }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 12px;
  background-color: ${({ bgColor }) => bgColor};
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #222;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1rem;
`;

export default function Home() {
  const { matches } = useMatches();
  const players = usePlayers();
  const teams = useTeams();

  return (
    <Container>
      <Section bgColor="#e6f0ff">
        <SectionTitle>Matches</SectionTitle>
        <CardsGrid>
          {matches.map((m) => <MatchCard key={m.id} match={m} />)}
        </CardsGrid>
      </Section>

      <Section bgColor="#e6ffe6">
        <SectionTitle>Players</SectionTitle>
        <CardsGrid>
          {players.map((p) => <PlayerCard key={p.id} player={p} />)}
        </CardsGrid>
      </Section>

      <Section bgColor="#fff3e6">
        <SectionTitle>Teams</SectionTitle>
        <CardsGrid>
          {teams.map((t) => <TeamCard key={t.id} team={t} />)}
        </CardsGrid>
      </Section>
    </Container>
  );
}