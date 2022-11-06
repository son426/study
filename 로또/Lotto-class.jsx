const { useState, Component } = require("react");
const React = require("react");
const ReactDOM = require("react-dom");

function getWinNumbers() {
  console.log("getWinNumbers");
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];

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

  componentDidMount() {
    for (let i = 0; i < this.state.winNumbers.length - 1; i++) {
      setTimeout(() => {
        this.setState((prevState) => {
          return {
            winBalls: [...prevState.winBalls, this.state.winNumbers[i]],
          };
        });
      }, 1000 * i);
    }
    setTimeout(() => {
      this.setState((prevState) => {
        return {
          bonus: this.state.winNumbers[this.state.winNumbers.length - 1],
          redo: true,
        };
      });
    }, (this.state.winNumbers.length - 1) * 1000);
    console.log(this.state.winBalls);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  componentWillUnmount() {
    // setTimeout 정리해줘야함.
  }

  onClickRedo = () => {
    this.setState({
      winNumbers: getWinNumbers(),
      winBalls: [],
      bonus: null,
      redo: false,
    });
    for (let i = 0; i < this.state.winNumbers.length - 1; i++) {
      setTimeout(() => {
        this.setState((prevState) => {
          return {
            winBalls: [...prevState.winBalls, this.state.winNumbers[i]],
          };
        });
      }, 1000 * i);
    }
    setTimeout(() => {
      this.setState((prevState) => {
        return {
          bonus: this.state.winNumbers[this.state.winNumbers.length - 1],
          redo: true,
        };
      });
    }, (this.state.winNumbers.length - 1) * 1000);
    console.log(this.state.winBalls);
  };

  render() {
    return (
      <>
        <div>당첨숫자</div>
        <div className="lotto">
          {this.state.winBalls.map((v) => {
            return (
              <div key={v} className="lottoNum">
                {v}
              </div>
            );
          })}
        </div>
        <div>보너스 숫자!</div>
        <div className="lotto">
          {this.state.bonus ? (
            <div className="lottoNum">{this.state.bonus}</div>
          ) : null}
        </div>
        {this.state.redo ? (
          <button onClick={this.onClickRedo}>한번 더</button>
        ) : null}
      </>
    );
  }
}

module.exports = Lotto_class;
