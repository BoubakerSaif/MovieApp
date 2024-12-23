import { useState } from "react";
import "./App.css";
import AddMovie from "./Components/AddMovie";
import MovieList from "./Components/MovieList";
import { data } from "./data";
import Rating from "@mui/material/Rating";
import { IoIosClose } from "react-icons/io";
function App() {
  const [movies, setMovies] = useState(data);
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);

  const addMovieHandler = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div>
      <div
        style={{
          marginBottom: "20px",
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          type="search"
          placeholder="Movie name"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <Rating
            value={rating}
            max={10}
            name="simple-controlled"
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
          <IoIosClose
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={() => {
              setRating(0);
            }}
          />
        </div>
      </div>
      <AddMovie addMovieHandler={addMovieHandler} />
      <MovieList
        data={movies.filter(
          (el) =>
            el.title.toLowerCase().includes(search.toLowerCase()) &&
            el.rating >= rating
        )}
      />
    </div>
  );
}

export default App;
