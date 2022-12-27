import { CalculateFoodAid } from "./useCases/calculateFoodAid/CalculateFoodAid";
import { CalculateGratification } from "./useCases/calculateGratification/CalculateGratification";
import { CalculateGrossSalary } from "./useCases/calculateGrossSalary/CalculateGrossSalary";
import { CalculateNetSalary } from "./useCases/calculateNetSalary/CalculateNetSalary";
import { CalculateTax } from "./useCases/calculateTax/CalculateTax";
import { GetMinimumSalary } from "./useCases/getMinimumSalary/GetMinimumSalary";
import { GetWorkCoeficient } from "./useCases/getWorkCoeficient/GetWorkCoeficient";

const workShift = "matutino";
const employeeRole = "operario";

const minimumSalary = GetMinimumSalary.execute(employeeRole);

const coeficient = GetWorkCoeficient.execute(workShift);

const workedHours = 70;

const grossSalary = CalculateGrossSalary.execute({
  minimumSalary,
  workedHours,
  coeficient,
});

const tax = CalculateTax.execute({ grossSalary, employeeRole });

const gratification = CalculateGratification.execute({
  workShift,
  workedHours,
});

const foodAid = CalculateFoodAid.execute({
  employeeRole,
  coeficient,
  grossSalary,
});

const netSalary = CalculateNetSalary.execute({
  grossSalary,
  tax,
  gratification,
  foodAid,
});

console.log(`Net Salary: R$ ${netSalary.toFixed(2)}`);
