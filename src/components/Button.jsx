import { useDispatch } from "react-redux";
import { budgetActions } from "../store/budget-slice";

const Button = () => {
  const dispatch = useDispatch();
  const handleOnAdd = () => {
    dispatch(budgetActions.addExpense({
      id:5,
      name:'Travel',
      amount:15
    }));
  };
  const handleOnRemove=()=>{
    dispatch(budgetActions.deleteExpense(5))
  }

const handleOnChange=()=>{
  dispatch(budgetActions.editExpense(5))
}


  return <>
  <button onClick={handleOnAdd}>Add </button>
  <button onClick={handleOnRemove}>Remove </button>
  <button onClick={handleOnChange}>Edit </button>

  </>;
};

export default Button;
