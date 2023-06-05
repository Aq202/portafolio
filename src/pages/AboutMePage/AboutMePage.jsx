import React from 'react';
import TechsBlob from '@components/TechsBlob';
import { scrollbarGray } from '@styles/scrollbar.module.css';
import styles from './AboutMePage.module.css';

function AboutMePage() {
  return (
    <div className={`${styles.aboutMePage} ${scrollbarGray}`}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Sobre mí</h1>
        <ul className={styles.description}>
          <span>¿Diego?</span>
          <li>Un apasionado de la programación y de las nuevas tecnologías.</li>
          <li> Una persona autodidacta y proactiva.</li>
          <li>Alguien que busca la magia en lo ordinario para hacerlo extraordinario.</li>
        </ul>
      </div>
      <TechsBlob className={styles.techsBlob} />

    </div>
  );
}

export default AboutMePage;

AboutMePage.propTypes = {};

AboutMePage.defaultProps = {};
