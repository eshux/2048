const q: string[] = [];

export const checkRow = (
  obj: number[][]
) => {
  let i = 0;
  while (i < obj.length) {
    let x = 0;
    let y = 1;

    while (y < obj[i].length) {
      if (obj[i][x] !== obj[i][y]) {
        y += 1;
        x += 1;
      } else if (obj[i][x] === obj[i][y]) {
        q.push('x');
        return;
      }
    }
    i += 1;
  }
};

export const checkColumn = (obj: number[][]) => {
  let i = 0;
  while (i < obj.length) {
    let x = 0;
    let y = 1;

    while (y < obj[i].length) {
      if (obj[x][i] !== obj[y][i]) {
        y += 1;
        x += 1;
      } else if (obj[x][i] === obj[y][i]) {
        q.push('x');
        return;
      }
    }

    i += 1;
  }
};

export const checker = (setGameOver: (x: boolean) => void) => {
  if (q.includes('x')) {
    q.splice(0, q.length);
  } else {
    setGameOver(true);
  }
};
