import React, { useState } from 'react';
import './App.css';
import ExpenseForm from './Components/ExpenseForm';
import ExpenseList from './Components/ExpenseList';


const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
