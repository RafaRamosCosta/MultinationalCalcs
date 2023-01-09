import { FormatDecimalPlaces } from "./FormatDecimalPlaces";

describe("Format Decimal Places", () => {
  it("should be able to format a number to have two decimal places", () => {
    expect(FormatDecimalPlaces.execute(123.45678)).toEqual(123.46);
  });
});
