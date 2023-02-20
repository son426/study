import React, { useContext } from "react";
import { TableContext } from "./MineSearch";

import Td from "./Td";

const Tr = (props) => {
  const { tableData } = useContext(TableContext);
  return (
    <tr>
      {tableData[0] &&
        Array(tableData[0].length)
          .fill()
          .map((td, i) => (
            <Td key={i} rowIndex={props.rowIndex} cellIndex={i} />
          ))}
    </tr>
  );
};

export default Tr;
