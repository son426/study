import React from "react";

import Td from "./Td";

const Tr = (props) => {
  return (
    <tr>
      {Array(props.tableData[props.rowIndex].length)
        .fill()
        .map((tr, i) => {
          return (
            <Td
              tableData={props.tableData}
              key={i}
              rowIndex={props.rowIndex}
              colIndex={i}
              dispatch={props.dispatch}
            />
          );
        })}
    </tr>
  );
};

export default Tr;
