// api 따오는거 참고했음. https://velog.io/@jahommer/React-app6-TMDB-API

import Bar from "../components/Bar";
import MovieList from "../components/MovieList";

const Main = () => {
  return (
    <>
      <h1>Main Page</h1>
      <Bar />
      <MovieList />
    </>
  );
};

export default Main;
