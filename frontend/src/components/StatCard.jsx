import React from 'react';

const StatCard = ({ title, value, format }) => {
  const formattedValue = format ? format(value) : value;
  
  return (
    <div className="stat-card">
      <h3>{title}</h3>
      <p className="stat-value">{formattedValue}</p>
    </div>
  );
};

export default StatCard;
