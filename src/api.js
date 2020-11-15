import axios from "axios";

const client = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
  headers: {},
});

export const getEpisodes = async ({ page, filters: { ...filters } } = {}) => {
  const { data } = await client.get("/episode", {
    params: { page, ...filters },
  });
  console.log(data);
  return data;
};

export const getEpisodeById = async (episodeId, withExtensions) => {
  const { data } = await client.get(`/episode/${episodeId}`);
  if (withExtensions) {
    const episodeCharacters = data.characters.map((url) =>
      url.replace("https://rickandmortyapi.com/api/character/", "")
    );
    if (episodeCharacters?.length) {
      data.characters = await getCharacterById(episodeCharacters.join(","));
    }
  }
  return data;
};

export const getCharacters = async ({ page, filters: { ...filters } } = {}) => {
  const { data } = await client.get("/character", {
    params: { page, ...filters },
  });
  return data;
};

export const getCharacterById = async (characterId, withExtensions) => {
  const { data } = await client.get(`/character/${characterId}`);
  if (withExtensions) {
    const characterEpisodes = data.episode.map((url) =>
      url.replace("https://rickandmortyapi.com/api/episode/", "")
    );
    if (characterEpisodes?.length) {
      data.episode = await getEpisodeById(characterEpisodes.join(","));
    }
  }
  return data;
};

export const getLocations = async ({ page, filters: { ...filters } } = {}) => {
  const { data } = await client.get("/location", {
    params: { page, ...filters },
  });
  return data;
};
export const getLocationById = async (locationId) => {
  const { data } = await client.get(`/location/${locationId}`);
  return data;
};
