import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import MovieInfo from "./pages/MovieInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/:index" element={<MovieInfo />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
