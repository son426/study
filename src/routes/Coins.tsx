import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { mapQueryStatusFilter } from "react-query/types/core/utils";
import styled from "styled-components";
import { fetchCoins } from "./api";
import { useQuery } from "react-query";

const Container = styled.div`
  padding: 0px 20px;
  // 화면 사이즈 늘려도, 디자인 유지되게 하는 css 두줄.
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: ${(props) => props.theme.accentColor};
`;
const CoinsList = styled.ul``;
const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 10px;
  a {
    display: flex;
    padding: 20px;
    align-items: center;
  }
`;
const Loader = styled.div`
  text-align: center;
  display: block;
  font-size: 15px;
`;
const Img = styled.img`
  width: 35px;
  height: 35px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  // const [coins, setCoins] = useState<ICoin[]>([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch("https://api.coinpaprika.com/v1/coins");
  //     const json = await response.json();
  //     setCoins(json.slice(0, 100));
  //     await console.log(coins);
  //     setLoading(false);
  //   })();
  // }, []);

  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);

  return (
    <Container>
      <Header>Coins</Header>
      {isLoading ? (
        <Loader>loading...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{ pathname: `/${coin.id}`, state: { name: coin.name } }}
              >
                <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name}
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;
