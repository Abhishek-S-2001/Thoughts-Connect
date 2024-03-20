import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/HomePage/home';
import Register from './Components/Register/register';
import LogIn from './Components/LogIn/login';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/register' element= {<Register />} />
        <Route path='/login' element= {<LogIn />} />
      </Routes>
    </Router>
  );
}

export default App;
