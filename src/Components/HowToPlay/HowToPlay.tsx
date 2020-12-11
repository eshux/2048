import React, { useEffect, useState } from 'react';
import style from './HowToPlay.module.scss';
import Button from '../Button/Button';

const HowToPlay = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // @ts-ignore
    const closeHandler = (e) => e.target.id && setShow(false);
    window.addEventListener('mousedown', closeHandler);
    return () => {
      window.removeEventListener('mousedown', closeHandler);
    };
  });

  return (
    <>
      <Button text="How To Play" onClick={() => setShow(true)} />
      {show && (
        <div id="bg" className={style.bg}>
          <div className={style.wrapper}>
            <h1>How to Play</h1>
            <p>
              Use your arrow keys or buttons on the right side to move the
              tiles. Tiles with the same number merge into one when they touch.
              Add them up to reach <strong>2048</strong>!
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default HowToPlay;
