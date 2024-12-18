import React, { useEffect, useRef } from 'react';
import projectsData from '@helpers/projectsData';
import { BiLeftArrowAlt as CloseIcon } from 'react-icons/bi';
import { gsap } from 'gsap';
import { useNavigate, useParams } from 'react-router-dom';
import { scrollbarGray } from '@styles/scrollbar.module.css';
import ImagesSlider from '@components/ImagesSlider';
import serverBase from '@helpers/serverBase';
import styles from './ProjectDetailPage.module.css';

function ProjectDetailPage() {
  const pageRef = useRef();
  const navigate = useNavigate();
  const { id } = useParams();

  const openAnimation = () => {
    const tl = gsap.timeline();

    tl
      .set(pageRef.current, { css: { opacity: 1 } })
      .fromTo(
        pageRef.current,
        { css: { marginTop: '-100%' } },
        { css: { marginTop: 0 }, ease: 'expo.out', duration: 1 },
      );
  };

  const closeAnimation = () => {
    const tl = gsap.timeline();

    tl
      .set(pageRef.current, { css: { overflow: 'hidden' } })
      .to(pageRef.current, {
        y: 100, opacity: 0, ease: 'circ.out', duration: 0.5,
      })
      .eventCallback('onComplete', () => {
        // regresar a la ruta de proyectos
        navigate(`${serverBase}/portafolio`);
      });
  };

  useEffect(() => {
    if (projectsData[id] !== undefined) openAnimation();
    else navigate(`${serverBase}/portafolio`);
  }, [id]);

  return (
    <div className={styles.projectDetailPage}>
      <div className={`${styles.pageContainer} ${scrollbarGray}`} ref={pageRef}>
        <div className={styles.headerContainer}>
          <h1>{projectsData[id]?.title}</h1>
          <button type="button" className={styles.closeButton} onClick={closeAnimation}>
            <CloseIcon className={styles.closeIcon} />
          </button>
        </div>
        <div className={styles.projectDataContainer}>
          <div className={styles.col1}>
            <p className={styles.technologies}>{projectsData[id]?.tec}</p>
            <p className={styles.description}>
              {projectsData[id]?.description}
            </p>
            {projectsData[id]?.link && <a href={projectsData[id].link}> Visitar sitio </a>}
          </div>
          <div className={styles.col2}>
            <ImagesSlider
              imagesList={projectsData[id]?.images}
              vertical={projectsData[id]?.vertical}
              className={styles.slider}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailPage;
