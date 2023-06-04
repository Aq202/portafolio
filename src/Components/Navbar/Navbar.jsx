import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';

function Navbar({ refProp }) {
  return (
    <nav className={styles.navbar} ref={refProp}>
      <div className={styles.logoContainer}>
        <div className={styles.logo} />
        <span className={styles.logoName}>Diego Aquino</span>
      </div>
      <ul>

        <li><a href="/">Inicio</a></li>
        <li>Portafolio</li>
        <li><a href="/">Tareas Web</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

Navbar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  refProp: PropTypes.any,
};

Navbar.defaultProps = {
  refProp: null,
};
