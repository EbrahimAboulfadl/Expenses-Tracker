import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY = [
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 5, 12),
  },
  {
    id: "e4",
    title: "New Phone",
    amount: 1200,
    date: new Date(2024, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY);
  const addExpenseToArray = (newExpenseData) => {
    setExpenses((prevState) => [newExpenseData, ...prevState]);
  };
  return (
    <div>
      <NewExpense addToArray={addExpenseToArray} />

      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
