import React from "react";
import { useCallback, useState, useContext } from "react";
import { START_GAME } from "./MineSearch";
import { TableContext } from "./MineSearch";
import Tr from "./Tr";

const Table = () => {
  const [row, setRow] = useState(10);
  const [cell, setCell] = useState(10);
  const [mine, setMine] = useState(20);
  const { tableData, dispatch } = useContext(TableContext);

  const onClickBtn = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({ type: START_GAME, row: row, cell: cell, mine: mine });
    },
    [row, cell, mine]
  );

  const onChangeRow = useCallback(
    (e) => {
      setRow(e.target.value);
    },
    [row]
  );
  const onChangeCell = useCallback(
    (e) => {
      setCell(e.target.value);
    },
    [cell]
  );
  const onChangeMine = useCallback(
    (e) => {
      setMine(e.target.value);
    },
    [mine]
  );

  return (
    <>
      <form>
        <input type="number" value={row} onChange={onChangeRow} />
        <input type="number" value={cell} onChange={onChangeCell} />
        <input type="number" value={mine} onChange={onChangeMine} />
        <button onClick={onClickBtn}>버튼</button>
      </form>
      <table>
        <tbody>
          {Array(tableData.length)
            .fill()
            .map((tr, i) => (
              <Tr key={i} rowIndex={i} />
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
