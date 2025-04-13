import axios from "axios";
const API = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

const fetchAllSongs = async () => {
  try {
    const { data } = await axios.get(`${API}/songs`);
    console.log("Data received:", data);

    return data;
  } catch (error) {
    throw error;
  }
};

const fetchAllChords = async () => {
  try {
    const { data } = await axios.get(`${API}/chords`);

    return data;
  } catch (error) {
    throw error;
  }
};

const fetchSingleSongDetails = async (songId) => {
  try {
    const { data } = await axios.get(`${API}/songs/${songId}/details`);

    return data;
  } catch (error) {
    throw error;
  }
};

const fetchSingleSongChords = async (songId) => {
  try {
    const { data } = await axios.get(`${API}/songs/${songId}/chords`);

    return data;
  } catch (error) {
    throw error;
  }
};

const fetchSingleSongLyrics = async (songId) => {
  try {
    const { data } = await axios.get(`${API}/songs/${songId}/sections`);

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
