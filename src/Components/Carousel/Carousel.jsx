import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import items from '@helpers/projectsData.js';
import styles from './Carousel.module.css';
import CarouselItem from '../CarouselItem/CarouselItem';

function Carousel() {
  const [carrouselScroll, setCarrouselScroll] = useState(0);

  const handleScroll = (e) => {
    setCarrouselScroll((val) => {
      const newValue = val + -e.deltaY;
      if (newValue > 0) return 0;
      const maxValue = -items.length * 270;
      if (newValue < maxValue) return maxValue;
      return newValue;
    });
  };

  const calculateCarouselSpin = (scrollValue) => {
    if (scrollValue > 0) return 0;
    const maxSpin = -((items.length - 1) * 60);
    if (scrollValue < maxSpin) return maxSpin;
    return scrollValue;
  };
  return (
    <div className={styles.container} onWheel={handleScroll}>
      <h1 className={styles.pageTitle} style={{ marginTop: carrouselScroll / 2.5 }}>
        Mis Proyectos
      </h1>
      <div
        className={styles.carousel}
        style={{
          transform: `rotateY(${calculateCarouselSpin(carrouselScroll / 5)}deg)`,
        }}
      >
        {items.map((item, index) => (
          <CarouselItem
            title={item.title}
            image={item.images[0]}
            style={{
              transform: `rotateY(${index * 60}deg) translateZ(250px)`,
              marginTop: index === 0 ? 0 : '-70px',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;

Carousel.propTypes = {};

Carousel.defaultProps = {};
