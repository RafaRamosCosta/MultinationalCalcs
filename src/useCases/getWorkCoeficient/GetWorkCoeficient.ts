type Coeficient = Record<string, number>;

export class GetWorkCoeficient {
  static execute(workShift: string): number {
    const coeficient: Coeficient = {
      matutino: 0.13,
      vespertino: 0.04,
      noturno: 0.08,
    };

    return coeficient[workShift];
  }
}
