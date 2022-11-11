import React from "react";
import Tr from "./Tr";

const Table = (props) => {
  return (
    <table onClick={props.onClick}>
      <tbody>
        {Array(props.tableData.length)
          .fill()
          .map((tr, i) => {
            return (
              <Tr
                key={i}
                tableData={props.tableData}
                rowIndex={i}
                setTableData={props.setTableData}
                turn={props.turn}
                setTurn={props.setTurn}
              />
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
