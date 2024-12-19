import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList({expenses}) {
  return (
    <div>
        <h2>Expense</h2>
        <ul>
            {expenses.map((expense, index) => (
                <ExpenseItem key={index} name={expense.name} amount={expense.amount}/>
            ))}
        </ul>
    </div>
  );
};

export default ExpenseList;