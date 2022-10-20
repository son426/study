import { useState, useEffect } from "react";

function App() {
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
    <div>
      {loading ? <h1>Loading...</h1> : <h1>Movie List</h1>}

      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img src={movie.medium_cover_image} />
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            {movie.hasOwnProperty("genres") ? (
              <ul>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
