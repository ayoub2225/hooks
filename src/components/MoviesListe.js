import React from "react";
import { movies } from "../movies";
import MovieCard from "./Card";

function MoviesListe({ filterRating, filterTitle }) {
  return (
    <div className="MovieListe">
      {movies
        .filter((item) => {
          return item.title.toLowerCase().includes(filterTitle.toLowerCase());
        })
        .filter((item) => {
          if (filterRating === 0) {
            return true;
          } else {
            return item.rating === filterRating;
          }
        })
        .map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
    </div>
  );
}

export default MoviesListe;
