import { getRandomElement } from "./functions";
import words from "./words.json";

export const WORD_LENGTH = 5;

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

  for (let i = 0; i < hint.length; i++) {
    const matches = [...answer.matchAll(hint[i])];
    let status = "NOT_INCLUDED";

    if (matches.length) {
      for (let match of matches) {
        const index = match["index"];
        const letter = match[0];

        if (hint[index] == letter) {
          if (!statuses[index]) {
            status = "IN_SPOT";
          }
        } else {
          status = "INCLUDED";
        }

        statuses.push(status);
      }
    } else {
      statuses.push(status);
    }
  }

  const result = {};

  for (let i = 0; i < hint.length; i++) {
    result[hint[i]] = statuses[i];
  }

  return result;
}
