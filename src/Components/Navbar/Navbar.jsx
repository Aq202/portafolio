import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar({ refProp }) {
  return (
    <nav className={styles.navbar} ref={refProp}>
      <Link to="/" className={styles.logoContainer}>
        <div className={styles.logo} />
        <span className={styles.logoName}>Diego Aquino</span>
      </Link>
      <ul>
        <li><Link to="/yo">Sobre mí</Link></li>
        <li><Link to="/portafolio">Portafolio</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
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
