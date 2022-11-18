import styles from "./MovieDetail.module.css";

const MovieDetail = ({ movie }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={"https://image.tmdb.org/t/p/w200" + movie.poster_path} />
        <div className={styles.metabox}>
          <div className={styles.metabox_row}>
            <span className={styles.title}>{movie.title}</span>
          </div>
          <div className={styles.metabox_row}>
            <span className={styles.date}>{movie.release_date}</span>
            <span className={styles.lang}>{movie.original_language}</span>
            <span className={styles.score}>평점 : {movie.vote_average}</span>
            <span className={styles.popularity}>
              popularity : {movie.popularity}
            </span>
          </div>
          <div className={styles.metabox_row}>
            <span className={styles.summary}>{movie.overview}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
