const selectWord = require("./algorithmB");

describe("Algorithm B - Word Selection", () => {
  it("should select a random word of the desired length with unique letters", () => {
    const wordList = ["bmw", "audi", "volvo", "volkswagen"];
    const selectedWord = selectWord(wordList, 3, true);

    expect(selectedWord).toHaveLength(3);
  });
});
