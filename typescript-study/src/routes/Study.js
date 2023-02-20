import { Link } from "react-router-dom";

function Study() {
  return (
    <div>
      <h1>Study page</h1>
      <Link to="/">
        <button>Go to Home</button>
      </Link>
      <Link to="./netflix">
        <button>넷플릭스로 가기</button>
      </Link>
    </div>
  );
}

export default Study;
