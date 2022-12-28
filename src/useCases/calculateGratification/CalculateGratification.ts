import { AppError } from "../../errors/AppError";

interface ICalculateGratificationProps {
  workShifts: string[];
  workedHours: number;
}
export class CalculateGratification {
  static execute({
    workShifts,
    workedHours,
  }: ICalculateGratificationProps): number {
    const VALUE_IF_DOESNT_FULFILL = 465;
    const VALUE_IF_DOES_FULFILL = 1200;

    const worksAtMorning = workShifts.find((shift) => shift === "matutino");

    const workedMoreThanEightyHours = workedHours > 80;

    if (!worksAtMorning || !workedMoreThanEightyHours)
      return VALUE_IF_DOESNT_FULFILL;

    return VALUE_IF_DOES_FULFILL;
  }
}
