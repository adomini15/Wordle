import { createContext, useEffect, useMemo, useState } from "react";
import {
  verifyInput,
  matchWordle,
  getRandomWord,
  WORD_LENGTH,
  MAX_PLAYS,
} from "../utils/wordle";

export const WordleContext = createContext();

export const WordleProvider = ({ children }) => {
  const [message, setMessage] = useState(null);
  const [isInvalid, setIsInvalid] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [plays, setPlays] = useState([]);
  const [won, setWon] = useState(false);
  const [answer, setAnswer] = useState();
  const [wins, setWins] = useState(0);
  const [lost, setLost] = useState(0);
  const [playerName, setPlayerName] = useState(null);

  useEffect(() => {
    const randomWord = getRandomWord();
    console.log(randomWord);
    setAnswer(randomWord);
  }, []);

  const reset = () => {
    setMessage(null);
    setIsInvalid(false);
    setGameOver(false);
    setPlays([]);
    setWon(false);

    const randomWord = getRandomWord();
    console.log(randomWord);
    setAnswer(randomWord);
  };

  const checkAndMatch = (word) => {
    const { status, message } = verifyInput(word);

    if (status == "invalid") {
      setIsInvalid(true);
      setMessage(message);
      return null;
    }

    cleanMessagesAndValidations();

    const play = matchWordle(word, answer);
    const updatedPlays = [...plays, play];

    if (play.every(([_, status]) => status == "IN_SPOT")) {
      setWins(wins + 1);
      setWon(true);
    } else if (updatedPlays.length >= MAX_PLAYS) {
      setLost(lost + 1);
      setGameOver(true);
    }

    setPlays(updatedPlays);

    return true;
  };

  const cleanMessagesAndValidations = () => {
    setIsInvalid(false);
    setMessage(null);
  };

  return (
    <WordleContext.Provider
      value={{
        message,
        isInvalid,
        WORD_LENGTH,
        MAX_PLAYS,
        gameOver,
        won,
        plays,
        wins,
        lost,
        playerName,
        checkAndMatch,
        cleanMessagesAndValidations,
        reset,
        setPlayerName,
      }}
    >
      {children}
    </WordleContext.Provider>
  );
};
