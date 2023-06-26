import React from "react";
import "./styles.css";

const Letter = ({ status, content }) => {
  return (
    <div
      className={`playground__letter ${
        content
          ? `playground__letter--${status ? status : "completed"} ${
              status ? "bounce-animate brightness-animate" : ""
            }`
          : "dashed"
      }`}
    >
      {content}
    </div>
  );
};

const Word = ({ maxLetters, attemp, hint }) => {
  const letters = [];

  for (let i = 0; i < maxLetters; i++) {
    const props = {
      key: i,
    };

    if (attemp) {
      const [letter, status] = attemp[i];

      props["status"] = status;
      props["content"] = letter;
    } else if (i < hint.length) {
      props["content"] = hint[i];
    }

    letters.push(<Letter {...props} />);
  }

  return <div className="playground__word">{letters}</div>;
};

const Playground = ({ maxLetters, hint, maxAttemps, attemps }) => {
  const words = [];

  for (let i = 0; i < maxAttemps; i++) {
    const props = {
      maxLetters,
      attemp: i < attemps.length ? attemps[i] : null,
      hint: i == attemps.length ? hint : "",
      key: i,
    };

    words.push(<Word {...props} />);
  }

  return <div className="playground">{words}</div>;
};

export default Playground;
