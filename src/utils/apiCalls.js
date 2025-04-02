import axios from "axios";

const fetchAllSongs = async () => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/songs`
    );

    return data;
  } catch (error) {
    throw error;
  }
};

const fetchAllChords = async () => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/chords`
    );

    return data;
  } catch (error) {
    throw error;
  }
};

const fetchSingleSongDetails = async (songId) => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/songs/${songId}/details`
    );

    return data;
  } catch (error) {
    throw error;
  }
};

const fetchSingleSongChords = async (songId) => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/songs/${songId}/chords`
    );

    return data;
  } catch (error) {
    throw error;
  }
};

const fetchSingleSongLyrics = async (songId) => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/songs/${songId}/sections`
    );

    return data;
  } catch (error) {
    throw error;
  }
};

export {
  fetchAllSongs,
  fetchAllChords,
  fetchSingleSongDetails,
  fetchSingleSongChords,
  fetchSingleSongLyrics,
};
