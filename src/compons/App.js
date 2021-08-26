import "../index.css";
import Review from "./Reveiws";
import movieData from "../data/movie-data-test";
import AddMovie from "./AddMovie";
import React from "react";

function App() {
  const [movies, setMovies] = React.useState(movieData);

  const addMovie = (movie) => {
    const newMovies = [...movies];
    newMovies.unshift(movie);
    setMovies(newMovies);
  };
  return (
    <div>
      <AddMovie addMovie={addMovie} />
      <div className="list">
        {movies.map((movie) => (
          <Review
            film={movie.film}
            year={"(" + movie.year + ")"}
            director={movie.director}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
