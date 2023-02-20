import Proptypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./DetailMovie.module.css";

function DetailMovie({ img_src, title, rating, description, year }) {
  return (
    <div className={styles.container}>
      <div className={styles.img_box}>
        <img className={styles.cover_img} src={img_src} />
        <Link to="../movie">
          <button className={styles.close_button}>X</button>
        </Link>
        <p className={styles.img_element_box}>
          <button className={styles.play_button}>재생</button>
          <button className={styles.button}>+</button>
          <button className={styles.button}>따봉</button>
        </p>
      </div>
      <div className={styles.text_box}>
        <div className={styles.column}>
          <p className={styles.text}>
            <span>{year}</span>
            <span>19+</span>
            <span>2시간2분</span>
            <span>HD</span>
          </p>
          <h3></h3>
        </div>
        <div className={styles.column}>
          <p>
            <h2>{title}</h2>
            <span>평점 : {rating}</span>
          </p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

// Movie.propTypes = {
//   id: Proptypes.number.isRequired,
//   cover_image: Proptypes.string.isRequired,
//   title: Proptypes.string.isRequired,
//   summary: Proptypes.string.isRequired,
// };

export default DetailMovie;
