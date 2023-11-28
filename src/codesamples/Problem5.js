import React, { useState, useEffect } from "react";
import CodeSnippet from "./codesnippet";
import { Link } from "react-router-dom";
const statement =
  "Build a React component for a simple navigation bar with links.";
// output

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

const samplecode = `
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;

`;

export default function Problem5() {
  return (
    <CodeSnippet
      statement={statement}
      codeSnippet={samplecode}
      output={<NavBar />}
    />
  );
}
