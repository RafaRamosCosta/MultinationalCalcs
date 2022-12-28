import { AppError } from "../../erros/AppError";

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
    if (!workCoefficient) throw new AppError("Invalid work shift!");

    return workedHours * (workCoefficient * minimumSalary);
  }
}
