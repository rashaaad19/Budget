import classes from "./ConfirmCard.module.css";
import Modal from "../UI/Modal";

import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { budgetActions } from "../store/budget-slice";


const ConfirmCard = () => {
  const modalIsOpen = useSelector((state) => state.ui.showModal);
  const modalType = useSelector((state) => state.ui.modalType);
  const item = useSelector((state) => state.budget.selectedItem);
  const dispatch = useDispatch();

  const handleOnClose = () => {
    if (modalIsOpen) {
      dispatch(uiActions.toggleModal());
    }
  };
  const handleOnDelete = () => {
    dispatch(budgetActions.deleteItem(item.id));
    dispatch(uiActions.toggleModal());
  };

  return (
    <>
      {modalType === "confirm" && (
        <Modal onClose={handleOnClose}>
          <div className={classes.container}>
            <h1>Are You Sure?</h1>
            <div className={classes.cardCtrl}>
              <button onClick={handleOnDelete}>Delete</button>
              <button onClick={handleOnClose}>Cancel</button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ConfirmCard;
