export function getRandomNumbers() {
  const numbers = Array.from({ length: 9 }, (_, index) => index);
  const randomizedNumbers = [];

  while (numbers.length > 0) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const randomValue = numbers.splice(randomIndex, 1)[0];
    randomizedNumbers.push(randomValue);
  }

  return randomizedNumbers;
}