import Customer from "./Customer";
import Money from "./Money";
import Movie from "./Movie";
import Reservation from "./Reservation";

export default class Screening {
  private movie: Movie;
  private sequence: number;
  private whenScreened: Date;

  constructor(movie: Movie, sequence: number, whenScreened: Date) {
    this.movie = movie;
    this.sequence = sequence;
    this.whenScreened = whenScreened;
  }

  getStartTime() {
    return this.whenScreened;
  }

  isSequence(sequence: number) {
    return this.sequence === sequence;
  }

  getMovieFee() {
    return this.movie.getFee();
  }

  reserve(customer: Customer, audienceCount: number): Reservation {
    return new Reservation(customer, this, this.calculateFee(audienceCount), audienceCount);
  }

  private calculateFee(audienceCount: number): Money {
    return this.movie.calculateMovieFee(this).times(audienceCount);
  }
}