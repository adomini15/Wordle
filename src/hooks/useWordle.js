import { useEffect, useMemo, useState } from "react";
import {
  verifyInput,
  matchWordle,
  getRandomWord,
  WORD_LENGTH,
} from "../utils/wordle";

export const useWordle = () => {
  const [message, setMessage] = useState(null);
  const [isInvalid, setIsInvalid] = useState(false);
  const answer = useMemo(() => {
    return getRandomWord();
  }, []);

  const checkAndMatch = (word) => {
    const { status, message } = verifyInput(word);

    if (status == "invalid") {
      setIsInvalid(true);
      setMessage(message);
      return null;
    }

    cleanMessagesAndValidations();

    return matchWordle(word, answer);
  };

  const cleanMessagesAndValidations = () => {
    setIsInvalid(false);
    setMessage(null);
  };

  return {
    message,
    isInvalid,
    checkAndMatch,
    cleanMessagesAndValidations,
    WORD_LENGTH,
  };
};
