import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(0);

  const onChange = (event) => {
    setDollar(event.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The coins {loading ? null : `(${coins.length})`}</h1>
      {loading ? (
        <h3>Loading..</h3>
      ) : (
        <select>
          {loading
            ? null
            : coins.map((element) => (
                <option key={element.id}>
                  {element.name} // {element.symbol} : $
                  {element.quotes.USD.price}
                  // {dollar / parseFloat(element.quotes.USD.price)}개 살 수
                  있음.
                </option>
              ))}
        </select>
      )}
      <div>
        <label htmlFor="dollarInput">몇달러</label>
        <input onChange={onChange} id="dollarInput" type="number" />
      </div>
    </div>
  );
}

export default App;
