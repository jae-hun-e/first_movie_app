import React from "react";
import axios from "axios";
import Movies from "./Movies";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader_text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map((movie) => (
              <Movies
                id={movie.id}
                year={movie.year}
                runtime={movie.runtime}
                genres={movie.genres}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                key={movie.id}
              />
            ))}
          </div>
        )}
      </section>
    );
  }

  getMovies = async () => {
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log(movies.data.data.movies);
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sotr_by=rating"
    ); //API문서에서 필요한 정보만 빼오기, sort_by=rating
    // console.log(movies);
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }
}

export default App;
