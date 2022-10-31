const React = require("react");
const ReactDOM = require("react-dom");
const { Component } = React;

const { createRoot } = require("react-dom/client");

class WordRelay extends Component {
  state = {
    word: "손채환",
    value: "",
    result: "",
  };

  render() {
    const onChange = (e) => {
      this.setState({ value: e.target.value });
    };

    const onSubmit = (e) => {
      e.preventDefault();
      if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
        this.setState({
          word: this.state.value,
          value: "",
          result: "딩동댕",
        });
      } else {
        this.setState({
          value: "",
          result: "땡",
        });
      }
    };

    return (
      <>
        <div>{this.state.word}</div>
        <div>
          <form onSubmit={onSubmit}>
            <input type="text" value={this.state.value} onChange={onChange} />
            <button>입력</button>
          </form>
        </div>
        <div>{this.state.result}</div>
      </>
    );
  }
}

module.exports = WordRelay;
