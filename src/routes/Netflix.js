import { Link } from "react-router-dom";

function Netflix() {
  return (
    <div>
      <h1>Netflix</h1>
      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </div>
  );
}

export default Netflix;
