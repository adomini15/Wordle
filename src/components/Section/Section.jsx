import React, { useState } from "react";
import "./styles.css";
import { Wordle, Modal, Prompt } from "..";

function Section() {
  return (
    <div className="section">
      <Wordle className="container" />
    </div>
  );
}

export default Section;
