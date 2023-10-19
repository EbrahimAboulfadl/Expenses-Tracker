import ExpenseForm from "./ExpenseForm";
import("./NewExpense.css");
const NewExpense = (props) => {
  const onSaveExpenseData = (expenseData) => {
    props.addToArray(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveForm={onSaveExpenseData} />
    </div>
  );
};

export default NewExpense;
