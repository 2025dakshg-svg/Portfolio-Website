import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Projects from '../pages/Projects.jsx';
import ProjectDetail from '../pages/ProjectDetail.jsx';
import Connect from '../pages/Connect.jsx';

const routeConfig = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/projects', element: <Projects /> },
  { path: '/projects/:id', element: <ProjectDetail /> },
  { path: '/connect', element: <Connect /> },
  { path: '/bio', element: <Navigate to="/about" replace /> },
];

const AppRoutes = () => useRoutes(routeConfig);

export default AppRoutes;
