import styled from "styled-components";
import type { Team } from "../../types/Data";
import PlayerTeamCard from "./PlayerTeamCard";

type TeamCardProps = {
  team: Team;
};

const Card = styled.div`
  background: linear-gradient(135deg, #11251aff 0%, #4e745eff 100%);
  border-radius: 12px;
  padding: 1.1rem;
`;

const TeamHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const TeamLogo = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
`;

const TeamInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Name = styled.h2`
  font-size: 1.3rem;
  color: #fff;
`;

const Abbrev = styled.span`
  font-size: 0.9rem;
  color: #aaa;
`;

const PlayersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <Card>
      <TeamHeader>
        <TeamLogo
          src={team.logo}
          alt={team.abbrev}
          onError={(e) => {
            e.currentTarget.src =
              'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="50" height="50"%3E%3Crect width="50" height="50" fill="%23333"/%3E%3C/svg%3E';
          }}
        />
        <TeamInfo>
          <Name>{team.name}</Name>
          <Abbrev>({team.abbrev})</Abbrev>
        </TeamInfo>
      </TeamHeader>
      <PlayersContainer>
        {team.players.map((player) => (
          <PlayerTeamCard
            key={player.id}
            player={player}
          />
        ))}
      </PlayersContainer>
    </Card>
  );
}