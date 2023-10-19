import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter.js";
import { useState } from "react";

import("./Expenses.css");
function Expenses(props) {
  const [year, setYear] = useState("2023");
  const changeFilterYear = (year) => {
    setYear(year);
    console.log(year, "from expenses.js");
  };
  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilterYear={changeFilterYear} selected={year} />
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </Card>
  );
}
export default Expenses;
