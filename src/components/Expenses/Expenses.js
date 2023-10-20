import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter.js";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
import("./Expenses.css");
function Expenses(props) {
  const [year, setYear] = useState("2023");
  const changeFilterYear = (year) => {
    setYear(year);
    console.log(year, "from expenses.js");
  };
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === year
  );
  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilterYear={changeFilterYear} selected={year} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList year={year} filteredExpenses={filteredExpenses} />
    </Card>
  );
}
export default Expenses;
