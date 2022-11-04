const { useState, Component } = require("react");
const React = require("react");
const ReactDOM = require("react-dom");

// ✊✌✋

class RSP_class extends Component {
  state = {
    icon: "✊",
    result: "",
    score: 0,
  };

  interval;

  changeHand = () => {
    if (this.state.icon === "✊") {
      this.setState({ icon: "✌" });
    } else if (this.state.icon === "✌") {
      this.setState({ icon: "✋" });
    } else if (this.state.icon === "✋") {
      this.setState({ icon: "✊" });
    }
  };

  componentDidMount() {
    this.interval = setInterval(this.changeHand, 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onClick = (e) => {
    if (e.target.innerText === "바위") {
      switch (this.state.icon) {
        case "✊":
          this.setState((prevState) => {
            return { result: "비김" };
          });
          break;
        case "✌":
          this.setState((prevState) => {
            return { result: "이김", score: prevState.score + 1 };
          });
          break;
        case "✋":
          this.setState((prevState) => {
            return { result: "짐", score: prevState.score - 1 };
          });
      }
    } else if (e.target.innerText === "가위") {
      switch (this.state.icon) {
        case "✊":
          this.setState((prevState) => {
            return { result: "짐", score: prevState.score - 1 };
          });
          break;
        case "✌":
          this.setState((prevState) => {
            return { result: "비김" };
          });
          break;
        case "✋":
          this.setState((prevState) => {
            return { result: "이김", score: prevState.score + 1 };
          });
      }
    } else {
      switch (this.state.icon) {
        case "✊":
          this.setState((prevState) => {
            return { result: "이김", score: prevState.score + 1 };
          });
          break;
        case "✌":
          this.setState((prevState) => {
            return { result: "짐", score: prevState.score - 1 };
          });
          break;
        case "✋":
          this.setState((prevState) => {
            return { result: "비김" };
          });
      }
    }
    clearInterval(this.interval);
    setTimeout(() => {
      this.interval = setInterval(this.changeHand, 100);
    }, 1000);
  };

  render() {
    const { icon, result, score } = this.state;
    return (
      <>
        <div style={{ fontSize: "200px" }}>{icon}</div>
        <button onClick={this.onClick}>바위</button>
        <button onClick={this.onClick}>가위</button>
        <button onClick={this.onClick}>보</button>
        <h3>결과 : {result}</h3>
        <h3>점수 : {score}</h3>
      </>
    );
  }
}

module.exports = RSP_class;
