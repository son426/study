// api 따오는거 참고했음. https://velog.io/@jahommer/React-app6-TMDB-API
import Bar from "../components/Bar";
import MovieList from "../components/MovieList";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <header>
        <Bar />
      </header>
      <main>
        <MovieList />
      </main>
    </div>
  );
};

export default Main;
