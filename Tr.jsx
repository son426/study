import React from "react";
import ReactDOM from "react-dom";

import Td from "./Td";

const Tr = ({ rowData }) => {
  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((td) => (
          <Td>{""}</Td>
        ))}
    </tr>
  );
};

export default Tr;
