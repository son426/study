import React from "react";

import { SET_TURN, CELL_CLICK } from "./Tictactoe";

const Td = (props) => {
  const onClickTd = () => {
    props.dispatch({
      type: CELL_CLICK,
      row: props.rowIndex,
      col: props.colIndex,
    });

    // let table = [...props.tableData];
    // table[props.rowIndex][props.colIndex] = props.turn;
    // props.setTableData(table); // 이렇게 바꾸면 안되지않나?
  };
  return (
    <td onClick={onClickTd}>
      {props.tableData[props.rowIndex][props.colIndex]}
    </td>
  );
};

export default Td;
