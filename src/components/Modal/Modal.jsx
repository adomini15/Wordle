import React, { useEffect, useState } from "react";
import "./styles.css";
import Portal from "../Portal/Portal";

function Modal({ overlayOpacity, children, animate, isOpen }) {
  return (
    <>
      {isOpen && (
        <Portal>
          <div className="modal">
            <div
              className="modal__overlay"
              style={{ opacity: overlayOpacity }}
            ></div>
            <div className="modal__container">{children}</div>
          </div>
        </Portal>
      )}
    </>
  );
}

export default Modal;
