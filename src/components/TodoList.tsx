import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface ITodo {
  todo: string;
}

function TodoList() {
  const [todo, setTodo] = useState([0]);
  const [todos, setTodos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm();
  const onValid = (data: any) => {
    setTodo((todo) => [...todo, data.todo]);
    setTodos((todos) => [...todos, data.todo]);
    console.log(todos);
    setValue("todo", "");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register("todo", { required: true })} placeholder="todo" />
        <button>제출</button>
      </form>
      <hr />
      <ul>
        {todo?.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;

// import React from "react";
// import { useRecoilState, useRecoilValue } from "recoil";
// import { categoryState, toDoSelector, toDoState } from "../atoms";
// import CreateToDo from "./CreateToDo";
// import ToDo from "./ToDo";

// function ToDoList() {
//   // const toDos = useRecoilValue(toDoState);
//   // const [toDos, setToDos] = useRecoilState(toDoState);
//   // const value = useRecoilValue(toDoState);
//   // const modFn = useSetRecoilState(toDoState);

//   const toDos = useRecoilValue(toDoSelector);
//   const [category, setCategory] = useRecoilState(categoryState);

//   const onChange = (e: React.FormEvent<HTMLSelectElement>) => {
//     console.log(e.currentTarget.value);
//     setCategory(e.currentTarget.value as any);
//   };

//   return (
//     <div>
//       <select value={category} onChange={onChange}>
//         <option value="TO_DO">To Do</option>
//         <option value="DOING">Doing</option>
//         <option value="DONE">Done</option>
//       </select>
//       <CreateToDo />
//       <ul>
//         {toDos.map((toDo) => (
//           // <ToDo text={toDo.text} id={toDo.id} category={toDo.category} />
//           <ToDo key={toDo.id} {...toDo} />
//         ))}
//       </ul>
//       <hr />
//     </div>
//   );
// }

// export default ToDoList;
