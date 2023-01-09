import { AppError } from "@errors/AppError";
import { GetWorkCoefficient } from "./GetWorkCoefficient";

describe("Get work coeficient", () => {
  it("should return the sum of the coeficients according to the work shifts of the employee", () => {
    const coeficient = GetWorkCoefficient.execute([
      "matutino",
      "vespertino",
      "noturno",
    ]);
    expect(coeficient).toEqual(0.13 + 0.04 + 0.08);
  });

  it("should be able to return the specific workShift coefficient", () => {
    const morningCoefficient = GetWorkCoefficient.execute(["matutino"]);
    expect(morningCoefficient).toEqual(0.13);
  });

  it("should throw an error if the workShift passed is invalid", () => {
    expect(async () =>
      GetWorkCoefficient.execute(["invalid workShift"])
    ).rejects.toBeInstanceOf(AppError);
  });
});
