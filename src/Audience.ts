import Bag from "./Bag";
import Ticket from "./Ticket";

export default class Audience {
  private bag: Bag;

  constructor(bag: Bag) {
    this.bag = bag;
  }

  buy(ticket: Ticket) {
    if(this.bag.hasInvitation()) {
      this.bag.setTicket(ticket);
      return 0;
    } else {
      this.bag.setTicket(ticket);
      this.bag.minusAmount(ticket.getFee());
      return ticket.getFee();
    }
  }
}