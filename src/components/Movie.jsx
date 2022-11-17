import { Link } from "react-router-dom";

const Movie = ({ movie, index }) => {
  return (
    <div>
      <Link to={`./${index}`}>
        <span>{index + 1}</span>
        <img src={"https://image.tmdb.org/t/p/w200" + movie.poster_path} />
      </Link>
    </div>
  );
};

export default Movie;
