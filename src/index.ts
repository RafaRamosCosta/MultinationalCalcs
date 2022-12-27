import { CalculateFoodAid } from "./CalculateFoodAid";
import { CalculateGratification } from "./CalculateGratification";
import { CalculateGrossSalary } from "./CalculateGrossSalary";
import { CalculateNetSalary } from "./CalculateNetSalary";
import { CalculateTax } from "./CalculateTax";
import { GetMinimumSalary } from "./GetMinimumSalary";
import { GetWorkCoeficient } from "./GetWorkCoeficient";

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
