interface ICalculateGratificationProps {
  workShift: string;
  workedHours: number;
}
export class CalculateGratification {
  private valueIfDoesntFulfill = 465;
  private valueIfDoesFulfill = 1200;

  execute({ workShift, workedHours }: ICalculateGratificationProps): number {
    const worksAtMorning = workShift === "matutino";
    const workedMoreThanEightyHours = workedHours > 80;

    if (!worksAtMorning || !workedMoreThanEightyHours)
      return this.valueIfDoesntFulfill;

    return this.valueIfDoesFulfill;
  }
}
