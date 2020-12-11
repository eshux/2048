import React, { FC } from 'react';
import style from './GameOver.module.scss';

type Props = {
  over: boolean;
  score: number;
};

const GameOver: FC<Props> = ({ over, score }) => {
  return (
    <>
      {over && (
        <div id="bg" className={style.bg}>
          <div className={style.wrapper}>
            <h1>Game Over</h1>
            <h2>
              Your score: <span className={style.score}>{score}</span>
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default GameOver;
