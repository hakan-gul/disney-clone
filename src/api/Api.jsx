import axios from "axios";
import { useEffect } from "react";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "baf057f3579501246838cd16ae8ff728";
// https://api.themoviedb.org/3/trending/movie/day?api_key=baf057f3579501246838cd16ae8ff728

const Apifunc =  () =>{
    useEffect(() => {
      
        const getTrendingVideos = axios.get(`${baseUrl}/trending/movie/day?${apiKey}`);
        
    }, [])
    

}

export default getTrendingVideos;