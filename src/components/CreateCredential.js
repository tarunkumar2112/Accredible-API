import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';
import './CreateCredential.css';

const CreateCredential = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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

      navigate('/response', { state: { data: response.data } });
    } catch (error) {
      console.error('Error creating credential:', error);
      //alert('Failed to create credential. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-credential">
      {loading && <Spinner />}
      <h2>Create Credential</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
            disabled={loading}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            disabled={loading}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Credential'}
        </button>
      </form>
    </div>
  );
};

export default CreateCredential;
