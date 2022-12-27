type TaxPercentage = Record<string, number>;

interface ICalculateTaxProps {
  grossSalary: number;
  employeeRole: string;
}
export class CalculateTax {
  execute({ grossSalary, employeeRole }: ICalculateTaxProps): number {
    const taxPercentage: TaxPercentage = {
      operario: grossSalary < 945 ? 0.07 : 0.13,
      gerente: grossSalary < 1520 ? 0.1 : 0.15,
    };
    return taxPercentage[employeeRole];
  }
}
