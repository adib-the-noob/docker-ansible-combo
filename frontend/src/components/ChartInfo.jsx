import React from 'react';

const ChartInfo = ({ chartData }) => {
  if (!chartData || !chartData.labels || !chartData.data) {
    return <p>No chart data available</p>;
  }

  const maxSales = Math.max(...chartData.data);
  const totalSales = chartData.data.reduce((sum, curr) => sum + curr, 0);

  return (
    <div className="chart-info">
      <p>Monthly sales data available for: {chartData.labels.join(', ')}</p>
      <p>Highest monthly sales: ${maxSales.toLocaleString()}</p>
      <p>Total sales: ${totalSales.toLocaleString()}</p>
      <p>Average monthly sales: ${(totalSales / chartData.data.length).toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
    </div>
  );
};

export default ChartInfo;
