import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import Tictactoe from "../components/Tictactoe";

function Game() {
  return (
    <div>
      <h1>Game page</h1>
      <Tictactoe />
    </div>
  );
}

export default Game;
