import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

function Slider() {
  const screenWidth = window.innerWidth;
  const [movie, setMovie] = useState([]);
  const baseUrl = "https://api.themoviedb.org/3";
  const apiKey = "baf057f3579501246838cd16ae8ff728";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    api();
  }, []);
  const api = async () => {
    console.log("api");
    await axios
      .get(`${baseUrl}/trending/movie/day?api_key=${apiKey}`)
      .then((res) => setMovie(() => res.data.results));
  };
  const slideRef = useRef();

  const slideRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const slideLeft = (element) => {
    console.log("clicked left button");
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <div>
      <HiChevronRight
        className={
          "text-white hidden md:block text-[40px] absolute mx-4 mt-[200px] cursor-pointer right-0"
        }
        onClick={() => slideRight(slideRef.current)}
      />
      <HiChevronLeft
        className={
          "text-white hidden md:block text-[40px] absolute mx-4 mt-[200px] cursor-pointer"
        }
        onClick={() => slideLeft(slideRef.current)}
      />

      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide"
        ref={slideRef}
      >
        {movie.map((mov, i) => {
          return (
            <>
              {/* <h2 className=" text-yellow-200">{mov.title}</h2> */}
              <img
                src={IMAGE_BASE_URL + mov.backdrop_path}
                alt="poster"
                className="min-w-full md:h-[400px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100"
                key={i}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
