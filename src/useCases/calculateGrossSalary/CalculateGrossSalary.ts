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
    if (!workCoefficient) throw new Error("Invalid work shift!");

    return workedHours * (workCoefficient * minimumSalary);
  }
}
