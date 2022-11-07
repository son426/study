const { useState, useRef, useEffect, useMemo, useCallback } = require("react");
const React = require("react");
const ReactDOM = require("react-dom");

const LottoNum = require("./LottoNum");

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

const Lotto_hooks = () => {
  const lottoNumbers = useMemo(() => getWinNumbers(), []);
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [redo, setRedo] = useState(false);
  const [bonus, setBonus] = useState(null);
  const timeout = useRef([]);

  const ballPick = (i) => {
    console.log("공 뽑기");
    setWinBalls((prevState) => {
      return [...prevState, winNumbers[i]];
    });
  };

  const runTimeouts = () => {
    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeout.current[i] = setTimeout(() => {
        ballPick(i);
      }, 1000 * (i + 1));
    }
    setTimeout(() => {
      setBonus(winNumbers[winNumbers.length - 1]);
      setRedo(true);
    }, winNumbers.length * 1000);
  };

  const onClickRedo = useCallback(() => {
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeout.current = [];
  }, [winNumbers]);

  useEffect(() => {
    console.log("didMount");
    runTimeouts();
  }, [winNumbers]);

  return (
    <>
      <div>당첨숫자</div>
      <div className="lotto">
        {winBalls.map((v) => {
          return <LottoNum key={v} num={v} />;
        })}
      </div>
      {bonus ? <p>보너스 숫자 : {bonus}</p> : null}
      <div className="lotto">{bonus ? <LottoNum num={bonus} /> : null}</div>
      {redo ? <button onClick={onClickRedo}>리셋</button> : null}
    </>
  );
};

module.exports = Lotto_hooks;
