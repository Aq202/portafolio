import React from 'react';
import PropTypes from 'prop-types';
import styles from './CarouselItem.module.css';

function CarouselItem({
  title, image, className, style,
}) {
  return (
    <div className={`${styles.carouselItem} ${className}`} style={style}>
      <span className={styles.title}>{title}</span>
      <img src={image} alt={title} />
    </div>
  );
}

export default CarouselItem;

CarouselItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

CarouselItem.defaultProps = {
  className: '',
  style: null,
};
