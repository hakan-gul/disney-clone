import React, { useEffect, useState } from "react";
import genreList from "../lists/GenresList";
import MovieList from "./MovieList";

function GenreMovieList({ item }) {
  return (
    <div>
      {genreList.map((item) => (
        <div key={item.id}>
          <h2 className=" text-2xl text-gray-200 font-bold pt-5 px-16">
            {item.name}
          </h2>
          <div>
            <MovieList itemId={item.id} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default GenreMovieList;
