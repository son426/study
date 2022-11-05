const { useState, useRef, useEffect } = require("react");
const React = require("react");
const ReactDOM = require("react-dom");

const lottoNum = () => {};

const Lotto_hooks = () => {
  const interval = useRef();
  const index = useRef();
  const [numlist, setNumlist] = useState([]);
  const [bonus, setBonus] = useState();

  useEffect(() => {
    if (numlist.length !== 6) {
      interval.current = setInterval(() => {
        setNumlist((prevlist) => [...prevlist, Math.floor(Math.random() * 45)]);
        return clearInterval(interval.current);
      }, 1000);
    } else {
      setTimeout(() => {
        setBonus(Math.floor(Math.random() * 45));
      }, 1000);
    }
  }, [numlist]);

  return (
    <>
      <p>당첨 숫자</p>
      <ul className="lotto">
        {numlist.map((v) => {
          return (
            <li className="lottoNum" key={v}>
              {v}
            </li>
          );
        })}
      </ul>
      {bonus ? <p>보너스 숫자 : {bonus}</p> : null}
    </>
  );
};

module.exports = Lotto_hooks;
