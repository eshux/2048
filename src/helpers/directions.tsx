/* eslint-disable no-param-reassign */
import { addNumber } from './addNumber';

const lodash = require('lodash');

export const scorePoints: number[] = [0];

export const up = (
  obj: number[][],
  setfunction: (obj: number[][]) => void
) => {
  const oldGrid = lodash.cloneDeep(obj);
  const newGrid = lodash.cloneDeep(obj);

  newGrid.forEach((item: number[]) => {
    let x = 0;
    let y = 1;

    while (y < item.length) {
      if (y === item.length) {
        y = x + 1;
        x += 1;
      }
      if (!item[x] && !item[y]) {
        y += 1;
      } else if (!item[x] && item[y]) {
        item[x] = item[y];
        item[y] = 0;
        y += 1;
      } else if (item[x] && !item[y]) {
        y += 1;
      } else if (item[x] && item[y]) {
        if (item[x] === item[y]) {
          item[x] += item[y];
          scorePoints[0] += item[x];
          item[y] = 0;
          y = x + 1;
          x += 1;
        } else {
          x += 1;
          y = x + 1;
        }
      }
    }
  });

  if (JSON.stringify(oldGrid) !== JSON.stringify(newGrid)) {
    addNumber(newGrid);
  }

  setfunction(newGrid);
};

export const down = (
  obj: number[][],
  setfunction: (obj2: number[][]) => void
) => {
  const oldGrid = lodash.cloneDeep(obj);
  const newGrid = lodash.cloneDeep(obj);

  newGrid.forEach((item: number[]) => {
    const l = item.length - 1;
    let x = l;
    let y = x - 1;

    while (y >= 0) {
      if (y === -1) {
        x -= 1;
        y = x - 1;
      }
      if (!item[x] && !item[y]) {
        y -= 1;
      } else if (!item[x] && item[y]) {
        item[x] = item[y];
        item[y] = 0;
        y -= 1;
      } else if (item[x] && !item[y]) {
        y -= 1;
      } else if (item[x] && item[y]) {
        if (item[x] === item[y]) {
          item[x] += item[y];
          scorePoints[0] += item[x];
          item[y] = 0;
          x -= 1;
          y = x - 1;
        } else {
          x -= 1;
          y = x - 1;
        }
      }
    }
  });

  if (JSON.stringify(oldGrid) !== JSON.stringify(newGrid)) {
    addNumber(newGrid);
  }

  setfunction(newGrid);
};

export const right = (
  obj: number[][],
  setfunction: (obj2: number[][]) => void
) => {
  const oldGrid = lodash.cloneDeep(obj);
  const newGrid = lodash.cloneDeep(obj);
  let i = 0;

  while (i < newGrid.length) {
    let x = 0;
    let y = 1;

    while (y < newGrid[i].length) {
      if (y === newGrid[i].length) {
        y = x + 1;
        x += 1;
      }
      if (!newGrid[x][i] && !newGrid[y][i]) {
        y += 1;
      } else if (!newGrid[x][i] && newGrid[y][i]) {
        newGrid[x][i] = newGrid[y][i];
        newGrid[y][i] = 0;
        y += 1;
      } else if (newGrid[x][i] && !newGrid[y][i]) {
        y += 1;
      } else if (newGrid[x][i] && newGrid[y][i]) {
        if (newGrid[x][i] === newGrid[y][i]) {
          newGrid[x][i] += newGrid[y][i];
          scorePoints[0] += newGrid[x][i];
          newGrid[y][i] = 0;
          y = x + 1;
          x += 1;
        } else {
          x += 1;
          y = x + 1;
        }
      }
    }
    i += 1;
  }

  if (JSON.stringify(oldGrid) !== JSON.stringify(newGrid)) {
    addNumber(newGrid);
  }

  setfunction(newGrid);
};

export const left = (
  obj: number[][],
  setfunction: (obj2: number[][]) => void
) => {
  const oldGrid = lodash.cloneDeep(obj);
  const newGrid = lodash.cloneDeep(obj);
  let i = 0;

  while (i < newGrid.length) {
    const l = newGrid[i].length - 1;
    let x = l;
    let y = x - 1;

    while (y >= 0) {
      if (y === -1) {
        x -= 1;
        y = x - 1;
      }
      if (!newGrid[x][i] && !newGrid[y][i]) {
        y -= 1;
      } else if (!newGrid[x][i] && newGrid[y][i]) {
        newGrid[x][i] = newGrid[y][i];
        newGrid[y][i] = 0;
        y -= 1;
      } else if (newGrid[x][i] && !newGrid[y][i]) {
        y -= 1;
      } else if (newGrid[x][i] && newGrid[y][i]) {
        if (newGrid[x][i] === newGrid[y][i]) {
          newGrid[x][i] += newGrid[y][i];
          scorePoints[0] += newGrid[x][i];
          newGrid[y][i] = 0;
          x -= 1;
          y = x - 1;
        } else {
          x -= 1;
          y = x - 1;
        }
      }
    }
    i += 1;
  }

  if (JSON.stringify(oldGrid) !== JSON.stringify(newGrid)) {
    addNumber(newGrid);
  } 

  setfunction(newGrid);
};

export const resetScore = () => {
  scorePoints[0] = 0;
};