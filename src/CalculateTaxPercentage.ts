import { CalculateGrossSalary } from "./CalculateGrossSalary";
import { GetWorkCoeficient } from "./GetWorkCoeficient";

type TaxPercentage = Record<string, number>;

export class CalculateTaxPercentage {
  constructor(
    private calculateGrossSalary: CalculateGrossSalary,
    private employeeRole: string
  ) {}

  execute(): number {
    const grossSalary = this.calculateGrossSalary.execute();
    const taxPercentage: TaxPercentage = {
      operario: grossSalary < 945 ? 0.07 : 0.13,
      gerente: grossSalary < 1520 ? 0.1 : 0.15,
    };
    return taxPercentage[this.employeeRole];
  }
}
// const getWorkCoeficient = new GetWorkCoeficient("matutino");
// const calculateGrossSalary = new CalculateGrossSalary(
//   2500,
//   10,
//   getWorkCoeficient
// );

// console.log(calculateGrossSalary.execute());
