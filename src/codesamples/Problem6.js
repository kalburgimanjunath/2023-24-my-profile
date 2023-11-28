import React, { useState, useEffect } from "react";
import CodeSnippet from "./codesnippet";
import { Link } from "react-router-dom";
const statement =
  "Develop a React component that fetches and displays a list of GitHub repositories for a given username.";
// output
const GitHubRepos = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`,
        );
        const repoData = await response.json();
        setRepos(repoData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const samplecode = `
import React, { useState, useEffect } from 'react';

const GitHubRepos = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/kalburgimanjunath/repos');
        const repoData = await response.json();
        setRepos(repoData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return (
    <div>
      {loading ? 'Loading...' : (
        <ul>
          {repos.map(repo => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GitHubRepos;


`;

export default function Problem6() {
  return (
    <CodeSnippet
      statement={statement}
      codeSnippet={samplecode}
      output={<GitHubRepos username="kalburgimanjunath" />}
    />
  );
}
