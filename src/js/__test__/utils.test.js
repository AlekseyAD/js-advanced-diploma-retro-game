import { calcTileType } from '../utils';

describe('boardSize = 3', () => {
  const boardSize = 3;

  test.each([
    [0, 'top-left'],
    [1, 'top'],
    [2, 'top-right'],
    [3, 'left'],
    [4, 'center'],
    [5, 'right'],
    [6, 'bottom-left'],
    [7, 'bottom'],
    [8, 'bottom-right'],
  ])('%p %p', (index, result) => {
    expect(calcTileType(index, boardSize)).toBe(result);
  });
});

describe('boardSize = 5', () => {
  const boardSize = 5;
  const top = [1, 2, 3];
  const left = [5, 10, 15];
  const right = [9, 14, 19];
  const bottom = [21, 22, 23];
  const center = [6, 7, 8, 11, 12, 13, 16, 17, 18];

  test.each([
    [[0], 'top-left'],
    [top, 'top'],
    [[4], 'top-right'],
    [left, 'left'],
    [center, 'center'],
    [right, 'right'],
    [[20], 'bottom-left'],
    [bottom, 'bottom'],
    [[24], 'bottom-right'],
  ])('%p %p', (index, result) => {
    index.forEach((e) => {
      expect(calcTileType(e, boardSize)).toBe(result);
    });
  });
});
