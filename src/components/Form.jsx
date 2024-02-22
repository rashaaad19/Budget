import classes from "./Form.module.css";

import Modal from "../UI/Modal";
import Input from "./Input";
import Select from "./Select";

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";

import { generateId } from "../utilties/functions";
import { budgetActions } from "../store/budget-slice";

const Form = () => {
  const optionsArray = [
    { id: 0, value: "Shopping" },
    { id: 1, value: "Rent" },
    { id: 2, value: "Travel" },
  ];
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((state) => state.ui.showModal);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    dispatch(
      budgetActions.addItem({
        name: formData.get("title"),
        price: formData.get("value"),
        category: formData.get("category"),
        type: "expenses",
        id: generateId(),
      })
    );
    //check if the modal is openned before closing it
    if (modalIsOpen) {
      dispatch(uiActions.toggleModal());
      console.log("Sunmitted");
    }
  };

  const handleOnClose = () => {
    if (modalIsOpen) {
      dispatch(uiActions.toggleModal());
    }
  };

  return (
    <Modal onClose={handleOnClose}>
      <form className={classes.form} onSubmit={handleOnSubmit}>
        <div>
          <h1>Expenses</h1>
        </div>
        <hr />
        <Select
          name="category"
          label="Category"
          options={optionsArray}
          className={classes.selectContainer}
          required
        />
        <Input
          name="title"
          type="text"
          id="title"
          label="Title"
          className={classes.inputContainer}
          required
        />
        <Input
          name="value"
          type="number"
          id="value"
          label="Value"
          step="0.01"
          inputMode="numeric"
          pattern="[0-9]"
          placeholder="0.00"
          autoComplete="off"
          className={classes.inputContainer}
          required
        />
        <div className={classes.formActions}>
          <button>Save</button>
          <button onClick={handleOnClose} type="button">
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Form;
