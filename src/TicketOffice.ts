import Ticket from "./Ticket";

export default class TicketOffice {
  private amount: number;
  private tickets: Ticket[];

  constructor(amount: number, tickets: Ticket[]) {
    this.amount = amount;
    this.tickets = tickets;
  }

  getTicket() {
    return this.tickets.shift(); // 원본 JAVA 코드에서 ArrayList.remove(0) - 인덱스 위치의 아이템을 리스트에서 삭제하고, 삭제된 아이템을 리턴
  }

  minusAmount(amount: number) {
    this.amount -= amount;
  }

  plusAmount(amount: number) {
    this.amount += amount;
  }
}