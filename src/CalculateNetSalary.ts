interface ICalculateNetSalary {
  grossSalary: number;
  taxPercentage: number;
  gratification: number;
  foodAid: number;
}
export class CalculateNetSalary {
  execute({
    grossSalary,
    taxPercentage,
    gratification,
    foodAid,
  }: ICalculateNetSalary): number {
    return grossSalary - taxPercentage + gratification + foodAid;
  }
}
