import React from "react";
import ReactDOM from "react-dom";
import { useCallback, useState, useEffect, useRef } from "react";

import Tr from "./Tr";

const Table = () => {
  const [status, setStatus] = useState("O");

  return (
    <>
      <div>
        <Tr status={status} />
      </div>
      <div>
        <Tr status={status} />
      </div>
      <div>
        <Tr status={status} />
      </div>
      <h3>차례 : {status}</h3>
    </>
  );
};

export default Table;
