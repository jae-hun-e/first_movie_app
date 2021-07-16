import React from "react";
import PropTypes from "prop-types";

function Movies({ id, year, runtime, genres, title, summary, poster }) {
  console.log(genres);
  return (
    <div class="movie">
      <img class="movie__poster" src={poster} alt={title} title={title} />
      <div class="movie__data">
        <h3 class="movie__title">제목 : {title}</h3>
        <h5 class="movie__year">년도 : {year}</h5>
        <p class="movie__summary">줄거리 : {summary}</p>
        <h2 class="movie__gemres">장르 : {genres.map((g) => g + "  ")}</h2>
        <h4 class="movie__runtime">시간 : {runtime}</h4>
      </div>
    </div>
  );
}

Movies.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movies;
