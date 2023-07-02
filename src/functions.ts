import constants from './constants';

function generateRandomNum(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomBase(bases: number[]): number {
  const index = generateRandomNum(0, bases.length - 1);
  const base = bases[index];

  bases.splice(index, 1);

  return base;
}

function generateNumberForConversion(min: number = 0, max: number = 1000): number {
  return generateRandomNum(min, max);
}

function randomizeNumbers(numberToConvertEl: HTMLSpanElement, convertingFromBaseEl: HTMLSpanElement, convertingToBaseEl: HTMLSpanElement): number[] {
  const bases: number[] = [...constants.BASES];

  const convertingFromBase: number = getRandomBase(bases);
  const convertToBase: number = getRandomBase(bases);
  const numberToConvert: number = generateNumberForConversion();

  numberToConvertEl.innerText = numberToConvert.toString(convertingFromBase).toUpperCase();
  convertingFromBaseEl.innerText = convertingFromBase + "";
  convertingToBaseEl.innerText = convertToBase + "";

  return [numberToConvert, convertingFromBase, convertToBase];
}

function checkIfAnswerIsCorrect(answerInputEl: HTMLInputElement, correctAnswer: number, convertToBase: number): boolean {
  const answer: string = answerInputEl.value;

  try {
    const convertedValue = parseInt(answer, convertToBase);

    return correctAnswer === convertedValue;
  } catch (err: any) {
    console.error(err);
    return false;
  }
}

export default {
  randomizeNumbers,
  checkIfAnswerIsCorrect
};
