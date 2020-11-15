import { useCallback, useEffect, useState } from "react";
import { Page } from "../../src/atoms/Layout";
import Character from "../../src/components/Character";
import InputFilter from "../../src/components/InputFilter";

import { getCharacters } from "../../src/api";
import Sorter from "../../src/components/Sorter";
import Pager from "../../src/components/Pager";

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

export default function Characters({ characters }) {
  const [data, setData] = useState(() => characters);
  const [characterList, setCharacterList] = useState(() => data?.results);

  const onInputChange = useCallback(
    (text) => {
      setCharacterList(
        data?.results.filter((character) =>
          character.name.toLowerCase("en").includes(text)
        )
      );
    },
    [data?.results]
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
    <Page>
      <Page.Title>Karakterler ({data?.results?.length || "Yok"})</Page.Title>

      <InputFilter
        onChange={onInputChange}
        placeholder="İsme göre filtrele"
      ></InputFilter>
      <Sorter
        list={sortFields}
        onSelect={onSortChange}
        placeholder="Karakter sıralama"
      ></Sorter>

      {characterList?.length ? (
        characterList?.map?.((character) => (
          <Character key={character.id} data={character}></Character>
        ))
      ) : (
        <span>Karakter yok!</span>
      )}

      {!!characterList?.length && (
        <Pager
          status={data.info}
          adapter={getCharacters}
          onFetched={(newData) => {
            console.log(newData);
            setData(newData);
            setCharacterList(newData?.results);
          }}
        ></Pager>
      )}
    </Page>
  );
}

export async function getServerSideProps() {
  const characters = await getCharacters();

  return { props: { characters } };
}

Characters.title = "Karakterler";
