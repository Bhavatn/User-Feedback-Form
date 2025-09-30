import './App.css';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './Welcome Page';
import FormPage from './Form Page';
import ThankyouPage from './Thankyou Page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/thankyou" element={<ThankyouPage />} />
      </Routes>
    </div>
  );
}

export default App;
