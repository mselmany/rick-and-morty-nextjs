import styled from "@emotion/styled";
import PropTypes from "prop-types";

import Character from "./Character";
import Episode from "./Episode";

export default function CharacterDetail({ data }) {
  return (
    <Container>
      <Character data={data}></Character>

      <SectionTitle>Detaylar</SectionTitle>
      <ListItem>
        <Label>İlk görüldüğü yer:</Label>
        <Value>{data.origin.name}</Value>
      </ListItem>
      <ListItem>
        <Label>Son lokasyon:</Label>
        <Value>{data.location.name}</Value>
      </ListItem>

      <SectionTitle>
        Oynadığı Bölümler ({data?.episode?.length || "Yok"})
      </SectionTitle>

      {data?.episode?.map?.((episode) => (
        <Episode key={episode.id} data={episode}></Episode>
      ))}
    </Container>
  );
}

CharacterDetail.propTypes = {};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  margin-top: 1.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.ColorStrong};
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.BackgroundComponent__Accent};
`;

const Label = styled.span`
  padding-right: 0.5rem;
  color: ${({ theme }) => theme.ColorStrong};
`;

const Value = styled.span`
  color: ${({ theme, color }) => color || theme.ColorStrong};
  font-weight: bold;
`;
