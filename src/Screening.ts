import Movie from "./Movie";

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
}