const MovieDetail = ({ movie }) => {
  return (
    <div>
      <div>
        <h3>Movie DETAIL</h3>
        <img src={"https://image.tmdb.org/t/p/w200" + movie.poster_path} />
        <p>title : {movie.title}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
