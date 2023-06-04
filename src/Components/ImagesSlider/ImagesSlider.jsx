import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import styles from './ImagesSlider.module.css';

function ImagesSlider({ imagesList, className }) {
  const sliderRef = useRef();
  const imagesRef = useRef([]);

  const animation = () => {
    const tl = gsap.timeline();
    for (let index = 0; index < imagesList.length - 1; index += 1) {
      tl.to(sliderRef.current, { css: { marginLeft: `-${(index + 1) * 100}%` }, duration: 2, delay: 3 });
    }

    tl.eventCallback('onComplete', () => {
      // cambiar de ruta al finalizar animación de salida
      setTimeout(() => tl.reverse(), 3000);
    }).eventCallback('onReverseComplete', () => {
      // cambiar de ruta al finalizar animación de salida
      tl.restart();
    });
  };

  useEffect(() => {
    animation();
  }, []);

  return (
    <div className={`${styles.imagesSlider} ${className}`}>
      <div
        className={styles.imagesContainer}
        style={{ width: `${imagesList.length * 100}%` }}
        ref={sliderRef}
      >
        {imagesList?.map((img, index) => (
          <img src={img} alt={`Imagen proyecto ${index}`} ref={(elem) => { imagesRef.current[index] = elem; }} />
        ))}
      </div>
    </div>
  );
}

export default ImagesSlider;

ImagesSlider.propTypes = {
  imagesList: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

ImagesSlider.defaultProps = {
  className: '',
};
