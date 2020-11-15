import { Page } from "../../src/atoms/Layout";
import Episode from "../../src/components/Episode";

import { getEpisodes } from "../../src/api";
import Pager from "../../src/components/Pager";
import { useState } from "react";

export default function Episodes({ episodes }) {
  const [data, setData] = useState(() => episodes);
  return (
    <Page>
      <Page.Title>Bölümler ({data?.results?.length || "Yok"})</Page.Title>
      {data?.results?.map?.((episode) => (
        <Episode key={episode.id} data={episode}></Episode>
      ))}

      <Pager
        status={data.info}
        adapter={getEpisodes}
        onFetched={(newData) => {
          console.log(newData);
          setData(newData);
        }}
      ></Pager>
    </Page>
  );
}

export async function getServerSideProps() {
  const episodes = await getEpisodes();

  return { props: { episodes } };
}

Episodes.title = "Bölümler";
