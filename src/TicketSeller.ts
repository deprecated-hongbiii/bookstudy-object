import TicketOffice from "./TicketOffice";

export default class TicketSeller {
  private ticketOffice: TicketOffice;

  constructor(ticektOffice: TicketOffice) {
    this.ticketOffice = ticektOffice;
  }

  getTicketOffice() {
    return this.ticketOffice;
  }
}