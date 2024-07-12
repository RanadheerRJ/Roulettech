// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import DailyCashForm from './DailyCashForm';
import CashSummary from './CashSummary';

function App() {
  const [cashEntries, setCashEntries] = useState([]);

  const addCashEntry = (entry) => {
    setCashEntries([...cashEntries, entry]);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DailyCashForm addCashEntry={addCashEntry} />} />
          <Route path="/summary" element={<CashSummary cashEntries={cashEntries} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
