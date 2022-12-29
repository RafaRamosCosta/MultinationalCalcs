import { AppError } from "@errors/AppError";
import { FormatDecimalPlaces } from "@utils/FormatDecimalPlaces";

type Coeficients = Record<string, number>;

export class GetWorkCoefficient {
  static execute(workShifts: string[]): number {
    const coefficients: Coeficients = {
      matutino: 0.13,
      vespertino: 0.04,
      noturno: 0.08,
    };

    const workCoefficient = workShifts.reduce((acc, workShift) => {
      if (!coefficients[workShift])
        throw new AppError("Invalid work shift(s)!");
      return (acc += coefficients[workShift]);
    }, 0);

    return workCoefficient;
  }
}
