import React from "react";
import "./styles.css";

function NavBar({ children, className = "" }) {
  return <div className={`navbar ${className}`}>{children}</div>;
}

export default NavBar;
