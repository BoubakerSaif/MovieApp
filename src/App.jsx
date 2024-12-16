import { useState } from "react";
import "./App.css";
import AddMovie from "./Components/AddMovie";
import MovieList from "./Components/MovieList";
import { data } from "./data";

function App() {
  const [movies, setMovies] = useState(data);

  const addMovieHandler = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div>
      <AddMovie addMovieHandler={addMovieHandler} />
      <MovieList data={movies} />
    </div>
  );
}

export default App;
