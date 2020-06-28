import { quoteLibrary } from './quotes.js';

const LOCAL_STORAGE_QUOTE_KEY = 'local.quotes';

const newQuoteBtn = document.querySelector('[data-btn-new-quotes]');
const allQuoteBtn = document.querySelector('[data-btn-all-quotes]');

let storedQuotes = [];
if (localStorage.getItem(LOCAL_STORAGE_QUOTE_KEY) == null) {
  console.log('No quotes in local storage. Adding quoteLibrary.');
  localStorage.setItem(LOCAL_STORAGE_QUOTE_KEY, JSON.stringify(quoteLibrary));
}
storedQuotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_QUOTE_KEY));
console.log('You have quotes.');

newQuoteBtn.addEventListener('click', () => {
  console.log('random butn');
  storedQuotes.push('FOO');
  saveToLocalStorage();
  renderQuotes();
});

function renderQuotes() {
  console.log(storedQuotes);
}

function saveToLocalStorage() {
  localStorage.setItem(LOCAL_STORAGE_QUOTE_KEY, JSON.stringify(storedQuotes));
}

function saveAndRender() {
  saveToLocalStorage();
  renderQuotes();
}

renderQuotes();
