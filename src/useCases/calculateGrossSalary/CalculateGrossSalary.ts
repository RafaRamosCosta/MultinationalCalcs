import { AppError } from "@errors/AppError";

interface ICalculateGrossSalaryProps {
  minimumSalary: number;
  workedHours: number;
  workCoefficient: number;
}
export class CalculateGrossSalary {
  static execute({
    minimumSalary,
    workedHours,
    workCoefficient,
  }: ICalculateGrossSalaryProps): number {
    const HOURS_IN_YEAR = 720;
    const invalidWorkHours = workedHours <= 0 || workedHours >= HOURS_IN_YEAR;

    if (invalidWorkHours) throw new AppError("Invalid working hours!");

    return workedHours * (workCoefficient * minimumSalary);
  }
}
