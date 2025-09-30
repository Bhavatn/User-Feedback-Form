import React from "react";
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const navigate = useNavigate();
  return (
    <div className="welcome-container">
      <h1>User Feedback Form</h1>
      <p>
        Welcome to the User Feedback Form! This website allows you to easily share your thoughts and suggestions with us.
      </p>
      <p>
        Please fill out the feedback form to help us improve our services and better understand your needs.
      </p>
      <button className="start-feedback-btn" onClick={() => navigate('/form')}>Start Feedback</button>
    </div>
  );
}

export default WelcomePage;
