import React from 'react';
// import PropTypes from 'prop-types';
import styles from './AboutMePage.module.css';
import TechsBlob from '../../TechsBlob/TechsBlob';

function AboutMePage() {
  return (
    <div className={styles.aboutMePage}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Sobre mí</h1>
        <ul className={styles.description}>
          <span>¿Diego?</span>
          <li>Un apasionado de la programación y de las nuevas tecnologías.</li>
          <li> Una persona autodidacta y proactiva.</li>
          <li>Alguien que busca la magia en lo ordinario para hacerlo extraordinario.</li>
        </ul>
      </div>
      <TechsBlob />

    </div>
  );
}

export default AboutMePage;

AboutMePage.propTypes = {};

AboutMePage.defaultProps = {};
