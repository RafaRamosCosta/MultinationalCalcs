import { CalculateFoodAid } from "./CalculateFoodAid";
import { CalculateGratification } from "./CalculateGratification";
import { CalculateTaxPercentage } from "./CalculateTaxPercentage";
import { CalculateGrossSalary } from "./CalculateGrossSalary";

export class CalculateNetSalary {
  constructor(
    private calculateGrossSalary: CalculateGrossSalary,
    private calculateTaxPercentage: CalculateTaxPercentage,
    private calculateGratification: CalculateGratification,
    private calculateFoodAid: CalculateFoodAid
  ) {}

  execute(): number {
    const grossSalary = this.calculateGrossSalary.execute();
    const taxPercentage = this.calculateTaxPercentage.execute();
    const gratification = this.calculateGratification.execute();
    const foodAid = this.calculateFoodAid.execute();

    const netSalary = grossSalary - taxPercentage + gratification + foodAid;

    return netSalary;
  }
}

