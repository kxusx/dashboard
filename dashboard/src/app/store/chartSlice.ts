import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChartState {
  candlestickData: { x: string; open: number; high: number; low: number; close: number }[];
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
    setCandlestickData(state, action: PayloadAction<ChartState['candlestickData']>) {
      state.candlestickData = action.payload;
    },
    setLineData(state, action: PayloadAction<ChartState['lineData']>) {
      state.lineData = action.payload;
    },
    setBarData(state, action: PayloadAction<ChartState['barData']>) {
      state.barData = action.payload;
    },
    setPieData(state, action: PayloadAction<ChartState['pieData']>) {
      state.pieData = action.payload;
    },
  },
});

export const { setCandlestickData, setLineData, setBarData, setPieData } = chartSlice.actions;
export default chartSlice.reducer;