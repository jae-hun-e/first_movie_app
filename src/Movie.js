import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, runtime, genres, title, summary, poster }) {
  // console.log(genres);
  return (
    <div className="movie" key={id}>
      <img className="movie__poster" src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <div className="movie__info">
          <h4 className="movie__year">개봉년도 : {year}</h4>
          <h5 className="movie__runtime">runtime : {runtime}</h5>
        </div>
        <ul className="movie__genres">
          장르:
          {genres.map((g, index) => (
            <li className="movie__genres__genre" key={index}>
              {g}
            </li>
          ))}
        </ul>
        <p className="movie__summary">줄거리 : {summary.slice(0, 140)}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
