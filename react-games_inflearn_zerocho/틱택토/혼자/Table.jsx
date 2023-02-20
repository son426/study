import React from "react";
import Tr from "./Tr";

const Table = (props) => {
  return (
    <table>
      <tbody>
        {Array(props.tableData.length)
          .fill()
          .map((tr, i) => {
            return (
              <Tr
                key={i}
                tableData={props.tableData}
                rowIndex={i}
                dispatch={props.dispatch}
              />
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
