import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Movie from "../components/Movie";
import DetailMovie from "../components/DetailMovie";

function Detail() {
  const x = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${x.id}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data.movie);
        setLoading(false);

        // console.log(json);
        // console.log(data);
      });
  }, []);

  return (
    <div>
      <h1>
        <Link to="/movie">Back to MovieList</Link>
      </h1>
      <h1>
        <Link to="/">Back to Profile</Link>
      </h1>
      {loading ? <h1>Loading...</h1> : <h1>{data.title}</h1>}
      <hr />
      {loading ? null : (
        <DetailMovie
          img_src={data.medium_cover_image}
          title={data.title}
          rating={data.rating}
          description={data.description_full}
        />
      )}
    </div>
  );
}

export default Detail;
