import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/HomePage/home';
// import LoginPage from './Components/LoginPage/loginpage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/selected-item" element={<SelectedItem />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
