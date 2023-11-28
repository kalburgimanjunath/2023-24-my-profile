import React, { useState, useEffect } from "react";
import CodeSnippet from "./codesnippet";
import { CopyBlock, CodeBlock, dracula } from "react-code-blocks";
const statement =
  'Create a React component that toggles between displaying "Hello" and "Goodbye" every two seconds.';
// output
export const ToggleGreeting = () => {
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGreeting((prevGreeting) =>
        prevGreeting === "Hello" ? "Goodbye" : "Hello",
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>{greeting}</div>;
};

const samplecode = `
const ToggleGreeting = () => {
    const [greeting, setGreeting] = useState("Hello");
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setGreeting((prevGreeting) =>
          prevGreeting === "Hello" ? "Goodbye" : "Hello",
        );
      }, 2000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    return <div>{greeting}</div>;
  };
  
  export default ToggleGreeting;`;

export default function Problem1() {
  return (
    <CodeSnippet
      statement={statement}
      codeSnippet={samplecode}
      output={<ToggleGreeting />}
    />
  );
}
