import React, { useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
import gsap from 'gsap';
import TypeIt from 'typeit-react';
import { ImArrowDown2 as ArrowDown } from 'react-icons/im';
import avatar from '@assets/avatarAnimado.png';
import styles from './Banner.module.css';

function Banner() {
  const blackColumnRef = useRef();
  const purpleColumnRef = useRef();
  const nameText1Ref = useRef();
  const nameText2Ref = useRef();
  const avatarRef = useRef();
  const writableTextRef = useRef();
  const circle1Ref = useRef();
  const circle2Ref = useRef();
  const downButtonRef = useRef();

  const openAnimation = () => {
    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo(
      blackColumnRef.current,
      { css: { transform: 'translateY(100%)' }, duration: 1 },
      { css: { transform: 'translateY(0%)' }, duration: 1 },
      0.3,
    )
      .fromTo(
        purpleColumnRef.current,
        { css: { transform: 'translateY(-100%)' }, duration: 1 },
        { css: { transform: 'translateY(0%)' }, duration: 1 },
        0.3,
      )
      .fromTo(nameText1Ref.current, { y: -30, opacity: 0 }, { y: 0, opacity: 1 })
      .addLabel('name')
      .fromTo(nameText2Ref.current, { y: -30, opacity: 0 }, { y: 0, opacity: 1 }, 'name')
      .fromTo(writableTextRef.current, { opacity: 0 }, { opacity: 1, duration: 1 }, 'name')
      .fromTo(avatarRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 'name')
      .fromTo(circle1Ref.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, 'name')
      .fromTo(circle2Ref.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, 'name')
      .fromTo(downButtonRef.current, { opacity: 0 }, { opacity: 1 }, 'name');
  };

  useEffect(() => {
    openAnimation();
  }, []);
  return (
    <div className={styles.banner}>
      <div className={styles.backgroundMosaic}>
        <div className={`${styles.column} ${styles.blackColumn}`} ref={blackColumnRef} />
        <div className={`${styles.column} ${styles.purpleColumn}`} ref={purpleColumnRef} />
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.textContainer}>
          <div className={styles.nameContainer}>
            <span ref={nameText1Ref}>Soy</span>
            <h1 ref={nameText2Ref}>Diego Aquino</h1>
          </div>

          <h3 ref={writableTextRef}>
            <TypeIt
              className={styles.writeText}
              options={{
                speed: 100,
                waitUntilVisible: true,
                loop: true,
              }}
              getBeforeInit={(inst) => {
                ['Estudiante', 'Desarrollador de software', 'Ingeniero en proceso'].forEach(
                  (item) => {
                    inst.pause(2500);
                    inst.type(item).pause(2000).delete();
                  },
                );
                inst.go();
                return inst;
              }}
            />
          </h3>
        </div>
        <img src={avatar} ref={avatarRef} alt="imagen de Diego animada" />
      </div>
      <div className={styles.circlesContainer} ref={circle1Ref}>
        <div className={`${styles.circle1} ${styles.circle}`} />
        <div className={`${styles.circle2} ${styles.circle}`} />
      </div>

      <div className={styles.circlesContainerUp} ref={circle2Ref}>
        <div className={`${styles.circle1} ${styles.circle}`} />
        <div className={`${styles.circle2} ${styles.circle}`} />
      </div>

      <button type="button" className={styles.arrowDownButton} ref={downButtonRef}>
        <ArrowDown className={styles.arrowIcon} />
      </button>
    </div>
  );
}

export default Banner;

Banner.propTypes = {};

Banner.defaultProps = {};