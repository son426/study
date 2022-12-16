import { fetchCoinHistory } from "./api";
import { useQuery } from "react-query";
import ApexChart from "react-apexcharts";

interface ChartProps {
  coinId: string;
}

interface IHistory {
  time_open: number;
  time_close: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistory[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  console.log(data?.map((price) => price.close));

  return (
    <>
      <ApexChart
        type="line"
        series={[
          {
            name: "sales",
            data: data?.map((price) => price.close) ?? [],
          },
        ]}
        options={{
          xaxis: {
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: { show: false },
          },
        }}
        width="500"
      />
    </>
  );
}

export default Chart;
