import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  if (props.filteredExpenses.length > 0) {
    return props.filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  } else {
    return <p id="label__no-record">No Recorded Expenses in {props.year} </p>;
  }
};
export default ExpensesList;
