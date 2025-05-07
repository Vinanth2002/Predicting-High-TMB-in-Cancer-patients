import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Components/FirstPage/HomePage'
import PageSecond from './Components/SecondPage/PageSecond';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/second-page" element={<PageSecond />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

