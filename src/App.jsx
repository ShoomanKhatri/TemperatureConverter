import React, { useState } from 'react';
import './App.css';
import TemperatureInput from './Components/TemperatureInput';
import TemperatureDisplay from './Components/TemperatureDisplay';

// Define the conversion functions before using them
const convertToFahrenheit = (celsius) => {
  return (celsius * 9 / 5) + 32;
};

const convertToKelvin = (celsius) => {
  return +celsius + 273.15;
};

function App() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(convertToFahrenheit(0));
  const [kelvin, setKelvin] = useState(convertToKelvin(0));

  const handleCelsiusChange = (value) => {
    setCelsius(value);
    if (value === '') {
      setFahrenheit('');
      setKelvin('');
    } else {
      setFahrenheit(convertToFahrenheit(value));
      setKelvin(convertToKelvin(value));
    }
  };

  const handleFahrenheitChange = (value) => {
    setFahrenheit(value);
    if (value === '') {
      setCelsius('');
      setKelvin('');
    } else {
      const floatValue = parseFloat(value);
      if (!isNaN(floatValue)) {
        setCelsius((floatValue - 32) * 5 / 9);
        setKelvin((floatValue - 32) * 5 / 9 + 273.15);
      }
    }
  };

  const handleKelvinChange = (value) => {
    setKelvin(value);
    if (value === '') {
      setCelsius('');
      setFahrenheit('');
    } else {
      const floatValue = parseFloat(value);
      if (!isNaN(floatValue)) {
        setCelsius(floatValue - 273.15);
        setFahrenheit((floatValue - 273.15) * 9 / 5 + 32);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="p-8 rounded-lg shadow border-2 border-green-500">
        <h1 className="text-2xl font-bold mb-4 text-orange-500">Temperature Converter</h1>
        <div className="flex flex-col space-y-4">
          <TemperatureInput
            label="Celsius"
            temperature={celsius}
            onTemperatureChange={handleCelsiusChange}
          />
          <TemperatureInput
            label="Fahrenheit"
            temperature={fahrenheit}
            onTemperatureChange={handleFahrenheitChange}
          />
          <TemperatureInput
            label="Kelvin"
            temperature={kelvin}
            onTemperatureChange={handleKelvinChange}
          />
          <TemperatureDisplay celsius={celsius} fahrenheit={fahrenheit} kelvin={kelvin} />
        </div>
      </div>
    </div>
  );
}

export default App;
