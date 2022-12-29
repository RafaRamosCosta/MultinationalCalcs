export class FormatDecimalPlaces {
  static execute(value: number) {
    return Number(value.toFixed(2));
  }
}
