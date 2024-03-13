const algorithmA = require("./algorithmA");

describe("Algorithm A - Feedback", () => {
  it("should handle misplaced, incorrect, and correct letters and provide right feedback", () => {
    const feedback = algorithmA("HALLÅ", "CYKLA");

    expect(feedback).toEqual([
      { letter: "H", result: "incorrect" },
      { letter: "A", result: "misplaced" },
      { letter: "L", result: "incorrect" },
      { letter: "L", result: "correct" },
      { letter: "Å", result: "incorrect" },
    ]);
  });

  it("should handle correct letters and provide correct feedback", () => {
    const feedback = algorithmA("TEST", "TEST");

    expect(feedback).toEqual([
      { letter: "T", result: "correct" },
      { letter: "E", result: "correct" },
      { letter: "S", result: "correct" },
      { letter: "T", result: "correct" },
    ]);
  });

  it("should handle incorrect guesses", () => {
    const feedback = algorithmA("AAAA", "TEST");

    expect(feedback).toEqual([
      { letter: "A", result: "incorrect" },
      { letter: "A", result: "incorrect" },
      { letter: "A", result: "incorrect" },
      { letter: "A", result: "incorrect" },
    ]);
  });
});
