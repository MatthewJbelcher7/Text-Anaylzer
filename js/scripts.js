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
  if (word.trim().length === 0) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordOccurences = [];
  let indexArray = [];
  let combinedAns = [];
  let wordCount = 0;
  let indexCount = 0;

  textArray.forEach(function(element) {
    if (wordOccurences.includes(element.toLowerCase())) {
      return;
    } else {
      wordOccurences.push(element);
    }
  });

  wordOccurences.forEach(function(element) {
    textArray.forEach(function(element2) {
      if (element === element2) {
        indexCount++
      }
    });
    indexArray.push(indexCount);
    indexCount = 0;
  });

  for (i = 0; i < wordOccurences.length; i++) {
    combinedAns.push(wordOccurences[i] + ": " + indexArray[i]);
  }
  combinedAns.sort()
  console.log(combinedAns.reverse());

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

