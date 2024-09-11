"use client";

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCandlestickData, fetchLineChartData, fetchBarChartData, fetchPieChartData } from './utils/api';
import CandlestickChart from './components/CandleStickChart';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import { RootState } from './store/store';
import { setCandlestickData, setLineData, setBarData, setPieData } from './store/chartSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { candlestickData, lineData, barData, pieData } = useSelector((state: RootState) => state.charts);

  useEffect(() => {
    fetchCandlestickData().then(data => dispatch(setCandlestickData(data)));
    fetchLineChartData().then(data => dispatch(setLineData(data)));
    fetchBarChartData().then(data => dispatch(setBarData(data)));
    fetchPieChartData().then(data => dispatch(setPieData(data)));
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-4 rounded shadow h-80">
          <h2 className="text-xl font-semibold mb-4">Candlestick Chart</h2>
          <CandlestickChart data={candlestickData} />
        </div>
        <div className="bg-white p-4 rounded shadow h-80">
          <h2 className="text-xl font-semibold mb-4">Line Chart</h2>
          <LineChart data={lineData} />
        </div>
        <div className="bg-white p-4 rounded shadow h-80">
          <h2 className="text-xl font-semibold mb-4">Bar Chart</h2>
          <BarChart data={barData} />
        </div>
        <div className="bg-white p-4 rounded shadow h-80">
          <h2 className="text-xl font-semibold mb-4">Pie Chart</h2>
          <PieChart data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;