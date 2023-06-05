import React, { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '@components/Navbar';
import AboutMePage from '@pages/AboutMePage';
import ProjectsPage from '@pages/ProjectsPage';
import styles from './NavbarPage.module.css';

function NavbarPage() {
  const navbarRef = useRef();
  const pageContainerRef = useRef();

  return (
    <div className={styles.pageContainer} ref={pageContainerRef}>
      <Navbar refProp={navbarRef} />
      <Routes>
        <Route path="/portafolio/*" element={<ProjectsPage />} />
        <Route path="/yo" element={<AboutMePage />} />
      </Routes>

    </div>
  );
}

export default NavbarPage;

NavbarPage.propTypes = {
};

NavbarPage.defaultProps = {

};
