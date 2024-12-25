import { useParams } from "react-router-dom";
import { data } from "../data";
import Rating from "@mui/material/Rating";
const MovieProfile = () => {
  const { id } = useParams();
  const movie = data.filter((el) => el.id == id);

  return (
    <div>
      <h1>{movie[0].title}</h1>
      <iframe
        width="560"
        height="315"
        src={movie[0].movieTrailer}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <p style={{ width: "500px" }}> {movie[0].description} </p>
      <Rating value={movie[0].rating} readOnly max={10} />
    </div>
  );
};

export default MovieProfile;
