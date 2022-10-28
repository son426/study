import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <h1>Main page</h1>
      <Link to="./study">
        <button>공부페이지로</button>
      </Link>
      <Link to="./game">
        <button>게임페이지로</button>
      </Link>
      <Link to="./memo">
        <button>메모</button>
      </Link>
    </div>
  );
}

export default Main;
