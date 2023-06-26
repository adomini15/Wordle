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
  const [textHint, setTextHint] = useState("");

  const {
    message,
    isInvalid,
    WORD_LENGTH,
    MAX_PLAYS,
    gameOver,
    won,
    plays,
    checkAndMatch,
    cleanMessagesAndValidations,
  } = useWordle(); // WORDLE

  const handlePressKey = (key) => {
    cleanMessagesAndValidations();

    if (key == "ENTER") {
      if (checkAndMatch(textHint)) {
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
        maxAttemps={MAX_PLAYS}
        hint={textHint}
        attemps={plays}
      />
      <Keyboard>
        {keyNames.map((keyName) => {
          const className = `--${
            plays[plays.length - 1]?.find(([name]) => name == keyName)?.[1] ??
            ""
          }`;

          return (
            <Key
              key={keyName}
              name={keyName}
              onPress={handlePressKey}
              className={className}
            />
          );
        })}
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
