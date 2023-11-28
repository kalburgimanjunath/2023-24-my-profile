import React, { useState, useEffect } from "react";
import CodeSnippet from "./codesnippet";
import { Link } from "react-router-dom";
const statement = "Build a React component for a color picker.";
// output

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState("#000000");

  const handleChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div>
      <input type="color" value={selectedColor} onChange={handleChange} />
      <p>Selected Color: {selectedColor}</p>
    </div>
  );
};

const samplecode = `
import React, { useState } from 'react';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('#000000');

  const handleChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div>
      <input
        type="color"
        value={selectedColor}
        onChange={handleChange}
      />
      <p>Selected Color: {selectedColor}</p>
    </div>
  );
};

export default ColorPicker;


`;

export default function Problem9() {
  return (
    <CodeSnippet
      statement={statement}
      codeSnippet={samplecode}
      output={<ColorPicker />}
    />
  );
}
