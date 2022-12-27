import { atom, selector } from "recoil";

interface ITodoState {
  [key: string]: string[];
}

export const toDoState = atom<ITodoState>({
  key: "toDo",
  default: {
    TO_DO: ["a", "b"],
    DOING: ["c", "d", "e"],
    DONE: ["f"],
    BONUS: ["1", "2", "3"],
  },
});
