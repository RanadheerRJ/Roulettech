// src/DailyCashForm.js

import React, { useState, useEffect } from 'react';

const DailyCashForm = ({ addCashEntry }) => {
  const [date, setDate] = useState('');
  const [ms1Yesterday, setMs1Yesterday] = useState('');
  const [ms1Today, setMs1Today] = useState('');
  const [ms1Rate, setMs1Rate] = useState('');
  const [ms2Yesterday, setMs2Yesterday] = useState('');
  const [ms2Today, setMs2Today] = useState('');
  const [ms2Rate, setMs2Rate] = useState('');
  const [hsd1Yesterday, setHsd1Yesterday] = useState('');
  const [hsd1Today, setHsd1Today] = useState('');
  const [hsd1Rate, setHsd1Rate] = useState('');
  const [hsd2Yesterday, setHsd2Yesterday] = useState('');
  const [hsd2Today, setHsd2Today] = useState('');
  const [hsd2Rate, setHsd2Rate] = useState('');
  const [ms1Sales, setMs1Sales] = useState(0);
  const [ms2Sales, setMs2Sales] = useState(0);
  const [hsd1Sales, setHsd1Sales] = useState(0);
  const [hsd2Sales, setHsd2Sales] = useState(0);
  const [amount, setAmount] = useState('');

  useEffect(() => {
    if (ms1Yesterday && ms1Today && ms1Rate) {
      const sales = parseFloat(ms1Today) - parseFloat(ms1Yesterday);
      setMs1Sales(sales);
    }
  }, [ms1Yesterday, ms1Today, ms1Rate]);

  useEffect(() => {
    if (ms2Yesterday && ms2Today && ms2Rate) {
      const sales = parseFloat(ms2Today) - parseFloat(ms2Yesterday);
      setMs2Sales(sales);
    }
  }, [ms2Yesterday, ms2Today, ms2Rate]);

  useEffect(() => {
    if (hsd1Yesterday && hsd1Today && hsd1Rate) {
      const sales = parseFloat(hsd1Today) - parseFloat(hsd1Yesterday);
      setHsd1Sales(sales);
    }
  }, [hsd1Yesterday, hsd1Today, hsd1Rate]);

  useEffect(() => {
    if (hsd2Yesterday && hsd2Today && hsd2Rate) {
      const sales = parseFloat(hsd2Today) - parseFloat(hsd2Yesterday);
      setHsd2Sales(sales);
    }
  }, [hsd2Yesterday, hsd2Today, hsd2Rate]);

  useEffect(() => {
    const totalAmount = (ms1Sales * parseFloat(ms1Rate || 0)) + (ms2Sales * parseFloat(ms2Rate || 0)) +
                        (hsd1Sales * parseFloat(hsd1Rate || 0)) + (hsd2Sales * parseFloat(hsd2Rate || 0));
    setAmount(totalAmount);
  }, [ms1Sales, ms2Sales, hsd1Sales, hsd2Sales, ms1Rate, ms2Rate, hsd1Rate, hsd2Rate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addCashEntry({ 
      date, 
      ms1Yesterday, ms1Today, ms1Rate, ms1Sales, 
      ms2Yesterday, ms2Today, ms2Rate, ms2Sales, 
      hsd1Yesterday, hsd1Today, hsd1Rate, hsd1Sales,
      hsd2Yesterday, hsd2Today, hsd2Rate, hsd2Sales,
      amount 
    });
    setDate('');
    setMs1Yesterday('');
    setMs1Today('');
    setMs1Rate('');
    setMs1Sales(0);
    setMs2Yesterday('');
    setMs2Today('');
    setMs2Rate('');
    setMs2Sales(0);
    setHsd1Yesterday('');
    setHsd1Today('');
    setHsd1Rate('');
    setHsd1Sales(0);
    setHsd2Yesterday('');
    setHsd2Today('');
    setHsd2Rate('');
    setHsd2Sales(0);
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5">
      <div className="form-group">
        <label>Date:</label>
        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <h3>MS Pump 1</h3>
      <div className="form-group">
        <label>Yesterday Reading:</label>
        <input
          type="number"
          className="form-control"
          step="0.001"
          value={ms1Yesterday}
          onChange={(e) => setMs1Yesterday(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Today Reading:</label>
        <input
          type="number"
          className="form-control"
          step="0.001"
          value={ms1Today}
          onChange={(e) => setMs1Today(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Rate:</label>
        <input
          type="number"
          className="form-control"
          step="0.01"
          value={ms1Rate}
          onChange={(e) => setMs1Rate(e.target.value)}
          required
        />
      </div>
      <h3>MS Pump 2</h3>
      <div className="form-group">
        <label>Yesterday Reading:</label>
        <input
          type="number"
          className="form-control"
          step="0.001"
          value={ms2Yesterday}
          onChange={(e) => setMs2Yesterday(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Today Reading:</label>
        <input
          type="number"
          className="form-control"
          step="0.001"
          value={ms2Today}
          onChange={(e) => setMs2Today(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Rate:</label>
        <input
          type="number"
          className="form-control"
          step="0.01"
          value={ms2Rate}
          onChange={(e) => setMs2Rate(e.target.value)}
          required
        />
      </div>
      <h3>HSD Pump 1</h3>
      <div className="form-group">
        <label>Yesterday Reading:</label>
        <input
          type="number"
          className="form-control"
          step="0.001"
          value={hsd1Yesterday}
          onChange={(e) => setHsd1Yesterday(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Today Reading:</label>
        <input
          type="number"
          className="form-control"
          step="0.001"
          value={hsd1Today}
          onChange={(e) => setHsd1Today(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Rate:</label>
        <input
          type="number"
          className="form-control"
          step="0.01"
          value={hsd1Rate}
          onChange={(e) => setHsd1Rate(e.target.value)}
          required
        />
      </div>
      <h3>HSD Pump 2</h3>
      <div className="form-group">
        <label>Yesterday Reading:</label>
        <input
          type="number"
          className="form-control"
          step="0.001"
          value={hsd2Yesterday}
          onChange={(e) => setHsd2Yesterday(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Today Reading:</label>
        <input
          type="number"
          className="form-control"
          step="0.001"
          value={hsd2Today}
          onChange={(e) => setHsd2Today(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Rate:</label>
        <input
          type="number"
          className="form-control"
          step="0.01"
          value={hsd2Rate}
          onChange={(e) => setHsd2Rate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Total MS Sales (Litres):</label>
        <input
          type="number"
          className="form-control"
          value={ms1Sales + ms2Sales}
          readOnly
        />
      </div>
      <div className="form-group">
        <label>Total HSD Sales (Litres):</label>
        <input
          type="number"
          className="form-control"
          value={hsd1Sales + hsd2Sales}
          readOnly
        />
      </div>
      <div className="form-group">
        <label>Total Amount:</label>
        <input
          type="number"
          className="form-control"
          value={amount}
          readOnly
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Entry</button>
    </form>
  );
};

export default DailyCashForm;
