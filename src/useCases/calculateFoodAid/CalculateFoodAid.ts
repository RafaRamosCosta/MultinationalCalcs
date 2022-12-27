interface ICalculateFoodAidProps {
  employeeRole: string;
  coeficient: number;
  grossSalary: number;
}
export class CalculateFoodAid {
  static execute({
    employeeRole,
    coeficient,
    grossSalary,
  }: ICalculateFoodAidProps): number {
    const isWorker = employeeRole === "operario";

    const hasFulfilledRequirements = isWorker && coeficient >= 25;

    if (!hasFulfilledRequirements) return grossSalary / 3;

    return grossSalary / 2;
  }
}
