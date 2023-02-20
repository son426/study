import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import Game from "./index1.js";
import Study from "../routes/Study.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Game />
        </Route>
        <Route path="/study">
          <Study />
        </Route>
      </Switch>
    </Router>
  );
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
