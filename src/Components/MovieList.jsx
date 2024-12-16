/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";

const MovieList = ({ data }) => {
  return (
    <div>
      {data.map((el) => (
        <MovieCard key={el.id} movie={el} />
      ))}
    </div>
  );
};

export default MovieList;
