import Invitation from "./Invitation";
import Ticket from "./Ticket";

export default class Bag {
  private amount: number;
  private invitation: Invitation | null;
  private ticket: Ticket;

  constructor(amount: number, invitation: Invitation | null = null, ticket: Ticket) {
    this.amount = amount;
    this.invitation = invitation;
    this.ticket = ticket;
  }

  hold(ticket: Ticket) {
    if(this.hasInvitation()) {
      this.setTicket(ticket);
      return 0;
    } else {
      this.setTicket(ticket);
      this.minusAmount(ticket.getFee());
      return ticket.getFee();
    }
  }

  private hasInvitation() {
    return this.invitation !== null;
  }

  hasTicket() {
    return this.ticket !== null;
  }

  private setTicket(ticket: Ticket) {
    this.ticket = ticket;
  }

  private minusAmount(amount: number) {
    this.amount -= amount;
  }

  plusAmount(amount: number) {
    this.amount += amount;
  }
}