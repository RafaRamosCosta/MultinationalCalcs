import { GetWorkCoeficient } from "./GetWorkCoeficient";

export class CalculateGrossSalary {
  constructor(
    private salary: number,
    private workedHours: number,
    private workCoeficient: GetWorkCoeficient
  ) {}

  execute(): number {
    const coeficient = this.workCoeficient.execute();
    if (!coeficient) throw new Error("Invalid work shift!");

    return this.workedHours * (coeficient * this.salary);
  }
}

// const getWorkCoeficient = new GetWorkCoeficient("matutino");
// const calculateGrossSalary = new CalculateGrossSalary(
//   2500,
//   8,
//   getWorkCoeficient
// );

// console.log(calculateGrossSalary.execute());
