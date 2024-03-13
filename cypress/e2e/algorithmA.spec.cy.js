import algorithmA from "../../algorithmA";

describe("Algorithm A - Feedback", () => {
  /*
  Test to check if the algorithm provides
   correct feedback for misplaced, incorrect, and correct letters at the same time
  */
  it("should handle misplaced, incorrect, and correct letters and provide right feedback", () => {
    const feedback = algorithmA("HALLÅ", "CYKLA");

    expect(feedback).to.deep.equal([
      { letter: "H", result: "incorrect" },
      { letter: "A", result: "misplaced" },
      { letter: "L", result: "incorrect" },
      { letter: "L", result: "correct" },
      { letter: "Å", result: "incorrect" },
    ]);
  });

  /* 
  Test to check if the algorithm correctly handles correct letters and
  provides the right feedback 
  */

  it("should handle correct letters and provide correct feedback", () => {
    const feedback = algorithmA("TEST", "TEST");

    expect(feedback).to.deep.equal([
      { letter: "T", result: "correct" },
      { letter: "E", result: "correct" },
      { letter: "S", result: "correct" },
      { letter: "T", result: "correct" },
    ]);
  });

  /*
  Test to check if the algorithm correctly handles incorrect letters and
  provides the right feedback
  */
  it("should handle incorrect guesses", () => {
    const feedback = algorithmA("AAAA", "TEST");

    expect(feedback).to.deep.equal([
      { letter: "A", result: "incorrect" },
      { letter: "A", result: "incorrect" },
      { letter: "A", result: "incorrect" },
      { letter: "A", result: "incorrect" },
    ]);
  });
});
