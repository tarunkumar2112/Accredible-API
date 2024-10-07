// src/components/ShowResponse.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ShowResponse.css';

const ShowResponse = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state || {};

  React.useEffect(() => {
    if (!data) {
      navigate('/'); // Redirect if no data
    }
  }, [data, navigate]);

  if (!data) {
    return null; // Prevent rendering if redirecting
  }

  return (
    <div className="show-response">
      <h2>Credential Created Successfully!</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={() => navigate('/')}>Create Another Credential</button>
    </div>
  );
};

export default ShowResponse;
