import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Slider() {
    const [movie, setMovie] = useState("");
    const baseUrl = "https://api.themoviedb.org/3";
    const apiKey = "baf057f3579501246838cd16ae8ff728";
    useEffect( () =>  {
        const api = async ()=>{
            console.log("api")
            await axios.get(`${baseUrl}/trending/movie/day?api_key=${apiKey}`).then((res)=> setMovie(()=> res.data.results[0]))
        }
        api();
    }, [])
    
  return (
    <div>{movie.title}</div>
  )
}

export default Slider