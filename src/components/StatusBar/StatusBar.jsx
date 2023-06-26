import React from "react";
import "./styles.css";

export function StatusBarItem({ title, iconClassName, scale, badgeColor }) {
  return (
    <li
      className={`status-bar__item ${
        scale > 0 ? "bounce-animate brightness-animate" : ""
      }`}
    >
      <div className="content">
        <i className={`${iconClassName} icon `}></i>

        <p>{title}</p>
      </div>
      <span className={`badge btn-${badgeColor}`}>{scale}</span>
    </li>
  );
}

function StatusBar({ children }) {
  return (
    <div className="status-bar">
      <ul>{children}</ul>
    </div>
  );
}

export default StatusBar;
