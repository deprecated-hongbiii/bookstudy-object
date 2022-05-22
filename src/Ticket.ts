export default class Ticket {
  private fee: number = 10000;

  constructor() {}

  getFee() {
    return this.fee;
  }
}