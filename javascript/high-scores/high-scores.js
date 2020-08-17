import { getHeapCodeStatistics } from "v8";

export class HighScores {
  constructor(highScores) {
    this._highScores = highScores;
  }

  get scores() {
    return this._highScores;
  }

  get latest() {
    return [...this.scores].pop();
  }

  get personalBest() {
    return Math.max(...this.scores);
  }

  get personalTopThree() {
    return this.scores.sort((a, b) => b - a).slice(0, 3);
  }
}
