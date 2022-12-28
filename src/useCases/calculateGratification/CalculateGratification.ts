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
    const HOURS_IN_YEAR = 720;

    const worksAtMorning = workShifts.find((shift) => shift === "matutino");

    const invalidWorkHours = workedHours <= 0 || workedHours >= HOURS_IN_YEAR;

    if (invalidWorkHours) throw new AppError("Invalid working hours!");

    const workedMoreThanEightyHours = workedHours > 80;

    const valueIfDoesntFulfill = 465;
    const valueIfDoesFulfill = 1200;

    if (!worksAtMorning || !workedMoreThanEightyHours)
      return valueIfDoesntFulfill;

    return valueIfDoesFulfill;
  }
}
