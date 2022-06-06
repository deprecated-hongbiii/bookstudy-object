export default class Money {
  static readonly ZERO = this.wons(0);
  private readonly amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  // 원본 자바 코드에는 파라미터 타입이 다른 wons 메서드가 2개 있음
  static wons(amount: number): Money {
    return new Money(amount);   // 원본 자바 코드는 new Money(BigDecimal.valueOf(amount))
  }

  /*
  * 원본 자바 코드에서는 BigDecimal 타입의
  * add, subtract, multiply, compareTo 메서드를 사용하고 있지만,
  * TS(JS)에는 그런 게 없으므로 연산자로 대체
  * */
  plus(amount: Money) {
    return new Money(this.amount + amount.amount);
  }

  minus(amount: Money) {
    return new Money(this.amount - amount.amount)
  }

  times(percent: number) {
    return new Money(this.amount * percent);
  }

  isLessThan(other: Money) {
    return this.amount < other.amount;
  }

  isGreaterThanOrEqual(other: Money) {
    return this.amount >= other.amount;
  }
}