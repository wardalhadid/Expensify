import React from "react";
import { connect} from "react-redux";
import { useNavigate, useParams } from "react-router";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpensePage = (props) => {
  let navigate = useNavigate();
  let {id} = useParams();
  const selectedExpense = props.expenses.find((expense) => expense.id === id);
  return (
   <div>
    <ExpenseForm
    expense={selectedExpense}
     onSubmit = {(expense) => {
     props.dispatch(editExpense(id, expense));
      navigate('/');
     }}
    />
    <button
     onClick={() => {
      props.dispatch(removeExpense({id}));
      navigate('/');
      }}>
       Remove
    </button>
    </div>
  );
}

const mapStateToProps = (state) => {
 return {
  expenses: state.expenses
 };
};


export default connect(mapStateToProps)(EditExpensePage);