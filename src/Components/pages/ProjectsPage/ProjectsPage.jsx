import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Carousel from '../../Carousel/Carousel';
import ProjectDetailPage from '../ProjectDetailPage/ProjectDetailPage';

function ProjectsPage() {
  return (
    <>
      <Carousel />
      <Routes>
        <Route path="/:id" element={<ProjectDetailPage />} />
      </Routes>
    </>
  );
}

export default ProjectsPage;

ProjectsPage.propTypes = {

};

ProjectsPage.defaultProps = {

};
