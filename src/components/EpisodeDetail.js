import { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import Episode from "./Episode";
import Character from "./Character";
import InputFilter from "./InputFilter";
import Sorter from "./Sorter";

const sortFields = [
  {
    label: "Ada göre",
    field: "name",
  },
  {
    label: "Duruma göre",
    field: "status",
  },
  {
    label: "Türe göre",
    field: "species",
  },
  {
    label: "Cinsiyete göre",
    field: "gender",
  },
];

export default function EpisodeDetail({ data }) {
  const [characterList, setCharacterList] = useState(() => data?.characters);
  const onInputChange = useCallback(
    (text) => {
      setCharacterList(
        data?.characters.filter((character) =>
          character.name.toLowerCase("en").includes(text)
        )
      );
    },
    [data?.characters]
  );

  const onSortChange = useCallback((field) => {
    setCharacterList((prev) => [
      ...prev.sort((a, b) => {
        a = a?.[field]?.toLowerCase?.("en");
        b = b?.[field]?.toLowerCase?.("en");
        return a > b ? 1 : -1;
      }),
    ]);
  }, []);

  return (
    <Container>
      <Episode data={data}></Episode>
      <SectionTitle>
        Bölüm Oyuncuları ({data?.characters?.length || "Yok"})
      </SectionTitle>

      <InputFilter
        onChange={onInputChange}
        placeholder="İsme göre filtrele"
      ></InputFilter>
      <Sorter
        list={sortFields}
        onSelect={onSortChange}
        placeholder="Karakter sıralama"
      ></Sorter>

      {characterList?.map?.((episode) => (
        <Character key={episode.id} data={episode}></Character>
      ))}
    </Container>
  );
}

EpisodeDetail.propTypes = {};

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
