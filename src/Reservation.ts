import Customer from "./Customer";
import Money from "./Money";
import Screening from "./Screening";

export default class Reservation {
  private customer: Customer;
  private screening: Screening;
  private fee: Money;
  private audienceCount: number;

  constructor(customer: Customer, screening: Screening, fee: Money, audienceCount: number) {
    this.customer = customer;
    this.screening = screening;
    this.fee = fee;
    this.audienceCount = audienceCount;
  }
}