import React from 'react';

const TemperatureDisplay = ({ celsius, fahrenheit, kelvin }) => {
  return (
    <div className="mb-4">
      <p className="text-orange-500">
        Celsius: <span className="font-bold">{celsius}</span>
      </p>
      <p className="text-orange-500">
        Fahrenheit: <span className="font-bold">{fahrenheit}</span>
      </p>
      <p className="text-orange-500">
        Kelvin: <span className="font-bold">{kelvin}</span>
      </p>
    </div>
  );
};

export default TemperatureDisplay;
