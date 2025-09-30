import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';

function ThankyouPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;


  if (!formData) {
    return (
      <div className="thankyou-bg">
        <div className="thankyou-container">
          <h2>No data Submitted</h2>
          <div className="button-row" style={{ marginTop: '2rem' }}>
            <button onClick={() => navigate('/form')}>Go to form</button>
            <button onClick={() => navigate('/')}>Home</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="thankyou-bg">
      <div className="thankyou-container">
        <h2>Thanks for Submitting</h2>
        <div className="submitted-data">
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Gender:</strong> {formData.gender}</p>
          <p><strong>Country:</strong> {formData.country}</p>
          <p><strong>Interests:</strong> {formData.interests && formData.interests.length > 0 ? formData.interests.join(", ") : "None"}</p>
        </div>
        <div className="button-row" style={{ marginTop: '2rem' }}>
          <button onClick={() => navigate('/form')}>Submit another response</button>
          <button onClick={() => navigate('/')}>Home</button>
        </div>
      </div>
    </div>
  );
}

export default ThankyouPage;
