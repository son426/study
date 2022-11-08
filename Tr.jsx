import React from "react";
import ReactDOM from "react-dom";

import Td from "./Td";

const Tr = (props) => {
  return (
    <>
      <div className="tr">
        <Td status={props.status} /> <Td status={props.status} />{" "}
        <Td status={props.status} />
      </div>
    </>
  );
};

export default Tr;
