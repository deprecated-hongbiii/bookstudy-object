import Audience from "./Audience";
import TicketSeller from "./TicketSeller";

export default class Theater {
  private ticketSeller: TicketSeller;

  constructor(ticketSeller: TicketSeller) {
    this.ticketSeller = ticketSeller;
  }

  enter(audience: Audience) {
    this.ticketSeller.sellTo(audience);
  }
}