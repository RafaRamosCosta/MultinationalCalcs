type Coeficient = Record<string, number>;

export class GetWorkCoeficient {
  constructor(private workShift: string) {}

  execute(): number {
    const coeficient: Coeficient = {
      matutino: 0.13,
      vespertino: 0.04,
      noturno: 0.08,
    };

    return coeficient[this.workShift];
  }
}

const getWorkCoeficient = new GetWorkCoeficient("noturno");

getWorkCoeficient.execute();
