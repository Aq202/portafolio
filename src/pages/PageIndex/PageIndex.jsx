import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Banner from '@components/Banner';
import NavbarPage from '@pages/NavbarPage';
import serverBase from '../../helpers/serverBase';

function PageIndex() {
  return (
    <Routes>
      <Route path={serverBase} element={<Banner />} />
      <Route path="/*" element={<NavbarPage />} />
    </Routes>
  );
}

export default PageIndex;

PageIndex.propTypes = {

};

PageIndex.defaultProps = {

};
