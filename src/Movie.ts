import Money from "./Money";
import Screening from "./Screening";

export default class Movie {
  private title: string;
  private runningTime: number; // 원본 자바코드에서는 Duration 타입
  private fee: Money;
  private discountPolicy: DiscountPolicy;

  constructor(title: string, runningTime: number, fee: Money, discountPolicy: DiscountPolicy) {
    this.title = title;
    this.runningTime = runningTime;
    this.fee = fee;
    this.discountPolicy = discountPolicy;
  }

  getFee() {
    return this.fee;
  }

  calculateMovieFee(screening: Screening): Money {
    return this.fee.minus(this.discountPolicy.calculateDiscountAmount(screening));
  }
}