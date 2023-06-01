import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import TypeIt from 'typeit-react';
import styles from './WelcomeScreen.module.css';
import avatar from '../../assets/avatar.png';

function WelcomeScreen() {
  const [timeCounter, setTimeCounter] = useState(null);
  const [inProgress, setInProgress] = useState(false);
  const [turnedOn, setTurnedOn] = useState(false);
  const [instance, setInstance] = useState(null);
  const [blockTurnOn, setBlockTurnOn] = useState(true);

  const mouseDownHandler = () => {
    if (blockTurnOn) return;
    setInProgress(true);
    setTimeCounter(setTimeout(() => setTurnedOn(true), 2500));
  };

  const mouseUpHandler = () => {
    clearTimeout(timeCounter);
    if (!turnedOn)setInProgress(false);
    console.log(instance);
  };

  useEffect(() => {
    if (!turnedOn) return;
    instance.empty().type('Gracias.').pause(1000).empty()

      .type('Ahora sí, continuemos.')
      .flush(() => console.log('TERMINADO'));
  }, [turnedOn]);

  return (
    <div
      className={`${styles.welcomeScreen} ${inProgress || turnedOn ? styles.turnOn : ''}`}
      onMouseDown={mouseDownHandler}
      onKeyDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}
      onKeyUp={mouseUpHandler}
      role="button"
      tabIndex="0"
    >
      <div className={styles.text}>
        <TypeIt
          options={{
            speed: 30,
            waitUntilVisible: true,
            afterComplete: () => setBlockTurnOn(false),
          }}
          getBeforeInit={(inst) => {
            setInstance(inst);
            inst.pause(2500)
              .type('Está un poco oscuro, ¿verdad?')
              .go();

            // Remember to return it!
            return inst;
          }}
        />
      </div>
      <img src={avatar} alt="Imagen de hacker" className={styles.imageBanner} />
      <div className={styles.darkness} />
    </div>
  );
}

export default WelcomeScreen;

WelcomeScreen.propTypes = {

};

WelcomeScreen.defaultProps = {

};
