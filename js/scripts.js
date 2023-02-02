// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase() === word.toLowerCase()) {
      wordCount++;
    }
  });
  return wordCount;
}

function textArray() {
  let paragraph = "zoinks, muppeteer, hello, biffaroni, matthew, billy, tyler, and loopdaloop";
  let array = [];
  paragraph = paragraph.replaceAll(",", "").toLowerCase(); 

  let badwords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  array = paragraph.split(" ");

  for (i = 0; i < badwords.length; i++) {
    for( j = 0; j < array.length; j++) {
      if (array[j] === badwords[i]) {
        array[j] = "bad";
      }
    }
  }
}

// UI Logic

function handleFormSubmission() {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});