import classes from "./Form.module.css";

import Modal from "../UI/Modal";
import Input from "./Input";
import Select from "./Select";

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { budgetActions } from "../store/budget-slice";

import { generateId, getCurrentDate } from "../utilties/functions";
import {
  expensesOptionsArray,
  incomeOptionsArray,
} from "../utilties/variables";

const Form = () => {
  let optionsArray = [];
  const date = new Date();
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((state) => state.ui.showModal);
  const dataType = useSelector((state) => state.ui.dataType);
  const formType = useSelector((state) => state.ui.formType);
  console.log(formType);
  if (dataType === "expenses") {
    optionsArray = expensesOptionsArray;
  } else if (dataType === "income") {
    optionsArray = incomeOptionsArray;
  }
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataEntries = {
      name: formData.get("title"),
      price: formData.get("value"),
      category: formData.get("category"),
      date: getCurrentDate(date),
      type: dataType,
      id: generateId(),
    };
    if (formType === "add") {
      dispatch(budgetActions.addItem(formDataEntries));
    }
    if (formType === "edit") {
      dispatch(budgetActions.editItem(formDataEntries));
    }
    event.target.reset();

    //check if the modal is openned before closing it
    if (modalIsOpen) {
      dispatch(uiActions.toggleModal());
      console.log("Sunmitted");
    }
  };

  const handleOnSwitch = () => {
    dispatch(uiActions.toggleDataType());
  };

  const handleOnClose = () => {
    if (modalIsOpen) {
      dispatch(uiActions.toggleModal());
    }
  };
  return (
    <Modal onClose={handleOnClose}>
      <form className={classes.form} onSubmit={handleOnSubmit}>
        {formType === "edit" ? (
          <div className={classes.formHeader}>
            <h1>Edit {dataType}</h1>
          </div>
        ) : (
          <div className={classes.formHeader}>
            <h1>New {dataType}</h1>
            <button type="button" onClick={handleOnSwitch}>
              Switch
            </button>
          </div>
        )}
        <hr
          className={
            dataType === "expenses"
              ? classes.expenseHeader
              : classes.incomeHeader
          }
        />
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
