import { CalculateGrossSalary } from "./CalculateGrossSalary";
import { GetWorkCoeficient } from "./GetWorkCoeficient";

export class CalculateFoodAid {
  constructor(
    private employeeRole: string,
    private getWorkCoeficient: GetWorkCoeficient,
    private calculateGrossSalary: CalculateGrossSalary
  ) {}

  execute(): number {
    const isWorker = this.employeeRole === "operario";
    const coeficient = this.getWorkCoeficient.execute();

    const hasFulfilledRequirements = isWorker && coeficient >= 25;

    const grossSalary = this.calculateGrossSalary.execute();

    if (!hasFulfilledRequirements) return grossSalary / 3;

    return grossSalary / 2;
  }
}

