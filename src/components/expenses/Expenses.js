import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../ui/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangedHandler = (selectedYearFilter) => {
    setFilteredYear(selectedYearFilter);
  };

  const filteredExpenses = props.items.filter(expenses => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <Card>
        <ExpenseFilter
          selected={filteredYear}
          onChangedFilter={filterChangedHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
