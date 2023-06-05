import React, { useEffect, useRef, useState } from 'react';
// import PropTypes from 'prop-types';
import techsData from '@helpers/techsData';
import { gsap } from 'gsap';
import styles from './TechsBlob.module.css';
import AnimatedBlob from '../AnimatedBlob';

function TechsBlob() {
  const techImgRef = useRef();
  const [img, setImg] = useState();

  const changeImage = (image) => {
    setImg(image);
  };

  const animate = () => {
    const tl = gsap.timeline({});
    tl
      .call(changeImage, [techsData[0]]);

    for (let index = 0; index < techsData.length; index += 1) {
      tl.fromTo(
        techImgRef.current,
        { css: { marginTop: '10px', opacity: 0 } },
        { css: { marginTop: 0, opacity: 1 }, delay: index === 0 ? 0 : 1 },
      )
        .to(
          techImgRef.current,
          { css: { marginTop: '10px', opacity: 0 }, delay: 3 },
        );

      if (index !== techsData.length - 1) tl.call(changeImage, [techsData[index + 1]]);
    }

    tl.eventCallback('onComplete', () => {
      setTimeout(() => tl.restart(), 1000);
    });
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <div className={styles.blobContainer}>
      <div className={styles.blob}>
        <AnimatedBlob />
      </div>
      <div className={styles.blob}>
        <AnimatedBlob />
      </div>

      <div className={styles.techsContainer}>
        <div className={styles.techItem}>
          <img
            src={img?.img}
            alt="Html, css, js"
            ref={techImgRef}
          />
        </div>
      </div>
    </div>
  );
}

export default TechsBlob;

TechsBlob.propTypes = {};

TechsBlob.defaultProps = {};
