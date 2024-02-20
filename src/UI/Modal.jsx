import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";
import { useSelector } from "react-redux";
const Modal = ({ children, open, onClose, className = "" }) => {
  const dialog = useRef();
  const showModal = useSelector((state) => state.ui.showModal);
  useEffect(() => {
    if (showModal) {
      dialog.current.showModal();
    }
    if (!showModal) {
      dialog.current.close();
    }
  }, [showModal]);

  return createPortal(
    <dialog
      ref={dialog}
      className={`${classes.modal} ${className}`}
      onClose={onClose}
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
