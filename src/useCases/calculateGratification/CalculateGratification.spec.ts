import { CalculateGratification } from "./CalculateGratification";

describe("Calculate gratification", () => {
  it("should be R$ 1200,00 if the employee fulfill all the requirements", () => {
    const gratification = CalculateGratification.execute({
      workShifts: ["matutino"],
      workedHours: 81,
    });
    expect(gratification).toEqual(1200.0);
  });

  it("should be R$ 465,00 if the employee doesn't work at the morning", () => {
    const gratification = CalculateGratification.execute({
      workShifts: ["vespertino"],
      workedHours: 81,
    });
    expect(gratification).toEqual(465.0);
  });

  it("should be R$ 465,00 if the employee doesn't work more than 80 hours", () => {
    const gratification = CalculateGratification.execute({
      workShifts: ["matutino"],
      workedHours: 70,
    });
    expect(gratification).toEqual(465.0);
  });

  it("should trhow an error if the worked hours are less than or equal to 0", () => {
    expect(() =>
      CalculateGratification.execute({
        workShifts: ["matutino"],
        workedHours: 0,
      })
    ).toThrowError();
  });
});
