interface ICalculateGratificationProps {
  workShift: string;
  workedHours: number;
}
export class CalculateGratification {
  static execute({ workShift, workedHours }: ICalculateGratificationProps): number {
    const worksAtMorning = workShift === "matutino";
    const workedMoreThanEightyHours = workedHours > 80;

    const valueIfDoesntFulfill = 465;
    const valueIfDoesFulfill = 1200;

    if (!worksAtMorning || !workedMoreThanEightyHours)
      return valueIfDoesntFulfill;

    return valueIfDoesFulfill;
  }
}
