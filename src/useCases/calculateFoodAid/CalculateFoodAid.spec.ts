import { FormatDecimalPlaces } from "@utils/FormatDecimalPlaces";
import { CalculateFoodAid } from "./CalculateFoodAid";

describe("Calculate food aid", () => {
  it("should be half of the gross amount if the employeeRole is 'operario' and the coeficient is higher than 25%", () => {
    const foodAid = CalculateFoodAid.execute({
      employeeRole: "operario",
      workCoefficient: 0.25,
      grossSalary: 2000,
    });
    expect(foodAid).toEqual(2000 / 2);
  });

  it("should be a third of the gross amount if the employeeRole is 'gerente'", () => {
    const foodAid = CalculateFoodAid.execute({
      employeeRole: "gerente",
      workCoefficient: 0.25,
      grossSalary: 2000,
    });
    expect(foodAid).toEqual(FormatDecimalPlaces.execute(2000 / 3));
  });

  it("should be a third of the gross amount if the coeficient is lower than 25%", () => {
    const foodAid = CalculateFoodAid.execute({
      employeeRole: "operario",
      workCoefficient: 0.2,
      grossSalary: 2000,
    });
    expect(foodAid).toEqual(FormatDecimalPlaces.execute(2000 / 3));
  });
});
