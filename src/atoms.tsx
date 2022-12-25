import { atom, selector } from "recoil";

export interface ITodo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const todoState = atom<ITodo[]>({
  key: "toDo",
  default: [],
});

// export const toDoState = atom<IToDo[]>({
//   key: "toDo",
//   default: [],
// });

// export const categoryState = atom<"TO_DO" | "DOING" | "DONE">({
//   key: "category",
//   default: "TO_DO",
// });

// export const toDoSelector = selector({
//   key: "toDoSelector",
//   get: ({ get }) => {
//     const toDos = get(toDoState);
//     const category = get(categoryState);
//     return toDos.filter((toDo) => toDo.category === category);
//   },
// });
