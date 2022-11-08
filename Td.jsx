import React from "react";
import ReactDOM from "react-dom";
import { useCallback, useState, useEffect, useRef } from "react";

const onClickTd = (props) => {
  console.log(props.status);
  if (props.status === "O") console.log("O");
  else {
    console.log("X");
  }
};

const Td = (props) => {
  const [status, setStatus] = useState("O");
  const turn = useRef("");
  console.log(props);
  return (
    <>
      <div
        className="td"
        onClick={() => {
          onClickTd(props);
        }}
      ></div>
    </>
  );
};

export default Td;
