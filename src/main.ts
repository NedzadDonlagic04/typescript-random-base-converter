import './style.css';
import functions from './functions';
import constants from './constants';

let bases: number[] = [...constants.BASES];

function init() {
  const numberToConvertEl = document.getElementById('convert') as HTMLSpanElement | null;
  const convertingFromBaseEl = document.getElementById('base-1') as HTMLSpanElement | null;
  const convertingToBaseEl = document.getElementById('base-2') as HTMLSpanElement | null;

  if (!numberToConvertEl) throw new Error('No instance of element with id "convert"');
  else if (!convertingFromBaseEl) throw new Error('No instance of element with id "base-1"');
  else if (!convertingToBaseEl) throw new Error('No instance of element with id "base-2"');

  return { numberToConvertEl, convertingFromBaseEl, convertingToBaseEl };
}

const { numberToConvertEl, convertingFromBaseEl, convertingToBaseEl } = init();


const [numberToConvert, convertingFromBase, convertToBase] = functions.randomizeNumbers(numberToConvertEl, convertingFromBaseEl, convertingToBaseEl, bases);

console.log(numberToConvert, convertingFromBase, convertToBase);
