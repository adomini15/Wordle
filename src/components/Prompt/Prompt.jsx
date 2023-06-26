import React from "react";
import Dialog from "../Dialog/Dialog";
import TextField from "../TextField/TextField";

function Prompt({
  title,
  onSubmit,
  onClose,
  textSubmit = "submit",
  textClose = "close",
  disableSubmitButton = false,
  disableCloseButton = false,
  showSubmitButton = true,
  showCloseButton = true,
  placeholder,
  onInputChange,
  value,
}) {
  const dialogProps = {
    title,
    onSubmit,
    onClose,
    textSubmit,
    textClose,
    disableCloseButton,
    disableSubmitButton,
    showCloseButton,
    showSubmitButton,
  };

  return (
    <Dialog {...dialogProps}>
      <TextField
        type="text"
        placeholder={placeholder}
        onChange={onInputChange}
        value={value}
      />
    </Dialog>
  );
}

export default Prompt;
