import Proptypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function DetailMovie({ img_src, title, rating, description }) {
  return (
    <div>
      <img src={img_src} />
      <p>
        <span>{title}</span>
        <span>평점 : {rating}</span>
      </p>
      <p>{description}</p>
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
