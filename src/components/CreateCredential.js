// src/components/CreateCredential.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreateCredential.css';

const CreateCredential = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Updated Hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      credential: {
        recipient: {
          name,
          email,
        },
        group_id: 626573,
      },
    };

    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token token=${process.env.REACT_APP_AUTH_TOKEN}`,
          },
        }
      );

      navigate('/response', { state: { data: response.data } }); // Updated Navigation
    } catch (error) {
      console.error('Error creating credential:', error);
      alert('Failed to create credential. Please try again.');
    }
  };

  return (
    <div className="create-credential">
      <h2>Create Credential</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <button type="submit">Create Credential</button>
      </form>
    </div>
  );
};

export default CreateCredential;
