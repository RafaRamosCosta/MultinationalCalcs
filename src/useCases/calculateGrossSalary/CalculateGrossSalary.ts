interface ICalculateGrossSalaryProps {
  minimumSalary: number;
  workedHours: number;
  coefficient: number;
}
export class CalculateGrossSalary {
  static execute({
    minimumSalary,
    workedHours,
    coefficient,
  }: ICalculateGrossSalaryProps): number {
    if (!coefficient) throw new Error("Invalid work shift!");

    return workedHours * (coefficient * minimumSalary);
  }
}
