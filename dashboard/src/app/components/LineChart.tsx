import { Chart } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
// import { PieChartData } from 'types';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

interface LineChartProps {
  data: PieChartData;
// data: {    labels: string[];data: number[] }[];
}



const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Line Dataset',
        data: data.data,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default LineChart;