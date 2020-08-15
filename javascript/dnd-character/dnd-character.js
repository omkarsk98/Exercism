export const abilityModifier = (score) => {
  if (score < 3)
    throw new Error('Ability scores must be at least 3');
  if (score > 18)
    throw new Error('Ability scores can be at most 18')
  return Math.floor((score - 10) / 2);
};

export class Character {
  static rollAbility() {
    return new Array(4)
      .fill(0)
      .map(() => Math.ceil(Math.random() * 6))
      .sort((a, b) => a - b)
      .slice(1, 4)
      .reduce((sum, num) => sum += num);
  }

  get strength() {
    if (!this._strength)
      this._strength = Character.rollAbility();
    return this._strength;
  }

  get dexterity() {
    if (!this._dexterity)
      this._dexterity = Character.rollAbility();
    return this._dexterity;
  }

  get constitution() {
    if (!this._constitution)
      this._constitution = Character.rollAbility();
    return this._constitution;
  }

  get intelligence() {
    if (!this._intelligence)
      this._intelligence = Character.rollAbility()
    return this._intelligence;
  }

  get wisdom() {
    if (!this._wisdom)
      this._wisdom = Character.rollAbility()
    return this._wisdom;
  }

  get charisma() {
    if (!this._charisma)
      this._charisma = Character.rollAbility()
    return this._charisma;
  }

  get hitpoints() {
    return 10 + Math.floor((this.constitution - 10) / 2)
  }
}
