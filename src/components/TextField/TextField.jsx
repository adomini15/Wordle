import React from "react";
import "./styles.css";

function TextField({
  type = "text",
  placeholder,
  name,
  onChange,
  className = "",
  value,
}) {
  return (
    <div className={`textfield ${className}`}>
      {/* <span className="icon">
        <i class="uil uil-user"></i>
      </span> */}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default TextField;
