import Icon from "../UI/Icon";
import classes from "./Card.module.css";
import iconClasses from "../UI/Icon.module.css";

import { MdOutlineShoppingBag, MdOutlineDelete } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { PiBankLight } from "react-icons/pi";
import { currencyFormatter } from "../utilties/functions";

const Card = ({ name, date, type, price, id }) => {

  
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
          <p>{currencyFormatter(price)}</p>
        </div>

        <div className={classes.transactionControl}>
          <Icon
            className={`${iconClasses.badge} ${iconClasses.edit}`}
            icon={<FiEdit3 />}
          />
          <Icon
            className={`${iconClasses.badge} ${iconClasses.delete}`}
            icon={<MdOutlineDelete />}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
