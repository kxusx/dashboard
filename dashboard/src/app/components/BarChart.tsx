import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
// import { PieChartData } from './types';

ChartJS.register(BarElement, CategoryScale, LinearScale);

interface BarChartProps {
  //    data: PieChartData;
  data: {
    labels: string[];
    data: number[];
  };
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Bar Dataset",
        data: data.data,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default BarChart;
