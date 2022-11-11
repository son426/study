import React, { useState, useCallback, useEffect } from "react";

import Table from "./Table";

const Tictactoe = () => {
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");
  const [tableData, setTableData] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [recentCell, setRecentCell] = useState([]);

  const onClickTable = useCallback(() => {
    console.log("turn : " + turn);
    console.log("tableData : " + tableData);
  });

  const onClickBtn = useCallback(() => {
    setTurn(winner === "O" ? "O" : "X");
    setWinner("");
    setTableData([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  });

  useEffect(() => {
    console.log("useEffect");
    if (
      (tableData[0][0] === turn &&
        tableData[0][1] === turn &&
        tableData[0][2] === turn) ||
      (tableData[1][0] === turn &&
        tableData[1][1] === turn &&
        tableData[1][2] === turn) ||
      (tableData[2][0] === turn &&
        tableData[2][1] === turn &&
        tableData[2][2] === turn) ||
      (tableData[0][0] === turn &&
        tableData[1][0] === turn &&
        tableData[2][0] === turn) ||
      (tableData[0][1] === turn &&
        tableData[1][1] === turn &&
        tableData[2][1] === turn) ||
      (tableData[0][2] === turn &&
        tableData[1][2] === turn &&
        tableData[2][2] === turn) ||
      (tableData[0][0] === turn &&
        tableData[1][1] === turn &&
        tableData[2][2] === turn) ||
      (tableData[0][2] === turn &&
        tableData[1][1] === turn &&
        tableData[2][0] === turn)
    ) {
      console.log("끝");
      setWinner(turn);
    } else {
      setTurn(turn === "O" ? "X" : "O");
    }
  }, [tableData]);

  // useEffect(() => {
  //   if (
  //     (tableData[0][0] === turn &&
  //       tableData[0][1] === turn &&
  //       tableData[0][2] === turn) ||
  //     (tableData[1][0] === turn &&
  //       tableData[1][1] === turn &&
  //       tableData[1][2] === turn) ||
  //     (tableData[2][0] === turn &&
  //       tableData[2][1] === turn &&
  //       tableData[2][2] === turn) ||
  //     (tableData[0][0] === turn &&
  //       tableData[1][0] === turn &&
  //       tableData[2][0] === turn) ||
  //     (tableData[0][1] === turn &&
  //       tableData[1][1] === turn &&
  //       tableData[2][1] === turn) ||
  //     (tableData[0][2] === turn &&
  //       tableData[1][2] === turn &&
  //       tableData[2][2] === turn) ||
  //     (tableData[0][0] === turn &&
  //       tableData[1][1] === turn &&
  //       tableData[2][2] === turn) ||
  //     (tableData[0][2] === turn &&
  //       tableData[1][1] === turn &&
  //       tableData[2][0] === turn)
  //   ) {
  //     console.log("끝");
  //     setWinner(turn); // 얘는 비동기니까 이렇게 처리하면 안되나?
  //     setTurn(winner === "O" ? "X" : "O");
  //     setTableData([
  //       ["", "", ""],
  //       ["", "", ""],
  //       ["", "", ""],
  //     ]);
  //   } else {
  //     setTurn(turn === "O" ? "X" : "O");
  //   }
  // }, [recentCell]);

  return (
    <>
      {console.log("render")}
      <Table
        tableData={tableData}
        onClick={onClickTable}
        setTableData={setTableData}
        turn={turn}
        setTurn={setTurn}
      />

      <h4>승리 : {winner === "" ? null : winner + "가 승리했습니다."}</h4>
      <h4>차례 : {turn} 이 둘 차례입니다.</h4>
      {winner === "" ? null : <button onClick={onClickBtn}>다시하기</button>}
    </>
  );
};

export default Tictactoe;
