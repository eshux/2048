import React, { FC } from 'react';
import style from './Score.module.scss';

type Props = {
  num: number;
  text: string;
};

const Score: FC<Props> = ({ num, text }) => {
  return (
    <div className={style.wrapper}>
      {text} <span className={style.score}>{num}</span>
    </div>
  );
};

export default Score;
