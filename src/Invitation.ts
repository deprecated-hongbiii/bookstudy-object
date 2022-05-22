export default class Invitation {
  private when: Date;

  constructor(invitedDate: string) {
    this.when = new Date(invitedDate);
  }
}