import algorithmA from "../../algorithmA";

describe("Algorithm A - Feedback", () => {
  // Test to check if the algorithm provides
  // correct feedback for misplaced, incorrect, and correct letters
  it("should handle misplaced, incorrect, and correct letters and provide right feedback", () => {
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

  // Test to check if the algorithm correctly handles correct letters and
  // provides the right feedback
  it("should handle correct letters and provide correct feedback", () => {
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

  // Test to check if the algorithm correctly handles incorrect letters and
  // provides the right feedback
  it("should handle incorrect guesses", () => {
    const guess = "AAAA";
    const correctWord = "TEST";

    const feedback = algorithmA(guess, correctWord);
    expect(feedback).to.deep.equal([
      { letter: "A", result: "incorrect" },
      { letter: "A", result: "incorrect" },
      { letter: "A", result: "incorrect" },
      { letter: "A", result: "incorrect" },
    ]);
  });
});
