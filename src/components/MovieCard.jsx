import React from "react";

function MovieCard({ movie }) {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        alt=""
        className="w[110px] md:w-[200px] rounded-md hover:border-[4px] border-gray-200 hover:scale-110 transition-all ease-in-out duration-150 cursor-pointer shadow-lg shadow-black"
      />
    </>
  );
}

export default MovieCard;
