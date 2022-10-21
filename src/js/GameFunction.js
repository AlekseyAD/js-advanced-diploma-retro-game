import PositionedCharacter from './PositionedCharacter';


export default class GameFunction {
getId(id) {
    return this.gameState.allPositions.find((element) => element.position === id);
  }

  getRandom(positions) {
    this.positions = positions;
    return this.positions[Math.floor(Math.random() * this.positions.length)];
  }

  positionUser() {
    const size = this.gamePlay.boardSize;
    this.userPosition = [];
    for (
      let i = 0, j = 1;
      this.userPosition.length < size * 2;
      i += size, j += size
    ) {
      this.userPosition.push(i, j);
    }
    return this.userPosition;
  }

  positionAi() {
    const size = this.gamePlay.boardSize;
    const aiPosition = [];
    for (
      let i = size - 2, j = size - 1;
      aiPosition.length < size * 2;
      i += size, j += size
    ) {
      aiPosition.push(i, j);
    }
    return aiPosition;
  }

  positionTeam(team, positions) {
    const copyPositions = [...positions];
    for (const item of team) {
      const random = this.getRandom(copyPositions);
      this.gameState.allPositions.push(new PositionedCharacter(item, random));
      copyPositions.splice(copyPositions.indexOf(random), 1);
    }
}
}