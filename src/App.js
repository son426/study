import userEvent from "@testing-library/user-event";
import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    setTodos((currentArray) => [todo, ...currentArray]);
    event.target[0].value = "";
  };

  const onChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <div>
      <h3>To Do List ({todos.length})</h3>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" placeholder="입력하세요" />
        <button>저장</button>
      </form>
      <hr />
      {todos.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </div>
  );
}

export default App;
