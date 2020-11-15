import styled from "@emotion/styled";
import PropTypes from "prop-types";

import Link from "next/link";

const statusColors = {
  alive: "green",
  dead: "red",
  unknown: "",
};

export default function Character({ data }) {
  return (
    <Container>
      <Avatar src={data.image}></Avatar>
      <Infos>
        <Metas>
          <Meta bold>{data.species}</Meta>
          <Meta>{data.gender}</Meta>
        </Metas>
        <Link href={`/characters/${data.id}`} passHref>
          <Title>{data.name}</Title>
        </Link>
        <Metas>
          <Meta color={statusColors?.[data.status.toLowerCase?.("en")]} bold>
            {data.status}
          </Meta>
          <Meta>{data.episode.length} bölüm</Meta>
        </Metas>
      </Infos>
    </Container>
  );
}

Character.propTypes = {};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 0;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.BackgroundComponent__Accent};
  }
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
`;

const Avatar = styled.img`
  display: flex;
  width: 6rem;
  height: 6rem;
  border-radius: 1rem;
`;

const Title = styled.a`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.ColorStrong};
`;

const Metas = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0;
`;

const Meta = styled.span`
  padding-right: 0.5rem;
  color: ${({ theme, color }) => color || theme.ColorStrong};
  text-transform: uppercase;
  font-size: 0.85rem;
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};

  &:not(:last-child):after {
    content: "•";
    padding-left: 0.5rem;
    color: ${({ theme }) => theme.ColorStrong};
  }
`;
