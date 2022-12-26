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
      operario: grossSalary < 945 ? 7 / 100 : 13 / 100,
      gerente: grossSalary < 1520 ? 10 / 100 : 15 / 100,
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
