/**
 * Класс, представляющий персонажей команды
 *
 * @todo Самостоятельно продумайте хранение персонажей в классе
 * Например
 * @example
 * ```js
 * const characters = [new Swordsman(2), new Bowman(1)]
 * const team = new Team(characters);
 *
 * team.characters // [swordsman, bowman]
 * ```
 * */
export default class Team {
  // TODO: write your logic here

  constructor() {
    this.members = new Set();
  }

  // addHero(character) {
  //   if (this.members.has(character)) {
  //     throw new Error('Такой персонаж уже eсть в команде');
  //   }
  //   this.members.add(character);
  // }

  addHeroes(characters) {
    this.members = new Set([...this.members, ...characters]);
  }

  *[Symbol.iterator]() {
    for (const person of this.members) {
      yield person;
    }
  }
}
