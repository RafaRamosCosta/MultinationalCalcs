import { AppError } from "../../erros/AppError";
import { CalculateGrossSalary } from "./CalculateGrossSalary";

describe("Calculate gross salary", () => {
  it("should be able to calculate the gross salary", () => {
    const grossSalary = CalculateGrossSalary.execute({
      minimumSalary: 800,
      workedHours: 75,
      workCoefficient: 0.13,
    });
    expect(grossSalary).toBeTruthy();
  });

  it("should throw an error if the coeficient is 0", () => {
    expect(async () =>
      CalculateGrossSalary.execute({
        minimumSalary: 800,
        workedHours: 75,
        workCoefficient: 0,
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
