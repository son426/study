import React from "react";
import ReactDOM from "react-dom";
import { useCallback } from "react";

import { CLICK_CELL, SET_TURN } from "./Tictactoe";

const Td = ({ rowIndex, columnIndex, dispatch, cellData }) => {
  const onClickTd = useCallback(() => {
    console.log(rowIndex, columnIndex);
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: columnIndex }, []);
  }, []);
  return <td onClick={onClickTd}>{cellData}</td>;
};

export default Td;
