import React, { useState, useEffect } from "react";
import CodeSnippet from "./codesnippet";
import { Link } from "react-router-dom";
const statement =
  "Create a React component that fetches and displays random quotes from a public API";
// output

const RandomQuote = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("https://api.quotable.io/random");
        const quoteData = await response.json();
        setQuote(`${quoteData.content} - ${quoteData.author}`);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching random quote:", error);
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return <div>{loading ? "Loading..." : <blockquote>{quote}</blockquote>}</div>;
};

const samplecode = `
import React, { useState, useEffect } from 'react';

const RandomQuote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.quotable.io/random');
        const quoteData = await response.json();
        setQuote({quoteData.content} - {quoteData.author});
        setLoading(false);
      } catch (error) {
        console.error('Error fetching random quote:', error);
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div>
      {loading ? 'Loading...' : <blockquote>{quote}</blockquote>}
    </div>
  );
};

export default RandomQuote;



`;

export default function Problem7() {
  return (
    <CodeSnippet
      statement={statement}
      codeSnippet={samplecode}
      output={<RandomQuote />}
    />
  );
}
