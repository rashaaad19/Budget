import Icon from "../UI/Icon";
import classes from "./Card.module.css";
import iconClasses from "../UI/Icon.module.css";
import { FiEdit3 } from "react-icons/fi";
import { PiBankLight } from "react-icons/pi";
import { MdOutlineShoppingBag, MdOutlineDelete } from "react-icons/md";

import { currencyFormatter } from "../utilties/functions";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { budgetActions } from "../store/budget-slice";

const Card = ({ name, date, type, price, id }) => {
  const itemData = { name, date, type, price, id };
  const dispatch = useDispatch();
  const handleOnEdit = () => {
    dispatch(budgetActions.setSelectedItem(itemData));
    
    dispatch(uiActions.toggleFormType("edit"));
    dispatch(uiActions.toggleModalType("form"));
    dispatch(uiActions.toggleModal());
  };
  const handleOnDelete = () => {
    dispatch(budgetActions.setSelectedItem(itemData));
    dispatch(uiActions.toggleModal());
    dispatch(uiActions.toggleModalType("confirm"));
  };
  return (
    <>
      <div className={classes.transactionContainer}>
        <div className={classes.transactionTitle}>
          <Icon
            className={
              type === "expenses"
                ? `${iconClasses.badge} ${iconClasses.expense}`
                : `${iconClasses.badge} ${iconClasses.income}`
            }
            icon={
              type === "expenses" ? <MdOutlineShoppingBag /> : <PiBankLight />
            }
          />
          <div className={classes.transactionLabel}>
            <h3>{name}</h3>
            <p>{date}</p>
          </div>
          <p className={classes.price}>{currencyFormatter(price)}</p>
        </div>

        <div className={classes.transactionControl}>
          <Icon
            className={`${iconClasses.badge} ${iconClasses.edit}`}
            icon={<FiEdit3 />}
            handleOnClick={handleOnEdit}
          />
          <Icon
            className={`${iconClasses.badge} ${iconClasses.delete}`}
            icon={<MdOutlineDelete />}
            handleOnClick={handleOnDelete}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
