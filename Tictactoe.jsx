import React, { useState, useCallback, useEffect } from "react";

const Tictactoe = () => {
  const [turn, setTurn] = useState("O");
  const [winner, setWinner] = useState("");
  const [tableData, setTableData] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [recentCell, setRecentCell] = useState([]);

  const onClickTd = useCallback(([row, col]) => {
    console.log("onclicktd");
    console.log(row, col);
    console.log(tableData);
    let table = tableData;
    table[row][col] = turn;
    setTableData(table); // 이렇게 바꾸면 안되지않나?
    setRecentCell([row, col]); // 이렇게 바꾸면 안되지않나?
  });

  useEffect(() => {
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
      setWinner(turn); // 얘는 비동기니까 이렇게 처리하면 안되나?
      setTurn(winner === "O" ? "X" : "O");
      setTableData([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ]);
    } else {
      setTurn(turn === "O" ? "X" : "O");
    }
  }, [recentCell]);

  return (
    <>
      {console.log("render")}
      <table>
        <tbody>
          {Array(tableData.length)
            .fill()
            .map((value1, row) => {
              console.log(tableData[row]);
              return (
                <tr>
                  {Array(tableData[row].length)
                    .fill()
                    .map(
                      (value2, col) => {
                        console.log(tableData[row][col]);
                        return (
                          <td
                            onClick={() => {
                              onClickTd([row, col]);
                            }}
                          ></td>
                        );
                      }
                      // <td
                      //   onClick={(e) => {
                      //     onClickTd([row, col]);
                      //   }}
                      // ></td>
                    )}
                </tr>
              );
            })}
        </tbody>
      </table>

      {/* {Array(tableData.length)
                  .fill()
                  .map((value, col) => 
                  <td onClick={(e)=>{
                    onClickTd([row,col], e);    
                  }}></td>
              </tr> */}
      {/* <table>
        <tbody>
          <tr>
            <td
              onClick={(e) => {
                onClickTd([0, 0], e);
              }}
            ></td>
            <td
              onClick={(e) => {
                onClickTd([0, 1], e);
              }}
            ></td>
            <td
              onClick={(e) => {
                onClickTd([0, 2], e);
              }}
            ></td>
          </tr>
          <tr>
            <td
              onClick={(e) => {
                onClickTd([1, 0], e);
              }}
            ></td>
            <td
              onClick={(e) => {
                onClickTd([1, 1], e);
              }}
            ></td>
            <td
              onClick={(e) => {
                onClickTd([1, 2], e);
              }}
            ></td>
          </tr>
          <tr>
            <td
              onClick={(e) => {
                onClickTd([2, 0], e);
              }}
            ></td>
            <td
              onClick={(e) => {
                onClickTd([2, 1], e);
              }}
            ></td>
            <td
              onClick={(e) => {
                onClickTd([2, 2], e);
              }}
            ></td>
          </tr>
        </tbody>
      </table> */}
      <h4>승리 : {winner === "" ? null : winner + "가 승리했습니다."}</h4>

      <h4>차례 : {turn} 이 둘 차례입니다.</h4>
    </>
  );
};

export default Tictactoe;
