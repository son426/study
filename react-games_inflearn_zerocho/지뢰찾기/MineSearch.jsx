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
  halted: false,
});

const initialState = {
  tableData: [],
  halted: false,
};

const plantMine = (row, cell, mine) => {
  console.log(row, cell, mine);
  const candidate = Array(row * cell)
    .fill()
    .map((arr, i) => {
      return i;
    });
  // 0부터 99까지 칸들중에서 지뢰갯수만큼 뽑아놓은거
  const shuffle = [];
  while (candidate.length > row * cell - mine) {
    const chosen = candidate.splice(
      Math.floor(Math.random() * candidate.length),
      1
    )[0];
    shuffle.push(chosen);
  }
  // 이차원 배열 만드는 코드
  const data = [];
  for (let i = 0; i < row; i++) {
    const rowData = [];
    data.push(rowData);
    for (let j = 0; j < cell; j++) {
      rowData.push(CODE.NORMAL);
    }
  }

  // (ver,hor) 찾아서 마인 심는다.
  for (let k = 0; k < shuffle.length; k++) {
    const ver = Math.floor(shuffle[k] / cell);
    const hor = shuffle[k] % cell;
    data[ver][hor] = CODE.MINE;
  }

  console.log(data);
  return data;
};

export const START_GAME = "START_GAME";
export const OPEN_CELL = "OPEN_CELL";
export const CLICK_MINE = "CLICK_MINE";
export const FLAG_CELL = "FLAG_CELL";
export const QUESTION_CELL = "QUESTION_CELL";
export const NORMALIZE_CELL = "NORMALIZE_CELL";

const reducer = (state, action) => {
  switch (action.type) {
    case START_GAME:
      console.log("START");
      return {
        ...state,
        tableData: plantMine(action.row, action.cell, action.mine),
        halted: false,
      };
    case OPEN_CELL: {
      console.log("OPEN_CELL");
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      // 근처 지뢰갯수 표시하기
      let around = [];

      if (tableData[action.row - 1]) {
        around = around.concat(
          tableData[action.row - 1][action.cell - 1],
          tableData[action.row - 1][action.cell],
          tableData[action.row - 1][action.cell + 1]
        );
      }
      if (tableData[action.row + 1]) {
        around = around.concat(
          tableData[action.row + 1][action.cell - 1],
          tableData[action.row + 1][action.cell],
          tableData[action.row + 1][action.cell + 1]
        );
      }
      around = around.concat(
        tableData[action.row][action.cell - 1],
        tableData[action.row][action.cell + 1]
      );
      let count = around.filter((v) =>
        [CODE.MINE, CODE.FLAG_MINE, CODE.QUESTION_MINE].includes(v)
      ).length;
      console.log(around, count);
      tableData[action.row][action.cell] = count;
      return {
        ...state,
        tableData,
      };
    }
    case CLICK_MINE: {
      console.log("CLICK_MINE");
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      tableData[action.row][action.cell] = CODE.CLICKED_MINE;
      return {
        ...state,
        tableData,
        halted: true,
      };
    }
    case FLAG_CELL: {
      console.log("FLAG_CELL");
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      if (tableData[action.row][action.cell] === CODE.MINE) {
        tableData[action.row][action.cell] = CODE.FLAG_MINE;
      } else {
        tableData[action.row][action.cell] = CODE.FLAG;
      }
      return {
        ...state,
        tableData,
      };
    }
    case QUESTION_CELL: {
      console.log("QUESTION_CELL");
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      if (tableData[action.row][action.cell] === CODE.FLAG_MINE) {
        tableData[action.row][action.cell] = CODE.QUESTION_MINE;
      } else {
        tableData[action.row][action.cell] = CODE.QUESTION;
      }
      return {
        ...state,
        tableData,
      };
    }
    case NORMALIZE_CELL: {
      console.log("NORMALIZE_CELL");
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      if (tableData[action.row][action.cell] === CODE.QUESTION_MINE) {
        tableData[action.row][action.cell] = CODE.MINE;
      } else {
        tableData[action.row][action.cell] = CODE.NORMAL;
      }
      return {
        ...state,
        tableData,
      };
    }
    default:
      return state;
  }
};

const MineSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(
    () => ({
      tableData: state.tableData,
      dispatch,
      halted: state.halted,
    }),
    [state.tableData, state.halted]
  ); // dispatch는 안바뀌어서 안넣어도됨. 바뀌는 목록에

  return (
    <TableContext.Provider value={value}>
      <h1>지뢰찾기</h1>
      <Table />
    </TableContext.Provider>
  );
};

export default MineSearch;
