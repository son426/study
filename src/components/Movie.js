import Proptypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
function Movie({ medium_cover_image, title, summary }) {
  return (
    <div>
      <img src={medium_cover_image} />
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
      <p>{summary}</p>
    </div>
  );
}

Movie.protoTypes = {
  medium_cover_image: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  summary: Proptypes.string.isRequired,
};

export default Movie;
