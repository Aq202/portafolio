import React, { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import styles from './NavbarPage.module.css';
import ProjectDetailPage from '../ProjectDetailPage/ProjectDetailPage';

function NavbarPage() {
  const navbarRef = useRef();
  const pageContainerRef = useRef();

  return (
    <div className={styles.pageContainer} ref={pageContainerRef}>
      <Navbar refProp={navbarRef} />
      <Routes>
        <Route path="/projects/*" element={<ProjectsPage />} />
        <Route path="/detail" element={<ProjectDetailPage />} />
      </Routes>

    </div>
  );
}

export default NavbarPage;

NavbarPage.propTypes = {
};

NavbarPage.defaultProps = {

};
