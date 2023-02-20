import React, { useState, useReducer, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

import Table from "./Table";

export const SET_WINNER = "SET_WINNER";
export const CLICK_CELL = "CLICK_CELL";
export const SET_TURN = "SET_TURN";
export const RESET_GAME = "RESET_GAME";

const initialState = {
  winner: "",
  turn: "O",
  tableData: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  recentCell: [-1, -1],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner,
      };
    case CLICK_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row][action.cell] = state.turn;
      return {
        ...state,
        tableData,
        recentCell: [action.row, action.cell],
      };
    }
    case SET_TURN:
      return {
        ...state,
        turn: state.turn === "O" ? "X" : "O",
      };
    case RESET_GAME:
      return {
        ...state,
        turn: "O",
        tableData: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
        recentCell: [-1, -1],
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

  useEffect(() => {
    const [row, cell] = state.recentCell;
    let win = false;

    if (row < 0) return;
    if (
      state.tableData[row][0] === state.turn &&
      state.tableData[row][1] === state.turn &&
      state.tableData[row][2] === state.turn
    ) {
      win = true;
    }
    if (
      state.tableData[0][cell] === state.turn &&
      state.tableData[1][cell] === state.turn &&
      state.tableData[2][cell] === state.turn
    ) {
      win = true;
    }
    if (
      state.tableData[0][0] === state.turn &&
      state.tableData[1][1] === state.turn &&
      state.tableData[2][2] === state.turn
    ) {
      win = true;
    }
    if (
      state.tableData[0][2] === state.turn &&
      state.tableData[1][1] === state.turn &&
      state.tableData[2][0] === state.turn
    ) {
      win = true;
    }

    if (win) {
      dispatch({ type: SET_WINNER, winner: state.turn }, []);
      dispatch({ type: RESET_GAME }, []);
    } else {
      console.log("턴 넘겨");
      dispatch({ type: SET_TURN }, []);
    }
  }, [state.recentCell]);

  return (
    <>
      <Table tableData={state.tableData} dispatch={dispatch} />
      {state.winner && <h3>{state.winner}님의 승리</h3>}
      <p>{state.turn}님의 차례</p>
    </>
  );
};

export default Tictactoe;
