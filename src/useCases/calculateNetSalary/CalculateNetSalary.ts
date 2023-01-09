import { FormatDecimalPlaces } from "@utils/FormatDecimalPlaces";

interface ICalculateNetSalary {
  grossSalary: number;
  tax: number;
  gratification: number;
  foodAid: number;
}
export class CalculateNetSalary {
  static execute({
    grossSalary,
    tax,
    gratification,
    foodAid,
  }: ICalculateNetSalary): number {
    return FormatDecimalPlaces.execute(
      grossSalary - tax + gratification + foodAid
    );
  }
}
