import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import Game from "./routes/Game";
import Main from "./routes/Main";
import Study from "./routes/Study";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/study" element={<Study />} />
        <Route path="/game" element={<Game />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
