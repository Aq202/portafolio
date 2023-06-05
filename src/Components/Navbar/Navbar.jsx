import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import TypeIt from 'typeit-react';
import serverBase from '@helpers/serverBase';
import styles from './Navbar.module.css';

function Navbar({ refProp }) {
  return (
    <nav className={styles.navbar} ref={refProp}>
      <NavLink to={serverBase} className={styles.logoContainer}>
        <div className={styles.logo} />
        <TypeIt
          className={styles.logoName}
          options={{
            strings: ['Diego Aquino'],
            speed: 200,
            waitUntilVisible: true,
          }}
        />
      </NavLink>
      <ul>
        <li>
          <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={`${serverBase}/sobre-mi`}>
            Sobre mí
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={`${serverBase}/portafolio`}>
            Portafolio
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={`${serverBase}/contacto`}>
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
