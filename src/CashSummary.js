// src/CashSummary.js

import React from 'react';

const CashSummary = ({ cashEntries }) => {
  const totalAmount = cashEntries.reduce((total, entry) => total + entry.amount, 0);
  const totalMs1Sales = cashEntries.reduce((total, entry) => total + entry.ms1Sales, 0);
  const totalMs2Sales = cashEntries.reduce((total, entry) => total + entry.ms2Sales, 0);
  const totalHsd1Sales = cashEntries.reduce((total, entry) => total + entry.hsd1Sales, 0);
  const totalHsd2Sales = cashEntries.reduce((total, entry) => total + entry.hsd2Sales, 0);

  return (
    <div className="container mt-5">
      <h2>Daily Cash Summary</h2>
      <ul className="list-group">
        {cashEntries.map((entry, index) => (
          <li key={index} className="list-group-item">
            <strong>Date:</strong> {entry.date} <br />
            <strong>MS1 Sales:</strong> {entry.ms1Sales.toFixed(2)} L @ {entry.ms1Rate} per L => Amount: ${(entry.ms1Sales * entry.ms1Rate).toFixed(2)} <br />
            <strong>MS2 Sales:</strong> {entry.ms2Sales.toFixed(2)} L @ {entry.ms2Rate} per L => Amount: ${(entry.ms2Sales * entry.ms2Rate).toFixed(2)} <br />
            <strong>HSD1 Sales:</strong> {entry.hsd1Sales.toFixed(2)} L @ {entry.hsd1Rate} per L => Amount: ${(entry.hsd1Sales * entry.hsd1Rate).toFixed(2)} <br />
            <strong>HSD2 Sales:</strong> {entry.hsd2Sales.toFixed(2)} L @ {entry.hsd2Rate} per L => Amount: ${(entry.hsd2Sales * entry.hsd2Rate).toFixed(2)} <br />
            <strong>Total Amount:</strong> ${entry.amount.toFixed(2)}
          </li>
        ))}
      </ul>
      <div className="mt-4 p-3 bg-light">
        <h3>Total MS1 Sales: {totalMs1Sales.toFixed(2)} L</h3>
        <h3>Total MS2 Sales: {totalMs2Sales.toFixed(2)} L</h3>
        <h3>Total HSD1 Sales: {totalHsd1Sales.toFixed(2)} L</h3>
        <h3>Total HSD2 Sales: {totalHsd2Sales.toFixed(2)} L</h3>
        <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CashSummary;
