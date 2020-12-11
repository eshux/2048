import React, { FC } from 'react';
import style from './Cell.module.scss';

type Props = {
  num: number;
};

const Cell: FC<Props> = ({ num }) => {

  return (
    <div id={`${num}`} className={`${style.cell} ${num !== 0 ? style.activeCell : ''}`}>
      <div className={style.content}>{num}</div>
    </div>
  );
};

export default Cell;
