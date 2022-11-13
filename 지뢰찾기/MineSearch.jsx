import React, {
  useReducer,
  useState,
  useCallback,
  createContext,
  useMemo,
} from "react";
import Table from "./Table";

export const CODE = {
  MINE: -7,
  NORMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  CLICKED_MINE: -6,
  OPENED: 0, // 0이상이면 다 OPENED
};

export const TableContext = createContext({
  tableData: [],
  dispatch: () => {},
});

const initialState = {
  tableData: [],
  row: 0,
  cell: 0,
  mine: 0,
};

export const START_GAME = "START_GAME";

const reducer = (state, action) => {
  switch (action.type) {
    case "TEST":
      console.log("test");
      console.log(action.row);
      console.log(action.cell);
      console.log(action.mine);
      return;
    case START_GAME:
      console.log("START");
      return;
  }
};

const MineSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state.tableData);

  const value = useMemo(() => {
    tableData: state.tableData;
    dispatch;
  }, [state.tableData, dispatch]); // dispatch는 안바뀌어서 안넣어도됨. 바뀌는 목록에

  return (
    <TableContext.Provider value={value}>
      <h1>지뢰찾기</h1>
      <Table />
    </TableContext.Provider>
  );
};

export default MineSearch;
