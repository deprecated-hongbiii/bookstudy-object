import Audience from "./Audience";
import TicketOffice from "./TicketOffice";

export default class TicketSeller {
  private ticketOffice: TicketOffice;

  constructor(ticketOffice: TicketOffice) {
    this.ticketOffice = ticketOffice;
  }

  sellTo(audience: Audience) {
    this.ticketOffice.plusAmount(audience.buy(this.ticketOffice.getTicket()!));
  }
}