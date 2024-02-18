import Icon from "../UI/Icon";
import classes from "./Card.module.css";

import { MdOutlineShoppingBag, MdOutlineDelete } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";

import iconClasses from "../UI/Icon.module.css";
const Card = () => {
  return (
    <div className={classes.transactionContainer}>
      <div className={classes.transactionTitle}>
        <Icon
          className={`${iconClasses.badge} ${iconClasses.expense}`}
          icon={<MdOutlineShoppingBag />}
        />
        <div className={classes.transactionLabel}>
          <h3>Clothers</h3>
          <p>19 April 2024</p>
        </div>
        <p>242.5$</p>
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
  );
};

export default Card;
