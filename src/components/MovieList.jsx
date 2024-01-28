import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function MovieList({ itemId }) {
  const slideRef = useRef();

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };
  const genreBaseUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=baf057f3579501246838cd16ae8ff728";

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getWithGenres();
  }, []);

  const getWithGenres = () => {
    axios.get(genreBaseUrl + "&with_genres=" + itemId).then((res) => {
      setMovieList(res.data.results);
      console.log(movieList);
    });
  };

  return (
    <>
      <HiChevronRight
        className={
          "text-white hidden md:block text-[40px] absolute mx-4 mt-[200px] cursor-pointer right-0 z-10"
        }
        onClick={() => slideRight(slideRef.current)}
      />
      <HiChevronLeft
        className={
          "text-white hidden md:block text-[40px] absolute mx-4 mt-[200px] cursor-pointer z-10"
        }
        onClick={() => slideLeft(slideRef.current)}
      />

      <div
        className="flex overflow-hidden gap-2 md:gap-7 px-5 md:px-16 overflow-x-auto scrollbar-hide py-10"
        ref={slideRef}
      >
        {movieList.map((item, index) => (
          <MovieCard movie={item} />
        ))}
      </div>
    </>
  );
}

export default MovieList;
