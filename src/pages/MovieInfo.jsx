import { useEffect, useState } from "react";
import MovieDetail from "../components/MovieDetail";
import { useParams, Link } from "react-router-dom";
import { API_KEY, API_URL } from "../components/MovieList";
import styles from "./MovieInfo.module.css";
import Main from "./Main";
const MovieInfo = (props) => {
  const index = useParams();
  const [loading, setLoading] = useState(true);
  // 로딩을 안해주면, 에러가 뜸. 데이터를 받아오기전에 렌더링부터 하는데, 데이터가 아직 안받아진 상태여서 undefined가 되는거같음
  const [movie, setMovie] = useState();
  console.log(index);

  const getMovie = async () => {
    const json = await (
      await fetch(`${API_URL}popular?api_key=${API_KEY}`)
    ).json();
    const i = parseInt(index["index"]);
    setMovie(json.results[i]); // setState는 비동기
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
    console.log(movie);
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <Link to="../">
          <Main className={styles.main} />
        </Link>
        {loading || <MovieDetail movie={movie} />}
      </div>
    </>
  );
};

export default MovieInfo;
