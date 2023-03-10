import { FormatDecimalPlaces } from "@utils/FormatDecimalPlaces";

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
      return FormatDecimalPlaces.execute(VALUE_IF_DOESNT_FULFILL);

    return FormatDecimalPlaces.execute(VALUE_IF_DOES_FULFILL);
  }
}
