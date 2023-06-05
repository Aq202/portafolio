import React, { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '@components/Navbar';
import AboutMePage from '@pages/AboutMePage';
import ProjectsPage from '@pages/ProjectsPage';
import styles from './NavbarPage.module.css';
import ContactPage from '../ContactPage/ContactPage';
import serverBase from '../../helpers/serverBase';

function NavbarPage() {
  const navbarRef = useRef();
  const pageContainerRef = useRef();

  return (
    <div className={styles.pageContainer} ref={pageContainerRef}>
      <Navbar refProp={navbarRef} />
      <Routes>
        <Route path={`${serverBase}/portafolio/*`} element={<ProjectsPage />} />
        <Route path={`${serverBase}/sobre-mi`} element={<AboutMePage />} />
        <Route path={`${serverBase}/contacto`} element={<ContactPage />} />
      </Routes>

    </div>
  );
}

export default NavbarPage;

NavbarPage.propTypes = {
};

NavbarPage.defaultProps = {

};
