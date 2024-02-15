import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/home/HomePage';
import Login from './Component/login/loginPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginPage" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
