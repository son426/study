const { useState, Component } = require("react");
const React = require("react");
const ReactDOM = require("react-dom");

const Try = require("./Try");

class NumberBaseball extends Component {
  answerArray = [1, 3, 5, 7];
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
      this.setState({
        result: "홈런",
        tries: [...this.state.tries, { try: this.state.value, result: `홈런` }],
        value: "",
      });
    } else {
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
      this.setState({
        tries: [
          ...this.state.tries,
          { try: this.state.value, result: `${strike}스트라이크 ${ball}볼` },
        ],
        value: "",
        result: `${strike}스트라이크 ${ball}볼`,
      });
    }

    console.log(this.state.tries);
  };

  render() {
    return (
      <>
        <div>
          <h1>{this.state.result}</h1>
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

module.exports = NumberBaseball;
