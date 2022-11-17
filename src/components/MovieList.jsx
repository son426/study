import React, { useEffect, useState } from "react";
import styles from "./MovieList.module.css";
import Movie from "./Movie";

export const API_KEY = "a299511582249d7b974319fe3656e92b";
export const API_URL = "https://api.themoviedb.org/3/movie/";

const MovieList = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(`${API_URL}popular?api_key=${API_KEY}`)
    ).json();
    setMovies(json.results);
    console.log(json.results);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.wrapper}>
      <header>오늘 대한민국의 TOP 10 영화</header>
      <div className={styles.movie_list}>
        {movies.map((movie, index) => {
          return <Movie movie={movie} index={index} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;
