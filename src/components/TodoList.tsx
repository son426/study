import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

interface IForm {
  toDo: string;
}

interface IToDo {
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
  id: number;
}

function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  // const value = useRecoilValue(toDoState);
  // const modFn = useSetRecoilState(toDoState);

  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    console.log(data.toDo);
    setValue("toDo", "");
    setToDos((oldToDos) => [
      { text: data.toDo, category: "TO_DO", id: Date.now() },
      ...oldToDos,
    ]);
  };
  console.log(toDos);
  return (
    <div>
      <h1>To Dos</h1>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", { required: "please write a toDo" })}
          placeholder="Write a toDo"
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos?.map((item) => (
          <li>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;

// 로그인 창 코드

// interface IForm {
//   email: string;
//   userName: string;
//   password1: string;
//   password2: string;
//   extraError?: string;
// }

// function ToDoList() {
//   const { register, handleSubmit, formState, setError, setValue } =
//     useForm<IForm>({
//       defaultValues: {
//         email: "@naver.com",
//       },
//     });
//   const onValid = (data: IForm) => {
//     if (data.password1 !== data.password2) {
//       setError(
//         "password2",
//         { message: "비밀번호가 다릅니다." },
//         { shouldFocus: true }
//       );
//     } else {
//       setValue("email", "@naver.com");
//       setValue("userName", "");
//       setValue("password1", "");
//       setValue("password2", "");
//     }
//     // setError("extraError", { message: "server is offline" });
//   };
//   console.log(formState.errors);
//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit(onValid)}
//         style={{ display: "flex", flexDirection: "column" }}
//       >
//         <input
//           {...register("email", {
//             required: "write here",
//             pattern: {
//               value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//               message: "only naver.com email",
//             },
//           })}
//           placeholder="Email"
//         />
//         <span>{formState.errors.email?.message}</span>
//         <input
//           {...register("userName", {
//             required: "write here",
//             validate: (value) =>
//               value.includes("nico") ? "no nicos allowed" : true,
//           })}
//           placeholder="User Name"
//         />
//         <span>{formState.errors.userName?.message}</span>
//         <input
//           {...register("password1", {
//             required: "password is required",
//             minLength: {
//               value: 5,
//               message: "your password is too short",
//             },
//           })}
//           placeholder="Password"
//         />
//         <span>{formState.errors.password1?.message}</span>
//         <input
//           {...register("password2", {
//             required: "password is required",
//             minLength: {
//               value: 5,
//               message: "your password is too short",
//             },
//           })}
//           placeholder="Password"
//         />
//         <span>{formState.errors.password2?.message}</span>
//         <button>Add</button>
//         <span>{formState.errors.extraError?.message}</span>
//       </form>
//     </div>
//   );
// }
