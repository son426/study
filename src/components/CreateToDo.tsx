import { useForm } from "react-hook-form";
import {
  atom,
  useRecoilState,
  useSetRecoilState,
  useRecoilValue,
} from "recoil";
import { toDoState, categoryState } from "../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);

  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    // console.log(data.toDo);
    setValue("toDo", "");
    setToDos((oldToDos) => [
      { text: data.toDo, category, id: Date.now() },
      ...oldToDos,
    ]);
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", { required: "please write a toDo" })}
        placeholder="Write a toDo"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
