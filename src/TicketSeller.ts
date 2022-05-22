import Audience from "./Audience";
import Ticket from "./Ticket";
import TicketOffice from "./TicketOffice";

export default class TicketSeller {
  private ticketOffice: TicketOffice;

  constructor(ticektOffice: TicketOffice) {
    this.ticketOffice = ticektOffice;
  }

  sellTo(audience: Audience) {
    if(audience.getBag().hasInvitation()) {
      const ticket: Ticket = this.ticketOffice.getTicket()!; // undefined 타입에러 없애기 위해 사용
      audience.getBag().setTicket(ticket);
    } else {
      const ticket: Ticket = this.ticketOffice.getTicket()!; // undefined 타입에러 없애기 위해 사용
      audience.getBag().minusAmount(ticket.getFee());
      this.ticketOffice.plusAmount(ticket.getFee());
      audience.getBag().setTicket(ticket);
    }
  }
}