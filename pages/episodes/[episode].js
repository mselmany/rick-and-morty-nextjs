import { Page } from "../../src/atoms/Layout";
import EpisodeDetail from "../../src/components/EpisodeDetail";

import { getEpisodeById } from "../../src/api";

export default function Episode({ episode }) {
  Episode.title = episode.name;

  return (
    <Page>
      <EpisodeDetail key={episode.id} data={episode}></EpisodeDetail>
    </Page>
  );
}

export async function getServerSideProps({ query }) {
  const episode = await getEpisodeById(query.episode, true);

  return { props: { episode } };
}
