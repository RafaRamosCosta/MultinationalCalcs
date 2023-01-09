import { GetMinimumSalary } from "./GetMinimumSalary";

describe("Get minimum salary", () => {
  it("should return a value in the range of R$ 750,00 to R$ 2500,00 if the employee is a 'operario'", () => {
    const minimumSalary = GetMinimumSalary.execute("operario");
    expect(minimumSalary).toBeGreaterThanOrEqual(750);
    expect(minimumSalary).toBeLessThanOrEqual(2500);
  });

  it("should return a value in the range of R$ 1400,00 to R$ 4600,00 if the employee is a 'gerente'", () => {
    const minimumSalary = GetMinimumSalary.execute("gerente");
    expect(minimumSalary).toBeGreaterThanOrEqual(1400);
    expect(minimumSalary).toBeLessThanOrEqual(4600);
  });
});
