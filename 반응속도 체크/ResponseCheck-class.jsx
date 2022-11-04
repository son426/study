const { useState, Component } = require("react");
const React = require("react");
const ReactDOM = require("react-dom");

class ResponseCheck_class extends Component {
  state = {
    text: "클릭해서 시작하세요",
    state: "waiting",
    result: [],
  };

  startTime;
  endTime;

  onClick = (e) => {
    const { text, state, result } = this.state;

    if (state === "waiting") {
      this.setState({ state: "ready", text: "녹색이 되면 누르세요." });
      setTimeout(() => {
        this.setState({ state: "now", text: "지금 클릭" });
        this.startTime = new Date();
      }, Math.random() * 1000 + 1000); // 시간 랜덤으로?
    } else if (state === "now") {
      this.endTime = new Date();
      this.setState((prevState) => {
        return {
          state: "waiting",
          text: "한번 더하기",
          result: [...prevState.result, this.endTime - this.startTime + "ms "],
        };
      });
    }
  };

  onClickReset = (e) => {
    this.setState({ result: [] });
  };

  render() {
    const { text, state, result } = this.state;
    return (
      <>
        <h1>[클래스]반응속도 테스트</h1>
        <div className={state} onClick={this.onClick}>
          <h3>{text}</h3>
          {state === "waiting" ? <h3>{result[result.length - 1]}</h3> : null}
        </div>
        <h3> 반응속도 : {result}</h3>
        <button onClick={this.onClickReset}>리셋</button>
      </>
    );
  }
}

module.exports = ResponseCheck_class;
