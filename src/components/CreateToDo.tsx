import { useRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { todoState } from "../atoms";

interface IForm {
  todo: string;
}

function CreateToDo() {
  const [todos, setTodos] = useRecoilState(todoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  console.log(todos);
  const handleValid = (data: IForm) => {
    setTodos((oldTodos) => [
      ...oldTodos,
      { text: data.todo, category: "TO_DO", id: Date.now() },
    ]);
    console.log(todos);
    setValue("todo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("todo", { required: "please write todo" })}
        placeholder="todo"
      />
      <button>제출</button>
    </form>
  );
}

export default CreateToDo;

// import { useForm } from "react-hook-form";
// import {
//   atom,
//   useRecoilState,
//   useSetRecoilState,
//   useRecoilValue,
// } from "recoil";
// import { toDoState, categoryState } from "../atoms";

// interface IForm {
//   toDo: string;
// }

// function CreateToDo() {
//   const setToDos = useSetRecoilState(toDoState);
//   const category = useRecoilValue(categoryState);

//   const { register, handleSubmit, setValue } = useForm<IForm>();
//   const handleValid = (data: IForm) => {
//     // console.log(data.toDo);
//     setValue("toDo", "");
//     setToDos((oldToDos) => [
//       { text: data.toDo, category, id: Date.now() },
//       ...oldToDos,
//     ]);
//   };
//   return (
//     <form onSubmit={handleSubmit(handleValid)}>
//       <input
//         {...register("toDo", { required: "please write a toDo" })}
//         placeholder="Write a toDo"
//       />
//       <button>Add</button>
//     </form>
//   );
// }

// export default CreateToDo;
