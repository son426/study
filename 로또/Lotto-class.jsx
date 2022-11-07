const { useState, Component } = require("react");
const React = require("react");
const ReactDOM = require("react-dom");

const LottoNum = require("./LottoNum");

function getWinNumbers() {
  console.log("getWinNumbers");
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  console.log(candidate);

  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);

  return [...winNumbers, bonusNumber];
}

class Lotto_class extends Component {
  state = {
    winNumbers: getWinNumbers(),
    winBalls: [],
    bonus: null,
    redo: false,
  };

  timeout = [];
  ballPick = (i) =>
    this.setState((prevState) => {
      return {
        winBalls: [...prevState.winBalls, this.state.winNumbers[i]],
      };
    });

  runTimeouts = () => {
    for (let i = 0; i < this.state.winNumbers.length - 1; i++) {
      this.timeout[i] = setTimeout(() => {
        this.ballPick(i);
      }, 1000 * (i + 1));
    }
    setTimeout(() => {
      this.setState((prevState) => {
        return {
          bonus: this.state.winNumbers[this.state.winNumbers.length - 1],
          redo: true,
        };
      });
    }, this.state.winNumbers.length * 1000);
  };

  componentDidMount() {
    console.log("didMount");
    this.runTimeouts();
  }

  componentDidUpdate() {
    console.log("didUpdate");
    if (this.state.winBalls.length === 0) {
      this.runTimeouts();
    }
  }

  componentWillUnmount() {
    this.timeout.forEach((v) => {
      clearTimeout(v);
    });
    clearTimeout(this.timeout);
  }

  onClickRedo = () => {
    this.setState({
      winNumbers: getWinNumbers(),
      winBalls: [],
      bonus: null,
      redo: false,
    });
    this.timeout = [];
  };

  background;

  render() {
    return (
      <>
        <div>당첨숫자</div>
        <div className="lotto">
          {this.state.winBalls.map((v) => {
            return <LottoNum key={v} num={v} />;
          })}
        </div>
        <div>보너스 숫자!</div>
        <div className="lotto">
          {this.state.bonus ? <LottoNum num={this.state.bonus} /> : null}
        </div>
        {this.state.redo ? (
          <button onClick={this.onClickRedo}>한번 더</button>
        ) : null}
      </>
    );
  }
}

module.exports = Lotto_class;
