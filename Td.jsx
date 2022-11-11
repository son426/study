import React from "react";

const Td = (props) => {
  const onClickTd = () => {
    let table = [...props.tableData];
    table[props.rowIndex][props.colIndex] = props.turn;
    props.setTableData(table); // 이렇게 바꾸면 안되지않나?
  };
  return (
    <td onClick={onClickTd}>
      {props.tableData[props.rowIndex][props.colIndex]}
    </td>
  );
};

export default Td;
