import styled from "styled-components";
import { useData } from "../hooks/useData";
import BestPlayers from "../components/BestPlayers";
import Standings from "../components/Standings";

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1600px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: white;
`;

const EventTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: white;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 5rem;
  align-items: flex-start;
`;

const StandingsWrapper = styled.div`
  flex: 1;
  min-width: 0;
`;

const BestPlayersWrapper = styled.div`
  width: 420px;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export default function Home() {
  const { data, loading, error } = useData();

  if (loading) return <Container>Loading...</Container>;
  if (error) return <Container>{error}</Container>;
  if (!data) return <Container>No data available</Container>;

  return (
    <Container>
      {data.competitions.map((competition) => (
        <div key={competition.id}>
          <SectionTitle>{competition.name}</SectionTitle>
          {competition.events.map((event) => (
            <div key={event.id}>
              <EventTitle>{event.name}</EventTitle> 
              <ContentWrapper>
                <StandingsWrapper>
                  <Standings eventId="winter2026" />
                </StandingsWrapper>
                <BestPlayersWrapper>
                  <BestPlayers />
                </BestPlayersWrapper>
              </ContentWrapper>
            </div>
          ))}
        </div>
      ))}
    </Container>
  );
}