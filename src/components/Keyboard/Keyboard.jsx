import React, { Children } from "react";
import "./styles.css";

export function Key({ name, className, onPress }) {
  const handlePress = () => {
    onPress(name);
  };

  return (
    <div className={`keyboard__key ${className}`} onClick={handlePress}>
      {name}
    </div>
  );
}

function Keyboard({ children }) {
  return <div className="keyboard">{children}</div>;
}

export default Keyboard;
