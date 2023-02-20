const { useState, Component, useRef } = require("react");
const React = require("react");
const ReactDOM = require("react-dom");

const ResponseCheck_hooks = () => {
  const [text, setText] = useState("클릭해서 시작하세요");
  const [state, setState] = useState("waiting");
  const [result, setResult] = useState([]);

  const startTime = useRef();
  const endTime = useRef();

  const onClick = () => {
    if (state === "waiting") {
      setState("ready");
      setText("녹색이 되면 누르세요");
      setTimeout(() => {
        startTime.current = new Date();
        setState("now");
        setText("지금 눌러!!");
      }, Math.random() * 1000 + 1000);
    } else if (state === "now") {
      endTime.current = new Date();
      setState("waiting");
      setText("한번 더하기");
      setResult((prevState) => {
        return [...prevState, endTime.current - startTime.current + "ms "];
      });
    }
  };

  const onClickReset = () => {
    setResult([]);
  };

  return (
    <>
      <h1>[훅스]반응속도 테스트</h1>
      <div className={state} onClick={onClick}>
        <h3>{text}</h3>
        {state === "waiting" ? <h3>{result[result.length - 1]}</h3> : null}
      </div>
      <h3>반응속도 : {result}</h3>
      <button onClick={onClickReset}>리셋</button>
    </>
  );
};

module.exports = ResponseCheck_hooks;
