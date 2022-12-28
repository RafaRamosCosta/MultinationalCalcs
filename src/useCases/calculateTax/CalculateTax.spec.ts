import { AppError } from "../../errors/AppError";
import { CalculateTax } from "./CalculateTax";

describe("Calculate tax", () => {
  it("should return 13% if the employee role is 'operário' and his gross salary is higher or equal to R$ 945,00", () => {
    const tax = CalculateTax.execute({
      grossSalary: 1000,
      employeeRole: "operario",
    });
    expect(tax).toEqual(0.13);
  });

  it("should return 7% if the employee role is 'operário' and his gross salary is lower than R$ 945,00", () => {
    const tax = CalculateTax.execute({
      grossSalary: 900,
      employeeRole: "operario",
    });
    expect(tax).toEqual(0.07);
  });

  it("should return 15% if the employee role is 'gerente' and his gross salary is higher or equal to R$ 1520,00", () => {
    const tax = CalculateTax.execute({
      grossSalary: 1600,
      employeeRole: "gerente",
    });
    expect(tax).toEqual(0.15);
  });

  it("should return 10% if the employee role is 'gerente' and his gross salary is lower than R$ 1520,00", () => {
    const tax = CalculateTax.execute({
      grossSalary: 1400,
      employeeRole: "gerente",
    });
    expect(tax).toEqual(0.1);
  });

  it("should throw an error if the given employeeRole does not exist", () => {
    expect(async () =>
      CalculateTax.execute({
        grossSalary: 1400,
        employeeRole: "invalid employeeRole",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
