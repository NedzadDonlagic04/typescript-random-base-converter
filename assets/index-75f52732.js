(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y=[2,8,10,16],b={BASES:y};function v(n,t){return n=Math.ceil(n),t=Math.floor(t),Math.floor(Math.random()*(t-n+1))+n}function E(n){const t=v(0,n.length-1),o=n[t];return n.splice(t,1),o}function T(n=0,t=1e3){return v(n,t)}function N(n,t,o){const s=[...b.BASES],e=E(s),r=E(s),c=T();return n.innerText=c.toString(e).toUpperCase(),t.innerText=e+"",o.innerText=r+"",[c,e,r]}function I(n,t,o){const s=n.value;try{const e=parseInt(s,o);return t===e}catch(e){return console.error(e),!1}}const a={randomizeNumbers:N,checkIfAnswerIsCorrect:I};function A(){const n=document.getElementById("convert"),t=document.getElementById("base-1"),o=document.getElementById("base-2"),s=document.getElementById("guess-input"),e=document.getElementById("answer-status"),r=document.getElementById("check-answer"),c=document.getElementById("show-answer");if(n)if(t)if(o)if(s)if(e)if(r){if(!c)throw new Error('No instance of element with id "show-answer"')}else throw new Error('No instance of element with id "check-answer"');else throw new Error('No instance of element with id "answer-status"');else throw new Error('No instance of element with id "guess-input"');else throw new Error('No instance of element with id "base-2"');else throw new Error('No instance of element with id "base-1"');else throw new Error('No instance of element with id "convert"');return{numberToConvertEl:n,convertingFromBaseEl:t,convertingToBaseEl:o,guessInputEl:s,answerStatusEl:e,checkAnswerBtn:r,showAnswerBtn:c}}const{numberToConvertEl:w,convertingFromBaseEl:h,convertingToBaseEl:g,guessInputEl:i,answerStatusEl:u,checkAnswerBtn:l,showAnswerBtn:d}=A();let[f,p,m]=a.randomizeNumbers(w,h,g);function B(){a.checkIfAnswerIsCorrect(i,f,m)?([f,p,m]=a.randomizeNumbers(w,h,g),i.value="",u.innerText="",d.style.display="none"):(u.innerText="Wrong Answer!",d.style.display="block")}function x(){[f,p,m]=a.randomizeNumbers(w,h,g),u.innerText="",d.style.display="none",i.value="",i.disabled=!1,l.innerText="Check",l.onclick=B}d.addEventListener("click",()=>{u.innerText="",i.value=f.toString(m),i.disabled=!0,l.innerText="Next",l.onclick=x});l.onclick=B;