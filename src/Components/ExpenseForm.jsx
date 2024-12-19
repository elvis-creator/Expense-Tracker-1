import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    name && amount 
    ? (onAddExpense({ name, amount: parseFloat(amount) }), setName(''), setAmount('')) 
    : alert('Please provide both name and amount!');
  
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Expense Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="amount">Amount: </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );

};

export default ExpenseForm;
