import { CalculateNetSalary } from "./CalculateNetSalary";

describe("Calculate net salary", () => {
  it("should be able to calculate the net salary of a employee", () => {
    const grossSalary = 1500;
    const tax = 0.1;
    const gratification = 1200;
    const foodAid = 500;
    const netSalary = CalculateNetSalary.execute({
      grossSalary,
      tax,
      gratification,
      foodAid,
    });
    expect(netSalary).toEqual(grossSalary - tax + gratification + foodAid);
  });
});
