import React, { useContext, useCallback } from "react";
import { TableContext, CODE, OPEN_CELL, CLICK_MINE } from "./MineSearch";

const getTdStyle = (code) => {
  switch (code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return {
        background: "#444",
      };
    case CODE.OPENED:
      return {
        background: "white",
      };
    case CODE.CLICKED_MINE:
      return {
        background: "red",
      };
    default:
      return {
        background: "white",
      };
  }
};
const getTdText = (code) => {
  switch (code) {
    case CODE.NORMAL:
      return "";
    case CODE.MINE:
      return "X";
    case CODE.CLICKED_MINE:
      return "펑";
    default:
      return "";
  }
};

const Td = ({ rowIndex, cellIndex }) => {
  const { tableData, dispatch } = useContext(TableContext);

  const onClickTd = useCallback(() => {
    switch (tableData[rowIndex][cellIndex]) {
      case CODE.NORMAL:
        dispatch({ type: OPEN_CELL, row: rowIndex, cell: cellIndex });
      case CODE.MINE:
        dispatch({ type: CLICK_MINE, row: rowIndex, cell: cellIndex });
    }
  }, []);

  return (
    <td style={getTdStyle(tableData[rowIndex][cellIndex])} onClick={onClickTd}>
      {getTdText(tableData[rowIndex][cellIndex])}
    </td>
  );
};

export default Td;
