// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);

var quotes = [
  {
    quote: "Some rise by sin, and some by virtue fall.",
    source: "Escalus",
    date: "1604",
    tag: "comedy"
  },
  {
    quote: "I would give all my fame for a pot of ale, and safety.",
    source: "Boy",
    citation: "Henry V",
    date: "1599",
    tag: "politics"
  },
  {
    quote:
      "I do love nothing in the world so well as you: is not that strange?",
    source: "Benedick",
    date: "1599",
    tag: "comedy"
  },
  {
    quote: "Words are very rascals.",
    source: "Fool",
    citation: "Twelfth Night",
    date: "1602",
    tag: "romance"
  },
  {
    quote: "Give every man thy ear, but few thy voice.",
    source: "Polonius"
  },
  {
    quote: "The course of true love never did run smooth.",
    source: "Lysander"
  },
  {
    quote: "All that glisters is not gold.",
    source: "The Prince of Morocco",
    citation: "The Merchant of Venice"
  },
  {
    quote: "[Thine] face is not worth sunburning.",
    source: "King Henry",
    citation: "Henry V",
    date: "1599",
    tag: "politics"
  },
  {
    quote: "I love you with so much of my heart that none is left to protest.",
    source: "Beatrice",
    citation: "Much Ado About Nothing",
    date: "1599",
    tag: "comedy"
  },
  {
    quote:
      "No beast so fierce but knows some touch of pity. But I know none, and therefore am no beast.",
    source: "Richard",
    citation: "Richard III",
    date: "1593",
    tag: "tragedy"
  }
];

// global variable for auto-refresh timeout
let nIntervID;

// call the printQuote function to display a random quote in the browser
printQuote();

function getRandomQuote(numberOfQuotes) {
  // generate a random number between 0 and "the number of quotes -1"
  var randomNumber = Math.floor(Math.random() * numberOfQuotes);
  // return the corresponding array element
  return quotes[randomNumber];
}

function printQuote() {
  // create a variable by calling getRandomQuote and passing to it
  // the number of quotes in the array
  var selectedQuote = getRandomQuote(quotes.length);
  var quoteString = "";
  quoteString += '<p class="quote">' + selectedQuote.quote + "</p>";
  quoteString += '<p class="source">' + selectedQuote.source;
  if (selectedQuote.citation) {
    quoteString +=
      '<span class="citation">' + selectedQuote.citation + "</span>";
  }
  if (selectedQuote.date) {
    quoteString += '<span class="year">' + selectedQuote.date + "</span>";
  }
  if (selectedQuote.tag) {
    quoteString += '<span class="tag">' + selectedQuote.tag + "</span>";
  }
  quoteString += "</p>";
  // assign quoteString to the innerHTML of the "quote-box" div
  document.getElementById("quote-box").innerHTML = quoteString;
  // call the function to randomly change the background color
  changeBackgroundColor();
  autoRefresh();
}

function changeBackgroundColor() {
  var backgroundColor =
    "rgb(" +
    randomNumberForRGB() +
    "," +
    randomNumberForRGB() +
    "," +
    randomNumberForRGB() +
    ")";
  document.body.style.backgroundColor = backgroundColor;
}

function randomNumberForRGB() {
  return Math.floor(Math.random() * 256);
}

// function to auto-refresh the browser window every 10 seconds
// with a new quote if the button has not been clicked
function autoRefresh() {
  clearInterval(nIntervID);
  nIntervID = window.setInterval(printQuote, 10000);
}
