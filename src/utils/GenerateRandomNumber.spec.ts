import { GenerateRandomNumber } from "./GenerateRandomNumber";

describe("Generate random number", () => {
  it("should be able to generate a random number between the provided range", () => {
    const randomNumber = GenerateRandomNumber.execute(10, 20);
    expect(randomNumber).toBeGreaterThanOrEqual(10);
    expect(randomNumber).toBeLessThanOrEqual(20);
  });
});
