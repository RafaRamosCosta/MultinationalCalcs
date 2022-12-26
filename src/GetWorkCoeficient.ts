type Coeficient = Record<string, number>;

export class GetWorkCoeficient {
  constructor(private workShift: string) {}

  execute(): number {
    const coeficient: Coeficient = {
      matutino: 13 / 100,
      vespertino: 4 / 100,
      noturno: 8 / 100,
    };

    return coeficient[this.workShift];
  }
}

const getWorkCoeficient = new GetWorkCoeficient("noturno");

getWorkCoeficient.execute();
