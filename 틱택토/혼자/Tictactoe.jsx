import React, { useState, useCallback, useEffect, useReducer } from "react";

import Table from "./Table";

export const SET_TURN = "SET_TURN";
export const SET_WINNER = "SET_WINNER";
export const SET_TABLEDATA = "SET_TABLEDATA";
export const CELL_CLICK = "CELL_CLICK";

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
    case CELL_CLICK: {
      let table = [...state.tableData];
      table[action.row][action.col] = state.turn;
      return {
        ...state,
        table,
        recentCell: [action.row, action.col],
      };
    }
    case SET_TURN:
      return {
        ...state,
        turn: state.turn === "O" ? "X" : "O",
      };

    case SET_TABLEDATA:
      return {
        ...state,
        tableData: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
      };
  }
};

const Tictactoe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onClickBtn = useCallback(() => {
    dispatch({ type: SET_TURN });
    dispatch({ type: SET_WINNER, winner: "" });
    dispatch({ type: SET_TABLEDATA });
  });

  useEffect(() => {
    console.log("useEffect");
    if (
      (state.tableData[0][0] === state.turn &&
        state.tableData[0][1] === state.turn &&
        state.tableData[0][2] === state.turn) ||
      (state.tableData[1][0] === state.turn &&
        state.tableData[1][1] === state.turn &&
        state.tableData[1][2] === state.turn) ||
      (state.tableData[2][0] === state.turn &&
        state.tableData[2][1] === state.turn &&
        state.tableData[2][2] === state.turn) ||
      (state.tableData[0][0] === state.turn &&
        state.tableData[1][0] === state.turn &&
        state.tableData[2][0] === state.turn) ||
      (state.tableData[0][1] === state.turn &&
        state.tableData[1][1] === state.turn &&
        state.tableData[2][1] === state.turn) ||
      (state.tableData[0][2] === state.turn &&
        state.tableData[1][2] === state.turn &&
        state.tableData[2][2] === state.turn) ||
      (state.tableData[0][0] === state.turn &&
        state.tableData[1][1] === state.turn &&
        state.tableData[2][2] === state.turn) ||
      (state.tableData[0][2] === state.turn &&
        state.tableData[1][1] === state.turn &&
        state.tableData[2][0] === state.turn)
    ) {
      console.log("끝");
      console.log(`승자는 ${state.turn}`);
      dispatch({ type: SET_WINNER, winner: state.turn });
    } else {
      dispatch({ type: SET_TURN });
    }
  }, [state.recentCell]);

  return (
    <>
      {console.log("render")}
      <Table tableData={state.tableData} dispatch={dispatch} />

      <h4>승리 : {state.winner === "" ? null : winner + "가 승리했습니다."}</h4>
      <h4>차례 : {state.turn} 이 둘 차례입니다.</h4>
      {state.winner === "" ? null : (
        <button onClick={onClickBtn}>다시하기</button>
      )}
    </>
  );
};

export default Tictactoe;
