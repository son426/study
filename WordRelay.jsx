const { useState, useRef } = require("react");
const React = require("react");
const ReactDOM = require("react-dom");
const { Component } = React;

const { createRoot } = require("react-dom/client");

// class WordRelay extends Component {
//   state = {
//     word: "손채환",
//     value: "",
//     result: "",
//   };

//   render() {
//     const onChange = (e) => {
//       this.setState({ value: e.target.value });
//     };

//     const onSubmit = (e) => {
//       e.preventDefault();
//       if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
//         this.setState({
//           word: this.state.value,
//           value: "",
//           result: "딩동댕",
//         });
//       } else {
//         this.setState({
//           value: "",
//           result: "땡",
//         });
//       }
//     };

//     return (
//       <>
//         <div>{this.state.word}</div>
//         <div>
//           <form onSubmit={onSubmit}>
//             <input type="text" value={this.state.value} onChange={onChange} />
//             <button>입력</button>
//           </form>
//         </div>
//         <div>{this.state.result}</div>
//       </>
//     );
//   }
// }

const WordRelay = () => {
  const [word, setWord] = useState("손채환");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onChange = (e) => {
    setValue(e.target.value);
    console.log({ value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (value.length < 3) {
      setResult("세글자 이상 입력해주세요");
      setValue("");
      console.dir(e.currentTarget);
      e.currentTarget[0].style.backgroundColor = "tomato";
      return;
    }
    if (word[word.length - 1] === value[0]) {
      setWord(value);
      setValue("");
      setResult("딩동댕");
      inputRef.current.focus();
      e.currentTarget[0].style.backgroundColor = "white";
    } else {
      setValue("");
      setResult("떙");
      inputRef.current.focus();
      e.currentTarget[0].style.backgroundColor = "tomato";
    }
  };

  return (
    <>
      <div>{word}</div>
      <div>
        <form onSubmit={onSubmit}>
          <input ref={inputRef} type="text" value={value} onChange={onChange} />
          <button>입력</button>
        </form>
      </div>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;
