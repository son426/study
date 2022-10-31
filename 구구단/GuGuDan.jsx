const React = require("react");
const ReactDOM = require("react-dom");

const { useState } = React;

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult(value + "! 정답입니다."),
        setFirst(Math.ceil(Math.random() * 9)),
        setSecond(Math.ceil(Math.random() * 9)),
        setValue("");
    } else {
      setResult(value + "는 오답입니다...");
      setValue("");
    }
  };

  return (
    <div>
      <div>
        {first}곱하기{second}는?
      </div>
      <form onSubmit={onSubmit}>
        <input type="number" value={value} onChange={onChange} />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </div>
  );
};

module.exports = GuGuDan;
