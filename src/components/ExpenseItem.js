import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"
import "./ExpenseItem.css";

function ExpenseItem(props) {

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;

// The simple rule that react uses is that the lower case letter are built in by html and the capital ones are defined by a user that the expense item has now become a custom made component.
// In react, we cannot have it to return two root elements otherwise it will be throwing an error.
