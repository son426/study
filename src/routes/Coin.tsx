import { useParams, useLocation } from "react-router";
import { useEffect, useState } from "react";
import styled from "styled-components";

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

const Loader = styled.div`
  text-align: center;
  display: block;
  font-size: 15px;
`;

interface RouteParams {
  coinId: string;
}

interface RouteState {
  name: string;
}

interface ITag {
  coin_counter: number;
  ico_counter: number;
  id: string;
  name: string;
}

interface IInfo {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  contract: string;
  platform: string;
  logo: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

function Coin() {
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  const [info, setInfo] = useState<IInfo>();
  const [price, setPrice] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(infoData);
      setPrice(priceData);
      console.log(infoData);
      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Header>{state.name}</Header>
      {loading ? <Loader>loading...</Loader> : info?.id}
    </Container>
  );
}

export default Coin;
