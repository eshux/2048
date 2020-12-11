import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import style from './Grid.module.scss';
import Cell from '../Cell/Cell';

type Props = {
  data: number[][]
};

const Grid:FC<Props> = ({ data }) => {
  return (
    <div className={style.grid}>
      {data.map((row) => {
        return (
          <div key={uuidv4()}>
            {row.map((cell) => {
              return <Cell key={uuidv4()} num={cell} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
