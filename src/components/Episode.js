import styled from "@emotion/styled";
import PropTypes from "prop-types";

import Link from "next/link";

export default function Episode({ data }) {
  return (
    <Container>
      <Metas>
        <Meta bold>{data.episode}</Meta>
      </Metas>
      <Link href={`/episodes/${data.id}`} passHref>
        <Title>{data.name}</Title>
      </Link>
      <Metas>
        <Meta>{data.air_date}</Meta>
        <Meta>{data?.characters?.length} karakter</Meta>
      </Metas>
    </Container>
  );
}

Episode.propTypes = {};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.BackgroundComponent__Accent};
  }
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
