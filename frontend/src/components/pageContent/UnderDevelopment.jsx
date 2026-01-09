import React from 'react';
import { useHistory } from 'react-router-dom'; 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './UnderDevelopment.css'

const UnderDevelopment = () => {
  const history = useHistory();

  const goHome = () => {
    history.push('/'); 
  };

  return (
    <div className="under-development-page">
      <div className="message-box">
        <h1>🚧 Page Under Development 🚧</h1>
        <p>Sorry! This page is currently under development. Please check back later.</p>
        <button className="back-home-btn" onClick={goHome}>
          <ArrowBackIcon fontSize="small" /> Back to Home
        </button>
      </div>
    </div>
  );
};

export default UnderDevelopment;
