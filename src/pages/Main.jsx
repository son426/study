// api 따오는거 참고했음. https://velog.io/@jahommer/React-app6-TMDB-API
import { useState } from "react";
import Bar from "../components/Bar";
import MovieList from "../components/MovieList";
import MovieInfo from "./MovieInfo";
import styles from "./Main.module.css";

const Main = () => {
  const [movie, setMovie] = useState("");

  const onClickMovie = () => {
    console.log(movie);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <Bar />
      </header>
      <main>
        {movie === "" ? null : <MovieInfo />}
        <MovieList setMovie={setMovie} />
        <MovieList />
        <MovieList />
        <MovieList />
        <MovieList />
      </main>
    </div>
  );
};

export default Main;
