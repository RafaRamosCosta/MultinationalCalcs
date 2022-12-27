import { CalculateFoodAid } from "./useCases/calculateFoodAid/CalculateFoodAid";
import { CalculateGratification } from "./useCases/calculateGratification/CalculateGratification";
import { CalculateGrossSalary } from "./useCases/calculateGrossSalary/CalculateGrossSalary";
import { CalculateNetSalary } from "./useCases/calculateNetSalary/CalculateNetSalary";
import { CalculateTax } from "./useCases/calculateTax/CalculateTax";
import { GetMinimumSalary } from "./useCases/getMinimumSalary/GetMinimumSalary";
import { GetWorkCoefficient } from "./useCases/getWorkCoefficient/GetWorkCoefficient";

const workShifts = ["matutino"];
const employeeRole = "operario";

const minimumSalary = GetMinimumSalary.execute(employeeRole);

const coefficient = GetWorkCoefficient.execute(workShifts);

const workedHours = 70;

const grossSalary = CalculateGrossSalary.execute({
  minimumSalary,
  workedHours,
  coefficient,
});

const tax = CalculateTax.execute({ grossSalary, employeeRole });

const gratification = CalculateGratification.execute({
  workShifts,
  workedHours,
});

const foodAid = CalculateFoodAid.execute({
  employeeRole,
  coefficient,
  grossSalary,
});

const netSalary = CalculateNetSalary.execute({
  grossSalary,
  tax,
  gratification,
  foodAid,
});

console.log(`Net Salary: R$ ${netSalary.toFixed(2)}`);
