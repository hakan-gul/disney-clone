import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "baf057f3579501246838cd16ae8ff728";
// https://api.themoviedb.org/3/trending/movie/day?api_key=baf057f3579501246838cd16ae8ff728

const getTrendingVideos = axios.get(
  `${baseUrl}/trending/movie/day?api_key=${apiKey}`
);

export default getTrendingVideos;
