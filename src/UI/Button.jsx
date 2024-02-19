import { useDispatch } from "react-redux";
import { budgetActions } from "../store/budget-slice";
const Button = ({ title, className, type }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(budgetActions.filterItems(type));
  };
  return (
    <button onClick={handleClick} className={className}>
      {title}
    </button>
  );
};

export default Button;
