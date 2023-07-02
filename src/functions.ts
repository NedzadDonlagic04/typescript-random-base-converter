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

function generateNumberForConversion(min: number = 0, max: number = 300): number {
  return generateRandomNum(min, max);
}

function randomizeNumbers(numberToConvertEl: HTMLSpanElement, convertingFromBaseEl: HTMLSpanElement, convertingToBaseEl: HTMLSpanElement, bases: number[]): number[] {
  const convertingFromBase: number = getRandomBase(bases);
  const convertToBase: number = getRandomBase(bases);
  const numberToConvert: number = generateNumberForConversion();

  bases = [...constants.BASES];

  numberToConvertEl.innerText = numberToConvert + "";
  convertingFromBaseEl.innerText = convertingFromBase + "";
  convertingToBaseEl.innerText = convertToBase + "";

  return [numberToConvert, convertingFromBase, convertToBase];
}

export default {
  randomizeNumbers
};
