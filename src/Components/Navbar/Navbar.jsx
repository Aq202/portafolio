import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar({ refProp }) {
  return (
    <nav className={styles.navbar} ref={refProp}>
      <NavLink to="/" className={styles.logoContainer}>
        <div className={styles.logo} />
        <span className={styles.logoName}>Diego Aquino</span>
      </NavLink>
      <ul>
        <li>
          <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to="/yo">
            Sobre mí
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to="/portafolio">
            Portafolio
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to="/contacto">
            Contacto
          </NavLink>
        </li>
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
