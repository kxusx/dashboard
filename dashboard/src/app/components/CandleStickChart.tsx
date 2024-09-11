import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

interface CandleStickChartProps {
  data: { x: string; open: number; high: number; low: number; close: number }[];
}

const CandleStickChart: React.FC<CandleStickChartProps> = ({ data }) => {
  const options = {
    title: {
      text: 'Candlestick Chart',
    },
    series: [
      {
        type: 'candlestick',
        data: data.map(item => [
          new Date(item.x).getTime(),
          item.open,
          item.high,
          item.low,
          item.close,
        ]),
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} constructorType={'stockChart'} options={options} />;
};

export default CandleStickChart;