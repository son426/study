import { atom, selector } from "recoil";

interface ITodoState {
  [key: string]: string[];
}

interface IBoardsState {
  boards?: string;
}

const toDoDefault = JSON.parse(localStorage.getItem("toDo") || "{}");

export const toDoState = atom<ITodoState>({
  key: "toDo",
  default: toDoDefault,
});

const boardsDefault = JSON.parse(localStorage.getItem("boards") || "[]");

export const boardsState = atom<any>({
  key: "boards",
  default: boardsDefault,
});
