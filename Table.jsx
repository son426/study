import React from "react";
import ReactDOM from "react-dom";
import { useCallback, useState, useEffect, useRef } from "react";

import Tr from "./Tr";

const Table = ({ onClick, tableData }) => {
  return (
    <table onClick={onClick}>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => (
          <Tr rowData={tableData[i]} />
        ))}
    </table>
  );
};

export default Table;
