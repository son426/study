import Proptypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
import * as common from "../CommonFunction.js";

function Movie({ id, cover_image, title, summary, year }) {
  return (
    <Link className={styles.router} to={`/movie/${id}`}>
      <div
        onMouseEnter={common.zoomIn}
        onMouseLeave={common.zoomOut}
        className={styles.movie_container}
      >
        <img className={styles.movie_img} src={cover_image} />
        <div className={styles.text_box}>
          <h2 className={styles.movie_title}>{title}</h2>
          <p className={styles.movie_year}>{year}</p>
          <p className={styles.movie_summary}>
            {summary.length < 235
              ? summary
              : `${summary.slice(0, 235)}......더보기`}
          </p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: Proptypes.number.isRequired,
  cover_image: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  summary: Proptypes.string.isRequired,
};

export default Movie;
