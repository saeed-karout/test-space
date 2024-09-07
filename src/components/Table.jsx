// src/components/Table.jsx
import React from 'react';

const Table = ({ color }) => {
  return (
    <div className={`w-32 h-32 ${color} rounded-lg shadow-lg`}></div>
  );
};

export default Table;
