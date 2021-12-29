import React from "react";
import { Link } from "react-router-dom";
import numeral from 'numeraljs';
import moment from "moment";

const ExpenseListItem = ({description, amount, createdAt, id}) =>{
return (
  <div>
    <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
    </Link>
        <p>
          {numeral(amount).format('$0,0.00')}
           - 
           {moment(createdAt).format('MMMM Do, YYYY')}
           </p>
  </div>
);
}

export default ExpenseListItem;