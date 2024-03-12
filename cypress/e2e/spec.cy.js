import algorithmA from "../../algorithmA";
describe("Algorithm A - Feedback", () => {
  it("should handle misplaced, incorrect and correct letters and give feedback", () => {
    const guess = "HALLÅ";
    const correctWord = "CYKLA";

    const feedback = algorithmA(guess, correctWord);

    expect(feedback).to.deep.equal([
      { letter: "H", result: "incorrect" },
      { letter: "A", result: "misplaced" },
      { letter: "L", result: "incorrect" },
      { letter: "L", result: "correct" },
      { letter: "Å", result: "incorrect" },
    ]);
  });

  it("should handle incorrect letters", () => {
    const guess = "PLUGG";
    const correctWord = "WORDLE";

    const feedback = algorithmA(guess, correctWord);

    expect(feedback).to.deep.equal([
      { letter: "P", result: "incorrect" },
      { letter: "L", result: "incorrect" },
      { letter: "U", result: "incorrect" },
      { letter: "G", result: "incorrect" },
      { letter: "G", result: "incorrect" },
    ]);
  });

  it("should handle correct guesses", () => {
    const guess = "TEST";
    const correctWord = "TEST";

    const feedback = algorithmA(guess, correctWord);
    expect(feedback).to.deep.equal([
      { letter: "T", result: "correct" },
      { letter: "E", result: "correct" },
      { letter: "S", result: "correct" },
      { letter: "T", result: "correct" },
    ]);
  });
});
