interface ICalculateFoodAidProps {
  employeeRole: string;
  workCoefficient: number;
  grossSalary: number;
}
export class CalculateFoodAid {
  static execute({
    employeeRole,
    workCoefficient,
    grossSalary,
  }: ICalculateFoodAidProps): number {
    const isWorker = employeeRole === "operario";

    const hasFulfilledRequirements = isWorker && workCoefficient >= 0.25;

    if (!hasFulfilledRequirements) return grossSalary / 3;

    return grossSalary / 2;
  }
}
