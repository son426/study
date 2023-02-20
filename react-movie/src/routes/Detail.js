import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Movie from "../components/Movie";
import DetailMovie from "../components/DetailMovie";
import styles from "./Detail.module.css";

function Detail() {
  const x = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${x.id}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data.movie);
        console.log(json.data.movie);
        setLoading(false);

        // console.log(json);
        // console.log(data);
      });
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <DetailMovie
          title={data.title}
          img_src={data.background_image_original}
          rating={data.rating}
          description={data.description_full}
          year={data.year}
        />
      )}
    </div>
  );
}

export default Detail;
