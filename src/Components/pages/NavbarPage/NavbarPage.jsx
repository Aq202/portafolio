import React, { useRef, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { gsap } from 'gsap';
import Navbar from '../../Navbar/Navbar';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import styles from './NavbarPage.module.css';

function NavbarPage() {
  const navbarRef = useRef();
  const pageContainerRef = useRef();

  const [showContent, setShowContent] = useState(false);

  const loadAnimation = () => {
    const tl = gsap.timeline();

    tl.fromTo(
      navbarRef.current,
      { css: { top: '-50px' } },
      { css: { top: '0px', duration: 1 } },
    ).eventCallback('onComplete', () => {
      // mostrar contenido del router
      setShowContent(true);
    });
  };

  useEffect(() => {
    loadAnimation();
  }, []);
  return (
    <div className={styles.pageContainer} ref={pageContainerRef}>
      <Navbar refProp={navbarRef} />
      {showContent && (
      <Routes>
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      )}
    </div>
  );
}

export default NavbarPage;

NavbarPage.propTypes = {
};

NavbarPage.defaultProps = {

};
