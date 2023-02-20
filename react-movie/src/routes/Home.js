import { useState, useEffect, Component } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <h1 className={styles.header}>Loading...</h1>
      ) : (
        <h1 className={styles.header}>Movie List</h1>
      )}
      <div className={styles.movies}>
        {/* {movies[0].title} */}
        {movies.map((movie) => (
          <div className={styles.movie} key={movie.id}>
            <Movie
              id={movie.id}
              cover_image={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              year={movie.year}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
