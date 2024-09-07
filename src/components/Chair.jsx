// src/components/Chair.jsx
import React from 'react';

const Chair = ({ color }) => {
  return (
    <div className={`w-16 h-16 ${color} rounded-lg shadow-md`}></div>
  );
};

export default Chair;
