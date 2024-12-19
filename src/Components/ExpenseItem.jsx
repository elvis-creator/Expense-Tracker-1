import React from 'react'

function ExpenseItem({name, amount}) {
  return (
    <div>
       <li>
        <strong>{name}</strong>: KES= {amount.toFixed(2)}
       </li>
    </div>
  );
};

export default ExpenseItem;