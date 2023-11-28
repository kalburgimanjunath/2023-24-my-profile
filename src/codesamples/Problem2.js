import React, { useState, useEffect } from "react";
import CodeSnippet from "./codesnippet";
import { CopyBlock, CodeBlock, dracula } from "react-code-blocks";
const statement =
  "Build a React component that fetches and displays user information from a given API endpoint.";
// output

export const UserInfo = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("https://api.example.com/user");
        const userData = await response.json();
        setUser(userData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      {loading
        ? "Loading..."
        : user
          ? `${user.name} (${user.email})`
          : "User not found"}
    </div>
  );
};

const samplecode = `
import React, { useState, useEffect } from 'react';

const UserInfo = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://api.example.com/user');
        const userData = await response.json();
        setUser(userData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      {loading ? 'Loading...' : user ? user.name (user.email) : 'User not found'}
    </div>
  );
};

export default UserInfo;
`;

export default function Problem2() {
  return (
    <CodeSnippet
      statement={statement}
      codeSnippet={samplecode}
      output={<UserInfo />}
    />
  );
}
