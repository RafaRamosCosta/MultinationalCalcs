import { GenerateRandomNumber } from "./utils/GenerateRandomNumber";

export class GetMinimumSalary {
  static execute(employeeRole: string): number {
    const isWorker = employeeRole === "operario";

    if (isWorker) return GenerateRandomNumber.execute(750, 2500);

    return GenerateRandomNumber.execute(1400, 4600);
  }
}
