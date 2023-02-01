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

  
  console.log(array);
}

textArray();

