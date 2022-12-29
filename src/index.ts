import { CalculateFoodAid } from "@useCases/calculateFoodAid/CalculateFoodAid";
import { CalculateGratification } from "@useCases/calculateGratification/CalculateGratification";
import { CalculateGrossSalary } from "@useCases/calculateGrossSalary/CalculateGrossSalary";
import { CalculateNetSalary } from "@useCases/calculateNetSalary/CalculateNetSalary";
import { CalculateTax } from "@useCases/calculateTax/CalculateTax";
import { GetMinimumSalary } from "@useCases/getMinimumSalary/GetMinimumSalary";
import { GetWorkCoefficient } from "@useCases/getWorkCoefficient/GetWorkCoefficient";

const workShifts = ["matutino"];
const employeeRole = "operario";

const minimumSalary = GetMinimumSalary.execute(employeeRole);

const workCoefficient = GetWorkCoefficient.execute(workShifts);

const workedHours = 80;

const grossSalary = CalculateGrossSalary.execute({
  minimumSalary,
  workedHours,
  workCoefficient,
});

const tax = CalculateTax.execute({ grossSalary, employeeRole });

const gratification = CalculateGratification.execute({
  workShifts,
  workedHours,
});

const foodAid = CalculateFoodAid.execute({
  employeeRole,
  workCoefficient,
  grossSalary,
});

const netSalary = CalculateNetSalary.execute({
  grossSalary,
  tax,
  gratification,
  foodAid,
});

let employee: Record<string, any> = {};

Object.assign(employee, {
  workShifts,
  employeeRole,
  minimumSalary,
  workCoefficient,
  workedHours,
  grossSalary,
  tax,
  gratification,
  foodAid,
  netSalary,
});

Object.keys(employee).forEach((key) => {
  if (typeof employee[key] === "number") {
    key === "workCoefficient" || key === "tax"
      ? (employee[key] = Intl.NumberFormat("pt-BR", {
          style: "percent",
        }).format(employee[key]))
      : (employee[key] = Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(employee[key]));
  }
});

console.log(employee);
