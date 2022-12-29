import { FormatDecimalPlaces } from "@utils/FormatDecimalPlaces";
import { GenerateRandomNumber } from "@utils/GenerateRandomNumber";

export class GetMinimumSalary {
  static execute(employeeRole: string): number {
    const isWorker = employeeRole === "operario";

    if (isWorker)
      return FormatDecimalPlaces.execute(
        GenerateRandomNumber.execute(750, 2500)
      );

    return FormatDecimalPlaces.execute(
      GenerateRandomNumber.execute(1400, 4600)
    );
  }
}
