import Money from "./Money";
import Screening from "./Screening";

interface DiscountCondition {
  isSatisfiedBy(screening: Screening): boolean;
}

export default abstract class DiscountPolicy {
  private conditions: DiscountCondition[];

  constructor(conditions: DiscountCondition[]) {
    this.conditions = conditions; // 원본 자바 코드에는 List로 변경하여 할당함. Arrays.asList(conditions)
  }

  calculateDiscountAmount(screening: Screening) {
    for (const each of this.conditions) {
      if(each.isSatisfiedBy(screening)) {
        return this.getDiscountAmount(screening)
      }
      return Money.ZERO;
    }
  }

  protected abstract getDiscountAmount(screening: Screening): Money;
}
