import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";

import Table from "./Table";

const initialState = {
  winner: "",
  turn: "O",
  tableData: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
};

const reducer = (state, action) => {};

const Tictactoe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //   const [winner, setWinner] = useState("");
  //   const [turn, setTurn] = useState("O");
  //   const [tableData, setTableData] = useState([
  // ["", "", ""],
  // ["", "", ""],
  // ["", "", ""],
  //   ]);

  return (
    <>
      <Table />
      {state.winner && <div>{state.winner}님의 승리</div>}
    </>
  );
};

export default Tictactoe;
