interface ICalculateGratificationProps {
  workShifts: string[];
  workedHours: number;
}
export class CalculateGratification {
  static execute({
    workShifts,
    workedHours,
  }: ICalculateGratificationProps): number {
    const worksAtMorning = workShifts.find((shift) => shift === "matutino");
    const workedMoreThanEightyHours = workedHours > 80;

    const valueIfDoesntFulfill = 465;
    const valueIfDoesFulfill = 1200;

    if (!worksAtMorning || !workedMoreThanEightyHours)
      return valueIfDoesntFulfill;

    return valueIfDoesFulfill;
  }
}
