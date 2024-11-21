import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CarouselItem.module.css';

function CarouselItem({
  id, title, image, vertical, className, style,
}) {
  return (
    <Link
      className={`${styles.carouselItem} ${vertical ? styles.vertical : ''} ${className}`}
      style={style}
      to={`${id}`}
    >
      <span className={styles.title}>{title}</span>
      <img src={image} alt={title} />
    </Link>
  );
}

export default CarouselItem;

CarouselItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
  vertical: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

CarouselItem.defaultProps = {
  className: '',
  style: null,
  vertical: false,
};
