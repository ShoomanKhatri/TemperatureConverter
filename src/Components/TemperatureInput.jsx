// TemperatureInput.js
import React from 'react';

const TemperatureInput = ({ label, temperature, onTemperatureChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-green-500">{label}:</label> 
      <input
        type="number"
        className="p-2 border rounded-md"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </div>
  );
};

export default TemperatureInput;
