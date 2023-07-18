import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface ChartProps {
  data: { month: string; balance: number }[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  const formatBalance = (value: number) => {
    return `${value}K`;
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3498db" stopOpacity={0.5} /> {/* Lighter blue */}
            <stop offset="95%" stopColor="#3498db" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="#eee" />
        <XAxis dataKey="month" stroke="#" />
        <YAxis
          stroke="#"
          tickFormatter={formatBalance} // Format the Y-axis tick values
        />
        <Tooltip wrapperStyle={{ background: '#fff' }} />
        <Area
          type="linear"
          dataKey="balance"
          fill="url(#gradientFill)"
          stroke="#05014a"
          strokeWidth={2} // Increase the strokeWidth to make the line thicker
          fillOpacity={0.4}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;