import { getRandomElement } from "./functions";
import words from "./words.json";

export const WORD_LENGTH = 5;
export const MAX_PLAYS = 6;

export const getRandomWord = () => {
  return getRandomElement(words);
};

const exists = (word) => {
  return words.some((_word) => _word == word);
};

const fitNumberOfLetters = (word) => {
  return word.length == WORD_LENGTH;
};

export const verifyInput = (word) => {
  let info = {
    status: "valid",
  };

  if (!fitNumberOfLetters(word)) {
    info = {
      status: "invalid",
      message: "Not enough letters.",
    };
  } else if (!exists(word)) {
    info = {
      status: "invalid",
      message: "Not word in list.",
    };
  }

  return info;
};

export function matchWordle(hint, answer) {
  const statuses = [];
  const memo = {};

  for (
    let hintLetterIndex = 0;
    hintLetterIndex < hint.length;
    hintLetterIndex++
  ) {
    if (hint[hintLetterIndex] == answer[hintLetterIndex]) {
      statuses.push([hint[hintLetterIndex], "IN_SPOT"]);
    } else {
      if (!(hint[hintLetterIndex] in memo)) {
        memo[hint[hintLetterIndex]] = answer.indexOf(hint[hintLetterIndex]);
      }

      const index = memo[hint[hintLetterIndex]];

      if (index >= 0) {
        statuses.push([hint[hintLetterIndex], "INCLUDED"]);
      } else {
        statuses.push([hint[hintLetterIndex], "NOT_INCLUDED"]);
      }
    }
  }

  return statuses;
}
