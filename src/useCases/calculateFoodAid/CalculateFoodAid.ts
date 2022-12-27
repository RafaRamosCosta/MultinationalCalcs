interface ICalculateFoodAidProps {
  employeeRole: string;
  coefficient: number;
  grossSalary: number;
}
export class CalculateFoodAid {
  static execute({
    employeeRole,
    coefficient,
    grossSalary,
  }: ICalculateFoodAidProps): number {
    const isWorker = employeeRole === "operario";

    const hasFulfilledRequirements = isWorker && coefficient >= 0.25;

    if (!hasFulfilledRequirements) return grossSalary / 3;

    return grossSalary / 2;
  }
}
