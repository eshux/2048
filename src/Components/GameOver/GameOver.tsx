import React, { FC } from 'react';
import style from './GameOver.module.scss';

type Props = {
  over: boolean;
  win: boolean;
  score: number;
};

const GameOver: FC<Props> = ({ over, score, win }) => {
  return (
    <>
      {(over || win) && (
        <div id="bg" className={style.bg}>
          {over ? (
            <div className={style.wrapper}>
              <h1>Game Over</h1>
              <h2>
                Your score: <span className={style.score}>{score}</span>
              </h2>
            </div>
          ) : (
            <div className={style.wrapper}>
              <h1>Congratulations!</h1>
              <h2>
                Your score: <span className={style.score}>{score}</span>
              </h2>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default GameOver;
