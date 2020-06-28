import { quoteLibrary, quoteIndexTracker } from './quotes.js';

const LOCAL_STORAGE_QUOTE_KEY = 'local.quotes';
const LOCAL_STORAGE_INDEX_KEY = 'local.quoteIndex';

const newQuoteBtn = document.querySelector('[data-btn-new-quotes]');
const allQuoteBtn = document.querySelector('[data-btn-all-quotes]');

let storedQuotes = [];
let storedIndex = [];
if (localStorage.getItem(LOCAL_STORAGE_QUOTE_KEY) == null) {
  console.log('No quotes in local storage. Adding quoteLibrary.');
  localStorage.setItem(LOCAL_STORAGE_QUOTE_KEY, JSON.stringify(quoteLibrary));
  localStorage.setItem(LOCAL_STORAGE_INDEX_KEY, JSON.stringify(quoteIndexTracker));
}
storedQuotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_QUOTE_KEY));
storedIndex = JSON.parse(localStorage.getItem(LOCAL_STORAGE_INDEX_KEY));
console.log('You have quotes.');

newQuoteBtn.addEventListener('click', () => {
  renderQuotes();
  saveToLocalStorage();
});

allQuoteBtn.addEventListener('click', () => {
  storedQuotes.forEach((quoteCategory) => {
    let categoryName = quoteCategory.category;
    let quoteContainer = document.querySelector(`[data-quote-${categoryName}]`);
    quoteContainer.innerHTML = '';
    quoteCategory.quotes.forEach((quoteText) => {
      let quoteElement = document.createElement('p');
      quoteElement.innerHTML = quoteText;
      quoteContainer.appendChild(quoteElement);
    });
  });
  allQuoteBtn.style.display = 'none';
});

function selectRandomQuote() {
  storedQuotes.forEach((quoteCategory) => {
    let categoryName = quoteCategory.category;
    let quoteElement = document.querySelector(`[data-quote-${categoryName}]`);
    let categoryQuoteArray = quoteCategory.quotes;
    let categoryIndex = storedQuotes.find((section) => section.category == categoryName).index;
    let currentQuoteIndex = storedIndex.find((section) => section.category == categoryName).currentIndex;
    quoteElement.innerHTML = categoryQuoteArray[currentQuoteIndex];

    //storedIndex update +1 or 0 if at last string
    if (storedIndex[categoryIndex].currentIndex == storedIndex[categoryIndex].categoryLength) {
      storedIndex[categoryIndex].currentIndex = 0;
    } else {
      storedIndex[categoryIndex].currentIndex += 1;
    }
    localStorage.setItem(LOCAL_STORAGE_INDEX_KEY, JSON.stringify(storedIndex));
  });
  allQuoteBtn.style.display = 'inline';
}

function renderQuotes() {
  selectRandomQuote();
  console.group('render() storedQuotes');
  console.log(storedIndex);
  console.groupEnd();
}

function saveToLocalStorage() {
  localStorage.setItem(LOCAL_STORAGE_QUOTE_KEY, JSON.stringify(storedQuotes));
}

renderQuotes();
