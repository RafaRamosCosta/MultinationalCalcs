type Coeficients = Record<string, number>;

export class GetWorkCoefficient {
  static execute(workShifts: string[]): number {
    const coefficients: Coeficients = {
      matutino: 0.13,
      vespertino: 0.04,
      noturno: 0.08,
    };

    const coeficcient = workShifts.reduce(
      (acc, workShift) => (acc += coefficients[workShift]),
      0
    );
    
    if (!coeficcient) throw new Error("Invalid work shift(s)!");

    return coeficcient;
  }
}
