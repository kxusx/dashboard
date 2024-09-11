"use client";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChartState {
  candlestickData: any[];
  lineData: { labels: string[]; data: number[] };
  barData: { labels: string[]; data: number[] };
  pieData: { labels: string[]; data: number[] };
}

const initialState: ChartState = {
  candlestickData: [],
  lineData: { labels: [], data: [] },
  barData: { labels: [], data: [] },
  pieData: { labels: [], data: [] },
};

const chartSlice = createSlice({
  name: 'charts',
  initialState,
  reducers: {
    setCandlestickData(state, action: PayloadAction<any[]>) {
      state.candlestickData = action.payload;
    },
    setLineData(state, action: PayloadAction<{ labels: string[]; data: number[] }>) {
      state.lineData = action.payload;
    },
    setBarData(state, action: PayloadAction<{ labels: string[]; data: number[] }>) {
      state.barData = action.payload;
    },
    setPieData(state, action: PayloadAction<{ labels: string[]; data: number[] }>) {
      state.pieData = action.payload;
    },
  },
});

export const { setCandlestickData, setLineData, setBarData, setPieData } = chartSlice.actions;
export default chartSlice.reducer;