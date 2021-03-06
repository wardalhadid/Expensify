import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";
import { useNavigate } from "react-router";

export const AddExpensePage = (props) => {
  let navigate = useNavigate();
  const onSubmit = (expense) => {
    props.onSubmit(expense);
    navigate('/');
  };
    return (
      <div>
   <h1>Add Expense</h1>
   <ExpenseForm
   onSubmit = {onSubmit}
   />
  </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (expense) => dispatch(addExpense(expense))
  });

export default connect(undefined, mapDispatchToProps)(AddExpensePage);