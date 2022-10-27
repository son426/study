import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <p>Main page</p>
      <Link to="./study">
        <button>공부페이지로</button>
      </Link>
      <Link to="./game">
        <button>게임페이지로</button>
      </Link>
    </div>
  );
}

export default Main;
