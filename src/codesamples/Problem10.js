import React, { useState, useEffect } from "react";
import CodeSnippet from "./codesnippet";
import { Link } from "react-router-dom";
const statement = "Create a React component for a countdown timer.";
// output

const CountdownTimer = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  return (
    <div>
      <p>Time remaining: {seconds} seconds</p>
    </div>
  );
};

const samplecode = `
import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds(prevSeconds => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  return (
    <div>
      <p>Time remaining: {seconds} seconds</p>
    </div>
  );
};

export default CountdownTimer;

`;

export default function Problem10() {
  return (
    <CodeSnippet
      statement={statement}
      codeSnippet={samplecode}
      output={<CountdownTimer initialSeconds={20} />}
    />
  );
}
