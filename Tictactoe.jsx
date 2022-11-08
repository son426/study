import React, { useState, useReducer, useCallback } from "react";
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

const SET_WINNER = "SET_WINNER";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner,
      };
  }
};

const Tictactoe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //   const [winner, setWinner] = useState("");
  //   const [turn, setTurn] = useState("O");
  //   const [tableData, setTableData] = useState([
  // ["", "", ""],
  // ["", "", ""],
  // ["", "", ""],
  //   ]);

  const onClickTable = useCallback(() => {
    dispatch({ type: SET_WINNER, winner: "O" }, []);
  });

  return (
    <>
      <Table onClick={onClickTable} tableData={state.tableData} />
      {state.winner && <div>{state.winner}님의 승리</div>}
    </>
  );
};

export default Tictactoe;
