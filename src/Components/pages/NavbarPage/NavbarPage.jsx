import React, { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import styles from './NavbarPage.module.css';
import AboutMePage from '../AboutMePage/AboutMePage';

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
