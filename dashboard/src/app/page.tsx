"use client";

import { useEffect, useState } from 'react';
import { fetchCandlestickData, fetchLineChartData, fetchBarChartData, fetchPieChartData } from './utils/api';
import CandlestickChart from './components/CandleStickChart';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';

const Dashboard = () => {
  const [candlestickData, setCandlestickData] = useState([]);
  const [lineData, setLineData] = useState({ labels: [], data: [] });
  const [barData, setBarData] = useState({ labels: [], data: [] });
  const [pieData, setPieData] = useState({ labels: [], data: [] });

  useEffect(() => {
    fetchCandlestickData().then(setCandlestickData);
    fetchLineChartData().then(setLineData);
    fetchBarChartData().then(setBarData);
    fetchPieChartData().then(setPieData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Dashboard</h1>

      {/* 2x2 Grid Layout with Aspect Ratio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-4 rounded-lg shadow-lg aspect-w-16 aspect-h-9">
          <h2 className="text-xl font-semibold mb-4">Candlestick Chart</h2>
          <CandlestickChart data={candlestickData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg aspect-w-16 aspect-h-9">
          <h2 className="text-xl font-semibold mb-4">Line Chart</h2>
          <LineChart data={lineData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg aspect-w-16 aspect-h-9">
          <h2 className="text-xl font-semibold mb-4">Bar Chart</h2>
          <BarChart data={barData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg aspect-w-16 aspect-h-9">
          <h2 className="text-xl font-semibold mb-4">Pie Chart</h2>
          <PieChart data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
