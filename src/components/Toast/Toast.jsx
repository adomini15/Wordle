import React from "react";
import "./styles.css";

const icons = {
  warning: "uil-exclamation-octagon",
  success: "uil-check-circle",
  light: "uil-comment-alt-exclamation",
  danger: "uil-exclamation-octagon",
};

function Toast({ children, color = "light", align = "left" }) {
  return (
    <div className={`toast toast--${color} toast--${align}`}>
      <i className={`toast__icon uil ${icons[color]}`}></i>
      <p className="toast__message">{children}</p>
    </div>
  );
}

export default Toast;
