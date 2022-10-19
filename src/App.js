import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  useEffect(() => {
    console.log("i run once");
  }, []);

  useEffect(() => {
    console.log("키워드변화");
  }, [keyword]);

  useEffect(() => {
    console.log("카운터변화");
  }, [counter]);

  useEffect(() => {
    console.log("둘 중 하나라도 변화");
  }, [keyword, counter]);

  // cleanup func

  const [showing, setShowing] = useState(false);
  const cleanUp = () => {
    setShowing((prev) => !prev);
  };

  const Hello = () => {
    useEffect(() => {
      console.log("hi");
      return () => console.log("bye");
    }, []);

    return <h1>Hello</h1>;
  };

  return (
    <div>
      <div>
        <input onChange={onChange} type="text" placeholder="검색창" />
        <h1>{counter}</h1>
        <button onClick={onClick}>Click me!!</button>
      </div>
      <hr />
      <div>
        {showing ? <Hello /> : null}
        <button onClick={cleanUp}>{showing ? "hide" : "show"}</button>
      </div>
    </div>
  );
}

export default App;
