/* eslint-disable no-param-reassign */
export const addNumber = (obj: number[][]) => {
  let addedNum = false;

  while (!addedNum) {
    const position1 = Math.floor(Math.random() * obj.length);
    const position2 = Math.floor(Math.random() * obj.length);
    const randomNumber = Math.random() > 0.5 ? 2 : 4;

    if (obj[position1][position2] === 0) {
      obj[position1][position2] = randomNumber;
      addedNum = true;
    }
  }
};
