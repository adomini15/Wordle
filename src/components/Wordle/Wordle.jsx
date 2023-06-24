import React, { useState } from "react";
import "./styles.css";
import { useWordle } from "../../hooks/useWordle";
import { Keyboard, Key, Toast, Playground } from "..";
import { addNewLetter, removeLastLetter } from "../../utils/functions";

const keyNames = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "ENTER",
  "DELETE",
];

function Wordle({ className }) {
  const {
    message,
    isInvalid,
    WORD_LENGTH,
    checkAndMatch,
    cleanMessagesAndValidations,
  } = useWordle();
  const [textHint, setTextHint] = useState("");
  const [attemps, setAttemps] = useState([]);

  const handlePressKey = (key) => {
    cleanMessagesAndValidations();

    if (key == "ENTER") {
      const feedback = checkAndMatch(textHint);

      if (feedback) {
        setAttemps([...attemps, feedback]);
        setTextHint("");
      }
    } else if (key == "DELETE") {
      setTextHint(removeLastLetter(textHint));
    } else if (textHint.length < WORD_LENGTH) {
      setTextHint(addNewLetter(textHint, key));
    }
  };

  return (
    <div className={`wordle ${className}`}>
      <Playground
        maxLetters={WORD_LENGTH}
        maxAttemps={6}
        hint={textHint}
        attemps={attemps}
      />
      <Keyboard>
        {keyNames.map((keyName) => (
          <Key
            key={keyName}
            name={keyName}
            onPress={handlePressKey}
            className={`--${attemps[attemps.length - 1]?.[keyName] ?? ""}`}
          />
        ))}
      </Keyboard>

      {isInvalid && (
        <Toast color="danger" align="middle">
          {message}
        </Toast>
      )}
    </div>
  );
}

export default Wordle;
