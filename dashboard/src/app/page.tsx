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
    <div className="chartdivs">
     
    <div className="chart1">
    <CandlestickChart data={candlestickData} />
    </div>
    
    <div className="chart2">
    <LineChart data={lineData} />
    </div>
    
    <div className="chart3">
    <BarChart data={barData} />
    </div>

    <div className="chart4">
    <PieChart data={pieData} />
    </div>
    </div>
  );
};

export default Dashboard;