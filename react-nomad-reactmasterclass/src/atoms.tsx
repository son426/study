import { atom, selector } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}

export interface ITodoState {
  [key: string]: ITodo[];
}

// const toDoDefault = JSON.parse(localStorage.getItem("toDo") || "{}");

export const toDoState = atom<ITodoState>({
  key: "toDo",
  default: {
    TO_DO: [{ id: 1, text: "hello" }],
    DOING: [{ id: 2, text: "HI" }],
  },
});

interface IBoardsState {
  boards?: string;
}

const boardsDefault = JSON.parse(localStorage.getItem("boards") || "[]");

export const boardsState = atom<any>({
  key: "boards",
  default: boardsDefault,
});
