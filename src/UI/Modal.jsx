import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";
import { useSelector } from "react-redux";
const Modal = ({ children, onClose, className = "" }) => {
  const dialog = useRef();
  const showModal = useSelector((state) => state.ui.showModal);

  const handleBackdropClick = (event) => {
    if (event.target === dialog.current) {
      dialog.current.close();
    }
    };

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
      aria-modal={true}
      role="dialog"
      onClick={handleBackdropClick}
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
