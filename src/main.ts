import './style.css';

function init() {
  const numberToConvertEl = document.getElementById('convert') as HTMLSpanElement | null;
  const currentBaseEl = document.getElementById('base-1') as HTMLSpanElement | null;
  const wantedBaseEl = document.getElementById('base-2') as HTMLSpanElement | null;

  if (!numberToConvertEl) throw new Error('No instance of element with id "convert"');
  else if (!currentBaseEl) throw new Error('No instance of element with id "base-1"');
  else if (!wantedBaseEl) throw new Error('No instance of element with id "base-2"');

  return { numberToConvertEl, currentBaseEl, wantedBaseEl };
}

console.log(init());
