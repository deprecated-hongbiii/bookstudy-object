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

  hasInvitation() {
    return this.invitation !== null;
  }

  hasTicket() {
    return this.ticket !== null;
  }

  setTicket(ticket: Ticket) {
    this.ticket = ticket;
  }

  minusAmount(amount: number) {
    this.amount -= amount;
  }

  plusAmount(amount: number) {
    this.amount += amount;
  }
}