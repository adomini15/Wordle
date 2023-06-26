import React from "react";
import "./styles.css";

function Dialog({
  title,
  children,
  onSubmit,
  onClose,
  textSubmit = "submit",
  textClose = "close",
  disableSubmitButton = false,
  disableCloseButton = false,
  showSubmitButton = true,
  showCloseButton = true,
}) {
  const handleSubmit = () => {
    onSubmit();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="dialog">
      <div className="dialog__title">{title}</div>
      <div className="dialog__content">{children}</div>
      <div className="dialog__actions">
        <div className="dialog__buttons">
          {showSubmitButton && (
            <button
              className="dialog__button btn-success"
              onClick={handleSubmit}
              disabled={disableSubmitButton}
            >
              {textSubmit}
            </button>
          )}
          {showCloseButton && (
            <button
              className="dialog__button btn-secondary"
              onClick={handleClose}
              disabled={disableCloseButton}
            >
              {textClose}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dialog;
