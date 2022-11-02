const { useState, Component } = require("react");
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

class NumberBaseball_class extends Component {
  answerArray = getNumbers();
  answer = this.answerArray.join("");

  state = {
    value: "",
    tries: [],
    result: "",
  };

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.value === this.answer) {
      this.setState((prevState) => {
        return {
          result: "홈런",
          tries: [
            ...prevState.tries,
            { try: this.state.value, result: `홈런` },
          ],
          value: "",
        };
      });
    } else {
      if (this.state.tries.length < 5) {
        const tryArray = this.state.value.split("").map((v) => parseInt(v));
        let strike = 0;
        let ball = 0;
        for (let i = 0; i < 4; i++) {
          if (tryArray[i] == this.answerArray[i]) {
            strike++;
          } else if (this.answerArray.includes(tryArray[i])) {
            ball++;
          }
        }
        this.setState((prevState) => {
          return {
            tries: [
              ...prevState.tries,
              {
                try: this.state.value,
                result: `${strike}스트라이크 ${ball}볼`,
              },
            ],
            value: "",
            result: `${strike}스트라이크 ${ball}볼`,
          };
        });
      } else {
        alert("기회는 5번이다. 다시 처음부터 해라.");
        this.setState({
          tries: [],
          value: "",
        });
        this.answerArray = getNumbers();
      }
    }

    console.log(this.state.tries);
  };

  render() {
    return (
      <>
        <div>
          <h1>
            {this.state.tries.length === 0
              ? "[클래스]숫자야구 : 숫자 네자리를 입력하세요."
              : this.state.result}
          </h1>
          <form onSubmit={this.onSubmitForm}>
            <input value={this.state.value} onChange={this.onChangeInput} />
            <button>입력</button>
          </form>
        </div>
        <div>
          <p>{this.state.tries.length}</p>
        </div>
        <div>
          <ul>
            {this.state.tries.map((v, i) => {
              return <Try key={i} tryinfo={v} />;
            })}
          </ul>
        </div>
      </>
    );
  }
}

module.exports = NumberBaseball_class;
