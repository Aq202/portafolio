import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Carousel from '@components/Carousel';
import ProjectDetailPage from '@pages/ProjectDetailPage';

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
