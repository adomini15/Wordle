export const removeLastLetter = (word) => {
  return word.slice(0, word.length - 1);
};

export const addNewLetter = (word, letter) => {
  return word + letter;
};

export function getRandomElement(array) {
  const lastIndex = array.length - 1;

  const randomIndex = Math.floor(Math.random() * lastIndex);

  return array[randomIndex];
}
