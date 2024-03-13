const selectWord = require("./algorithmB");

describe("Algorithm B - Word Selection", () => {
  it("should select a random word of the desired length with unique letters", () => {
    const wordList = ["apple", "banana", "orange", "grape"];
    const selectedWord = selectWord(wordList, 6, true);

    expect(selectedWord).toHaveLength(6);
  });

  it("should throw an error when no matching words are found", () => {
    const wordList = ["apple", "banana", "orange", "grape"];

    const callSelectWord = () => selectWord(wordList, 8, true);

    expect(callSelectWord).toThrowError("No matching words found.");
  });
});

// Test where unique letters are false

// test to add more words to wordlist

/*
1. Red: Write a Failing Test
2. Green: Write the Minimum Code to Pass the Test
3. Refactor: Improve Code Without Changing Functionality
4. Repeat: Iterate the Cycle
*/
