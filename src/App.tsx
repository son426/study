import { useState } from "react";
import styled, { keyframes } from "styled-components";

function App() {
  const [username, setUsername] = useState("");

  const onChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };

  const onSubmitForm = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(username);
    setUsername("");
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input
          onChange={onChangeInput}
          value={username}
          type="text"
          placeholder="username"
        />
        <button>제출</button>
      </form>
    </div>
  );
}

export default App;
