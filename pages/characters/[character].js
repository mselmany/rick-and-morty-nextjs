import { Page } from "../../src/atoms/Layout";
import CharacterDetail from "../../src/components/CharacterDetail";

import { getCharacterById } from "../../src/api";

export default function Character({ character }) {
  Character.title = character.name;

  return (
    <Page>
      <CharacterDetail key={character.id} data={character}></CharacterDetail>
    </Page>
  );
}

export async function getServerSideProps({ query }) {
  const character = await getCharacterById(query.character, true);

  return { props: { character } };
}
