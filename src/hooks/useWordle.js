import { useContext } from "react";
import { WordleContext } from "../context/WordleContext";
export const useWordle = () => {
  const wordleContextValue = useContext(WordleContext);

  return wordleContextValue;
};
