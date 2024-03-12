function algorithmA(guess, correctWord) {
  //This makes the guess and correct word case sensitive
  guess = guess.toUpperCase();
  correctWord = correctWord.toUpperCase();

  //Array that will store feedback
  let result = [];

  //Loop that goes through each position of the correct word
  for (let i = 0; i < correctWord.length; i++) {
    const guessedLetter = guess[i];
    const correctLetter = correctWord[i];

    //Finds the index of the guessed letter in the correct word
    const correctIndex = correctWord.indexOf(guessedLetter);

    //Compares if the guessed letter is correct,
    // if so it adds the result with correct as result
    if (guessedLetter === correctLetter) {
      result.push({ letter: guessedLetter, result: "correct" });
    }
    // Checks if the guessed letter is incorrect. Uses split to convert string into array,
    // uses filter to see if theres more of the same letter, as L in Richards example,
    // Making two Ls become one L with correct and one with incorrect,
    // if theres only one L in the correct word
    else if (
      guess.split("").filter((char) => char === guessedLetter).length >
      correctWord.split("").filter((char) => char === guessedLetter).length
    ) {
      result.push({ letter: guessedLetter, result: "incorrect" });
    } else if (correctIndex !== i) {
      result.push({ letter: guessedLetter, result: "misplaced" });
    } else {
      result.push({ letter: guessedLetter, result: "incorrect" });
    }
  }

  return result;
}

const testRun = algorithmA("HALLÅ", "CYKLA");
console.log(testRun);

export default algorithmA;
