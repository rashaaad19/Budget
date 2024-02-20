import { useDispatch } from "react-redux";
import { budgetActions } from "../store/budget-slice";
import { uiActions } from "../store/ui-slice";
const Button = ({ title, className, type, filterType }) => {
  const dispatch = useDispatch();
  const handleFilterClick = () => {
    dispatch(budgetActions.filterItems(filterType));
    dispatch(uiActions.changeCategory(filterType));
  };
  
  const handleAddItem=()=>{
    dispatch(uiActions.toggleModal())
  }
  return (
    <button
      onClick={
        type==='filter' ?
        handleFilterClick:
        handleAddItem
      }
      className={className}
    >
      {title}
    </button>
  );
};

export default Button;
