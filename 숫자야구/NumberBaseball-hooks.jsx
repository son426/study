// import { useState } from "react";
// import React from "react";
// import ReactDOM from "react-dom";

// import Try from "./Try";

const { useState } = require("react");
const React = require("react");
const ReactDOM = require("react-dom");

const Try = require("./Try");

function getNumbers() {
  // 숫자 네개를 겹치지 않고 뽑는 함수.
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }

  return array;
}

const NumberBaseball_hooks = () => {
  const [value, setValue] = useState("");
  const [tries, setTries] = useState([]);
  const [result, setResult] = useState("");

  let answerArray = getNumbers();
  let answer = answerArray.join("");

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (value === answer) {
      setResult("홈런");
      setTries((prevState) => {
        return [...prevState.tries, { try: value, result: "홈런" }];
      });
      setValue("");
    } else {
      if (tries.length < 5) {
        const tryArray = value.split("").map((v) => parseInt(v));
        let strike = 0;
        let ball = 0;
        for (let i = 0; i < 4; i++) {
          if (tryArray[i] === answerArray[i]) {
            strike++;
          } else if (answerArray.includes(tryArray[i])) {
            ball++;
          }
        }
        setResult(`${strike}스트라이크 ${ball}볼`);
        setTries((prevState) => {
          return [
            ...prevState,
            { try: value, result: `${strike}스트라이크 ${ball}볼` },
          ];
        });
        setValue("");
      } else {
        alert("기회는 5번이다. 다시 처음부터 해라.");
        setTries([]);
        setValue("");
        answerArray = getNumbers();
      }
    }
  };

  return (
    <>
      <div>
        <h1>
          {tries.length === 0
            ? "[훅스]숫자야구 : 숫자 네자리를 입력하세요."
            : result}
        </h1>
        <form onSubmit={onSubmitForm}>
          <input value={value} onChange={onChangeInput} />
          <button>입력</button>
        </form>
      </div>
      <div>
        <p>{tries.length}</p>
      </div>
      <div>
        <ul>
          {tries.map((v, i) => {
            return <Try key={i} tryinfo={v} />;
          })}
        </ul>
      </div>
    </>
  );
};

module.exports = NumberBaseball_hooks;
