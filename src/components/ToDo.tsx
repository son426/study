function ToDo() {
  return <></>;
}

export default ToDo;

// import React from "react";
// import { useRecoilValue, useSetRecoilState } from "recoil";
// import { IToDo, toDoSelector, toDoState } from "../atoms";

// function ToDo({ text, category, id }: IToDo) {
//   const setToDos = useSetRecoilState(toDoState);
//   const toDoASDF = useRecoilValue(toDoSelector);

//   const onClick = (newCategory: IToDo["category"]) => {
//     setToDos((oldToDos) => {
//       console.log(oldToDos);
//       const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
//       const oldToDo = oldToDos[targetIndex];
//       const newToDo = { text, id, category: newCategory };
//       return [
//         ...oldToDos.slice(0, targetIndex),
//         newToDo,
//         ...oldToDos.slice(targetIndex + 1),
//       ];
//     });
//   };

//   return (
//     <li>
//       <span>{text}</span>
//       {category !== "DOING" && (
//         <button onClick={() => onClick("DOING")}>Doing</button>
//       )}
//       {category !== "TO_DO" && (
//         <button onClick={() => onClick("TO_DO")}>To do</button>
//       )}
//       {category !== "DONE" && (
//         <button onClick={() => onClick("DONE")}>Done</button>
//       )}
//     </li>
//   );

//   //   const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//   //     const {
//   //       currentTarget: { name },
//   //     } = event;
//   //     console.log("i wanna to ", name);
//   //   };

//   //   return (
//   //     <li>
//   //       <span>{text}</span>
//   //       {category !== "DOING" && (
//   //         <button name="DOING" onClick={onClick}>
//   //           Doing
//   //         </button>
//   //       )}
//   //       {category !== "TO_DO" && (
//   //         <button name="TO_DO" onClick={onClick}>
//   //           To do
//   //         </button>
//   //       )}
//   //       {category !== "DONE" && (
//   //         <button name="DONE" onClick={onClick}>
//   //           Done
//   //         </button>
//   //       )}
//   //     </li>
//   //   );
// }

// export default ToDo;
