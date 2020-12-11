import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUp,
  faArrowDown,
  faArrowRight,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import style from './Controls.module.scss';

type Props = {
  up: () => void;
  down: () => void;
  left: () => void;
  right: () => void;
};

const Controls: FC<Props> = ({ up, down, left, right }) => {
  return (
    <div className={style.wrapper}>
      <button type="button" className={style.button} onClick={up}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      <div className={style.row}>
        <button type="button" className={style.button} onClick={right}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button type="button" className={style.button} onClick={down}>
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
        <button type="button" className={style.button} onClick={left}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Controls;
