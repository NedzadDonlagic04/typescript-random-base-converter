import './style.css';
import functions from './functions';

function init() {
  const numberToConvertEl = document.getElementById('convert') as HTMLSpanElement | null;
  const convertingFromBaseEl = document.getElementById('base-1') as HTMLSpanElement | null;
  const convertingToBaseEl = document.getElementById('base-2') as HTMLSpanElement | null;

  const guessInputEl = document.getElementById('guess-input') as HTMLInputElement | null;

  const answerStatusEl = document.getElementById('answer-status') as HTMLParagraphElement | null;
  const checkAnswerBtn = document.getElementById('check-answer') as HTMLButtonElement | null;
  const nextQuestionBtn = document.getElementById('next-question') as HTMLButtonElement | null;
  const showAnswerBtn = document.getElementById('show-answer') as HTMLButtonElement | null;

  if (!numberToConvertEl) throw new Error('No instance of element with id "convert"');
  else if (!convertingFromBaseEl) throw new Error('No instance of element with id "base-1"');
  else if (!convertingToBaseEl) throw new Error('No instance of element with id "base-2"');
  else if (!guessInputEl) throw new Error('No instance of element with id "guess-input"');
  else if (!answerStatusEl) throw new Error('No instance of element with id "answer-status"');
  else if (!checkAnswerBtn) throw new Error('No instance of element with id "check-answer"');
  else if (!nextQuestionBtn) throw new Error('No instance of element with id "next-question"');
  else if (!showAnswerBtn) throw new Error('No instance of element with id "show-answer"');

  return {
    numberToConvertEl,
    convertingFromBaseEl,
    convertingToBaseEl,
    guessInputEl,
    answerStatusEl,
    checkAnswerBtn,
    nextQuestionBtn,
    showAnswerBtn
  };
}

const {
  numberToConvertEl,
  convertingFromBaseEl,
  convertingToBaseEl,
  guessInputEl,
  answerStatusEl,
  checkAnswerBtn,
  nextQuestionBtn,
  showAnswerBtn
} = init();

let [numberToConvert, convertingFromBase, convertToBase] = functions.randomizeNumbers(numberToConvertEl, convertingFromBaseEl, convertingToBaseEl);

function switchButtons() {
  checkAnswerBtn.style.display = (checkAnswerBtn.style.display === 'none')? 'block' : 'none';
  nextQuestionBtn.style.display = (nextQuestionBtn.style.display === 'block')? 'none' : 'block';
}

checkAnswerBtn.addEventListener('click', () => {
  const doAnswersMatch = functions.checkIfAnswerIsCorrect(guessInputEl, numberToConvert, convertToBase);

  if (doAnswersMatch) {
    [numberToConvert, convertingFromBase, convertToBase] = functions.randomizeNumbers(numberToConvertEl, convertingFromBaseEl, convertingToBaseEl);

    guessInputEl.value = "";
    answerStatusEl.innerText = "";
    showAnswerBtn.style.display = "none";
  } else {
    answerStatusEl.innerText = "Wrong Answer!";
    showAnswerBtn.style.display = "block";
  }
});

showAnswerBtn.addEventListener('click', () => {
  answerStatusEl.innerText = "";

  guessInputEl.value = numberToConvert.toString(convertToBase);
  guessInputEl.disabled = true;

  switchButtons();
});

nextQuestionBtn.addEventListener('click', () => {
  [numberToConvert, convertingFromBase, convertToBase] = functions.randomizeNumbers(numberToConvertEl, convertingFromBaseEl, convertingToBaseEl);
  answerStatusEl.innerText = "";
  showAnswerBtn.style.display = "none";

  guessInputEl.value = "";
  guessInputEl.disabled = false;

  switchButtons();
});