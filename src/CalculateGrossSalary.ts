interface ICalculateGrossSalaryProps {
  minimumSalary: number;
  workedHours: number;
  coeficient: number;
}
export class CalculateGrossSalary {
  static execute({
    minimumSalary,
    workedHours,
    coeficient,
  }: ICalculateGrossSalaryProps): number {
    if (!coeficient) throw new Error("Invalid work shift!");

    return workedHours * (coeficient * minimumSalary);
  }
}
