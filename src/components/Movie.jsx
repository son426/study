import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

const Movie = ({ movie, index }) => {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <Link to={`./${index}`} style={{ textDecoration: "none" }}>
          <span>{index + 1}</span>
        </Link>
      </div>
      <div className={styles.column}>
        <img src={"https://image.tmdb.org/t/p/w200" + movie.poster_path} />
      </div>
    </div>
  );
};

export default Movie;
