// algorithmB.test.js

const selectWord = require("./algorithmB");

describe("Algorithm B - Word Selection", () => {
  it("should select a random word of the desired length with unique letters", () => {
    const wordList = ["apple", "banana", "orange", "grape"];
    const selectedWord = selectWord(wordList, 6, true);

    expect(selectedWord).toHaveLength(6);
  });

  it("should throw an error when no matching words with unique letters are found", () => {
    const wordList = ["apple", "banana", "orange", "grape"];

    const callSelectWord = () => selectWord(wordList, 8, true);

    expect(callSelectWord).toThrowError("No matching words found.");
  });

  it("should select a random word of the desired length without unique letters", () => {
    const wordList = ["apple", "banana", "orange", "grape"];
    const selectedWord = selectWord(wordList, 6, false);

    expect(selectedWord).toHaveLength(6);
  });

  it("should throw an error when no matching words without unique letters are found", () => {
    const wordList = ["apple", "banana", "orange", "grape"];

    const callSelectWord = () => selectWord(wordList, 8, false);

    expect(callSelectWord).toThrowError("No matching words found.");
  });

  it("should throw an error when wordList is empty", () => {
    const wordList = [];
    const callSelectWord = () => selectWord(wordList, 5, true);
    expect(callSelectWord).toThrowError("No matching words found.");
  });

  it("should throw an error when no matching words are found for the given length", () => {
    const wordList = ["apple", "banana", "orange", "grape"];
    const callSelectWord = () => selectWord(wordList, -5, true);
    expect(callSelectWord).toThrowError("Invalid length parameter");
  });
});
