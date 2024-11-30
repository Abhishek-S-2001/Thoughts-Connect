import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/HomePage/home';
import Register from './Components/Register/register';
import LogIn from './Components/LogIn/login';

function App() {
  const [apiStatus, setApiStatus] = useState('Checking API status...');
  const [isApiHealthy, setIsApiHealthy] = useState(false);

  useEffect(() => {
    const checkApiHealth = () => {
      fetch('http://localhost:8080/health')
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('API not reachable');
          }
        })
        .then((data) => {
          setApiStatus(data.message);
          setIsApiHealthy(true); // API is healthy
        })
        .catch(() => {
          setApiStatus('API is not running');
          setIsApiHealthy(false); // API health check failed
        });
    };

    // Check API health every 5 seconds if not healthy
    const interval = setInterval(() => {
      if (!isApiHealthy) {
        checkApiHealth();
      }
    }, 5000);

    // Initial check
    checkApiHealth();

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [isApiHealthy]);

  if (!isApiHealthy) {
    // Display API status while checking or if API is down
    return (
      <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>
        <h1>Application Loading...</h1>
        <p>{apiStatus}</p>
        <p>Retrying in 5 seconds...</p>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </Router>
  );
}

export default App;
