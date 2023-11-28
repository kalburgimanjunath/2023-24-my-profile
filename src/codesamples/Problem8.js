import React, { useState, useEffect } from "react";
import CodeSnippet from "./codesnippet";
import { Link } from "react-router-dom";
const statement =
  "Implement a React component for a form that dynamically adds and removes input fields for a list of email addresses.";
// output

const EmailListForm = () => {
  const [emails, setEmails] = useState([""]);

  const addEmail = () => {
    setEmails([...emails, ""]);
  };

  const removeEmail = (index) => {
    const updatedEmails = [...emails];
    updatedEmails.splice(index, 1);
    setEmails(updatedEmails);
  };

  const handleChange = (index, value) => {
    const updatedEmails = [...emails];
    updatedEmails[index] = value;
    setEmails(updatedEmails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted emails:", emails);
  };

  return (
    <form onSubmit={handleSubmit}>
      {emails.map((email, index) => (
        <div key={index}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => handleChange(index, e.target.value)}
          />
          <button type="button" onClick={() => removeEmail(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addEmail} className="primary-button">
        Add Email
      </button>
      <button type="submit" className="primary-button">
        Submit
      </button>
    </form>
  );
};

const samplecode = `
import React, { useState } from 'react';

const EmailListForm = () => {
  const [emails, setEmails] = useState(['']);

  const addEmail = () => {
    setEmails([...emails, '']);
  };

  const removeEmail = (index) => {
    const updatedEmails = [...emails];
    updatedEmails.splice(index, 1);
    setEmails(updatedEmails);
  };

  const handleChange = (index, value) => {
    const updatedEmails = [...emails];
    updatedEmails[index] = value;
    setEmails(updatedEmails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted emails:', emails);
  };

  return (
    <form onSubmit={handleSubmit}>
      {emails.map((email, index) => (
        <div key={index}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => handleChange(index, e.target.value)}
          />
          <button type="button" onClick={() => removeEmail(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={addEmail}>Add Email</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmailListForm;

`;

export default function Problem8() {
  return (
    <CodeSnippet
      statement={statement}
      codeSnippet={samplecode}
      output={<EmailListForm />}
    />
  );
}
