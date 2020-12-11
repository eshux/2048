import React, { useState, useEffect } from 'react';
import style from './Game.module.scss';
import Grid from '../Grid/Grid';
import {
  up,
  down,
  right,
  left,
  scorePoints,
  resetScore,
} from '../../helpers/directions';
import { addNumber } from '../../helpers/addNumber';
import { checkRow, checkColumn, checker } from '../../helpers/checkGameOver';
import Button from '../Button/Button';
import HowToPlay from '../HowToPlay/HowToPlay';
import Controls from '../Controls/Controls';
import Score from '../Score/Score';
import GameOver from '../GameOver/GameOver';

const lodash = require('lodash');

const gameData = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

// @ts-ignore
const localsc = JSON.parse(localStorage.getItem('2048Score'));
if (!localsc) {
  localStorage.setItem('2048Score', `${0}`);
}

const Game = () => {
  const [data, setData] = useState(gameData);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [localScore, setLocalScore] = useState(localsc);

  useEffect(() => {
    newGame();
  }, []);

  useEffect(() => {
    setScore(scorePoints[0]);
  }, [data]);

  // Setting keyboard arrows
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        left(data, setData);
      } else if (event.key === 'ArrowLeft') {
        right(data, setData);
      } else if (event.key === 'ArrowDown') {
        down(data, setData);
      } else if (event.key === 'ArrowUp') {
        up(data, setData);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  // Check and set gameOver
  useEffect(() => {
    const fullRows = data.map((item: number[]) => item.every((it) => it));
    const fullGrid = fullRows.every((item: boolean) => item);

    if (fullGrid) {
      checkRow(data);
      checkColumn(data);
      checker(setGameOver);
    }
  }, [data]);

  // Set score in local storage
  useEffect(() => {
    if (gameOver) {
      const local = JSON.parse(localStorage.getItem('2048Score')!);
      if (local < scorePoints[0]) {
        localStorage.setItem('2048Score', `${scorePoints[0]}`);
      }
    }
  }, [gameOver]);

  const newGame = () => {
    const newGrid = lodash.cloneDeep(gameData);
    addNumber(newGrid);
    addNumber(newGrid);
    setData(newGrid);
    setGameOver(false);
    resetScore();
    const local = JSON.parse(localStorage.getItem('2048Score')!);
    local > scorePoints[0]
      ? setLocalScore(local)
      : setLocalScore(scorePoints[0]);
  };

  return (
    <div className={style.layout}>
      <div className={style.title}>2048</div>
      <div className={style.buttonWrapper}>
        <GameOver over={gameOver} score={score} />
        <Button text="New Game" onClick={newGame} />
        <HowToPlay />
      </div>
      <Grid data={data} />
      <div className={style.leftSide}>
        <div className={style.score}>
          <Score text="Best" num={score > localScore ? score : localScore} />
          <Score text="Score" num={score} />
        </div>
        <Controls
          up={() => up(data, setData)}
          down={() => down(data, setData)}
          left={() => left(data, setData)}
          right={() => right(data, setData)}
        />
      </div>
    </div>
  );
};

export default Game;
