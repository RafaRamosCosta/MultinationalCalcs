export class CalculateGratification {
  private valueIfDoesntFulfill = 465;
  private valueIfDoesFulfill = 1200;
  constructor(private workShift: string, private workedHours: number) {}

  execute(): number {
    const worksAtMorning = this.workShift === "matutino";
    const workedMoreThanEightyHours = this.workedHours > 80;
    if (!worksAtMorning || !workedMoreThanEightyHours)
      return this.valueIfDoesntFulfill;

    return this.valueIfDoesFulfill;
  }
}
const calculateGratification = new CalculateGratification("matutino", 10);

console.log(calculateGratification.execute());
