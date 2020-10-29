//
// This is only a SKELETON file for the 'Scale Generator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const sharps = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];
const flats = ["F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E"];
const usesFlats = [
  "F",
  "Bb",
  "Eb",
  "Ab",
  "Db",
  "Gb",
  "d",
  "g",
  "c",
  "f",
  "bb",
  "eb",
];
const steps = {
  m: 1,
  M: 2,
  A: 3,
};

export class Scale {
  constructor(tonic) {
    this.tonic = tonic;
  }

  chromatic() {
    return usesFlats.includes(this.tonic) ? flats : sharps;
  }

  interval(intervals) {
    const currentTonic = this.tonic[0].toUpperCase() + this.tonic.slice(1);
    let scalePosition = this.chromatic().indexOf(currentTonic);
    return [...intervals].map((step) => {
      const nextNote = this.chromatic()[scalePosition];
      scalePosition = (scalePosition + steps[step]) % this.chromatic().length;
      return nextNote;
    });
  }
}