import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Movie.module.css";

const Movie = ({ movie, index, setMovie }) => {
  const navigate = useNavigate();

  const onClickMovie = () => {
    // navigate(`./${index}`);
    setMovie(index);
  };

  return (
    <div className={styles.container} onClick={onClickMovie}>
      <div className={styles.column}>
        <span>{index + 1}</span>
      </div>
      <div className={styles.column}>
        <img src={"https://image.tmdb.org/t/p/w200" + movie.poster_path} />
      </div>
    </div>
  );
};

export default Movie;
