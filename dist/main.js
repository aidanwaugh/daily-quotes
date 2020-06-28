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
  renderQuotes();
  saveToLocalStorage();
});

function selectRandomQuote() {
  storedQuotes.forEach((quoteCategory) => {
    let categoryLength = quoteCategory.quotes.length;
    let categoryQuoteArray = quoteCategory.quotes;
    let categoryName = quoteCategory.category;

    if (categoryLength === 0) {
      console.log(`${categoryName} is empty. fullQuoteCategory BEL`);

      let fullQuoteCategory = quoteLibrary.find(
        (section) => section.category === categoryName
      );

      // console.log(fullQuoteCategory.quotes);
      let fullQuoteArray = fullQuoteCategory.quotes;
      categoryQuoteArray = fullQuoteArray.slice();
      console.log('BE FULL ' + categoryName + ' : ' + categoryQuoteArray);
      saveToLocalStorage();
      //TODO: set to local storage
    }
    let quoteIndex = Math.floor(Math.random() * categoryLength);
    // console.log(`${quoteCategory.category} ${quoteIndex}/${categoryLength}`);
    let quoteElement = document.querySelector(
      `[data-quote-${quoteCategory.category}]`
    );
    quoteElement.innerHTML = categoryQuoteArray[quoteIndex];
    categoryQuoteArray.pop(quoteIndex);
  });
}

function resetQuoteCategory(quoteCategory) {
  quoteCategory = quoteLibrary.category.quotes;
}

function renderQuotes() {
  selectRandomQuote();
  console.group('render() storedQuotes');
  console.log(storedQuotes);
  console.groupEnd();
}

function saveToLocalStorage() {
  localStorage.setItem(LOCAL_STORAGE_QUOTE_KEY, JSON.stringify(storedQuotes));
}

function saveAndRender() {
  saveToLocalStorage();
  renderQuotes();
}

renderQuotes();
