import React, { useState } from "react";

import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../ui/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangedHandler = (selectedYearFilter) => {
    setFilteredYear(selectedYearFilter);
  };

  const filteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <Card>
        <ExpenseFilter
          selected={filteredYear}
          onChangedFilter={filterChangedHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
