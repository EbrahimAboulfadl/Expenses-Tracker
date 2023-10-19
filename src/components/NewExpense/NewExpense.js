import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";
import("./NewExpense.css");
const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);

  const showForm = () => {
    setIsAdding(true);
  };
  const hideForm = () => {
    setIsAdding(false);
  };

  const onSaveExpenseData = (expenseData) => {
    props.addToArray(expenseData);
  };
  return (
    <div className="new-expense">
      {isAdding && (
        <ExpenseForm onSaveForm={onSaveExpenseData} hideForm={hideForm} />
      )}
      {!isAdding && <button onClick={showForm}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
