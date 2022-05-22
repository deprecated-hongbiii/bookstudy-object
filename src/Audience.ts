import Bag from "./Bag";

export default class Audience {
  private bag: Bag;

  constructor(bag: Bag) {
    this.bag = bag;
  }

  getBag() {
    return this.bag;
  }
}